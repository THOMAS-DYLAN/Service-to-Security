import { useState, useEffect, useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { X, Play } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type VideoSource = 'youtube' | 'facebook' | 'tiktok' | 'instagram' | 'direct';

interface Video {
  id: string;
  title: string;
  category: string;
  date: string;
  source: VideoSource;
  // For YouTube: full watch URL or embed URL
  // For Facebook: full post/video URL
  // For TikTok: full video URL
  // For Instagram: full reel/post URL
  // For direct: URL to an .mp4 or other video file
  url: string;
  thumbnail?: string; // optional override thumbnail image URL
}

// ─── Helper: build embed URL from source ─────────────────────────────────────

const getEmbedUrl = (video: Video): string | null => {
  const { source, url } = video;

  if (source === 'youtube') {
    // Accept both watch?v=ID and youtu.be/ID and embed URLs
    const match =
      url.match(/[?&]v=([^&]+)/) ||
      url.match(/youtu\.be\/([^?&]+)/) ||
      url.match(/embed\/([^?&]+)/);
    const id = match?.[1];
    return id
      ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`
      : null;
  }

  if (source === 'facebook') {
    // Facebook embed via their plugin — requires a public video URL
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&autoplay=true&allowfullscreen=true`;
  }

  if (source === 'tiktok') {
    // TikTok embed — extract video ID from URL like tiktok.com/@user/video/ID
    const match = url.match(/video\/(\d+)/);
    const id = match?.[1];
    return id ? `https://www.tiktok.com/embed/v2/${id}` : null;
  }

  if (source === 'instagram') {
    // Instagram embed — strip trailing slash, add /embed/
    const clean = url.replace(/\/$/, '');
    return `${clean}/embed/`;
  }

  if (source === 'direct') {
    // Direct video file — handled separately with <video> tag
    return url;
  }

  return null;
};

const getThumbnailUrl = (video: Video): string => {
  if (video.thumbnail) return video.thumbnail;

  if (video.source === 'youtube') {
    const match =
      video.url.match(/[?&]v=([^&]+)/) ||
      video.url.match(/youtu\.be\/([^?&]+)/) ||
      video.url.match(/embed\/([^?&]+)/);
    const id = match?.[1];
    return id
      ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
      : 'https://placehold.co/640x360/1e3a5f/ffffff?text=Video';
  }

  return 'https://placehold.co/640x360/1e3a5f/ffffff?text=Video';
};

// ─── Videos ───────────────────────────────────────────────────────────────────
// To add a video, add an entry here. Set source to the platform and url to the
// full public URL of the video. For direct video files, use source: 'direct'.

const videos: Video[] = [
  {
    id: 'v1',
    title: 'Medicare 101: What You Need to Know Before You Enroll',
    category: 'Medicare',
    date: 'June 2026',
    source: 'youtube',
    url: 'https://www.youtube.com/watch?v=DpTTiWqfDus',
  },
  {
    id: 'v2',
    title: 'Social Security: When Should You Start Taking Benefits?',
    category: 'Retirement',
    date: 'May 2026',
    source: 'youtube',
    url: 'https://www.youtube.com/watch?v=eoKDJSAMSV0',
  },
];

const categories = ['All', 'Medicare', 'Retirement'];

// ─── Video Player (inside modal) ──────────────────────────────────────────────

const VideoPlayer = ({ video }: { video: Video }) => {
  const embedUrl = getEmbedUrl(video);

  if (video.source === 'direct' && embedUrl) {
    return (
      <video
        src={embedUrl}
        controls
        autoPlay
        className="w-full h-full"
        style={{ background: '#000' }}
      />
    );
  }

  if (!embedUrl) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white text-sm">
        Unable to embed this video. <a href={video.url} target="_blank" rel="noreferrer" className="ml-2 underline text-blue-300">Open directly →</a>
      </div>
    );
  }

  return (
    <iframe
      src={embedUrl}
      className="w-full h-full"
      style={{ border: 'none' }}
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
      allowFullScreen
      title={video.title}
    />
  );
};

// ─── Modal ────────────────────────────────────────────────────────────────────

const VideoModal = ({ video, onClose }: { video: Video; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-4xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white flex items-center gap-1.5 text-sm transition"
          aria-label="Close"
        >
          <X className="w-4 h-4" /> Close
        </button>

        {/* Title */}
        <div className="mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400">{video.category}</span>
          <h2 className="text-white font-bold text-lg leading-snug mt-0.5">{video.title}</h2>
        </div>

        {/* Player */}
        <div className="relative w-full rounded-xl overflow-hidden bg-black shadow-2xl" style={{ paddingTop: '56.25%' }}>
          <div className="absolute inset-0">
            <VideoPlayer video={video} />
          </div>
        </div>

        {/* Meta */}
        <p className="mt-3 text-white/40 text-xs">{video.date}</p>
      </div>
    </div>
  );
};

// ─── Video Card ───────────────────────────────────────────────────────────────

const VideoCard = ({ video, onClick }: { video: Video; onClick: () => void }) => {
  const [imgError, setImgError] = useState(false);
  const thumbnail = getThumbnailUrl(video);

  return (
    <button
      onClick={onClick}
      className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="relative w-full bg-gray-900" style={{ paddingTop: '56.25%' }}>
        {!imgError ? (
          <img
            src={thumbnail}
            alt={video.title}
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-red-900 flex items-center justify-center">
            <Play className="w-10 h-10 text-white/30" />
          </div>
        )}

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-200" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-200 shadow-lg">
            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-bold uppercase tracking-wider bg-red-500 text-white px-2 py-0.5 rounded-md">
            {video.category}
          </span>
        </div>

        {/* Source badge */}
        <div className="absolute top-3 right-3">
          <span className="text-xs font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-sm text-white/80 px-2 py-0.5 rounded-md">
            {video.source}
          </span>
        </div>
      </div>

      {/* Info strip */}
      <div className="bg-white border border-t-0 border-gray-200 px-4 py-3 rounded-b-xl group-hover:bg-blue-50 transition-colors duration-200">
        <p className="text-xs text-gray-400 mb-0.5">{video.date}</p>
        <h3 className="text-sm font-bold text-blue-800 leading-snug line-clamp-2">{video.title}</h3>
      </div>
    </button>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const Information = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const filtered = activeCategory === 'All'
    ? videos
    : videos.filter((v) => v.category === activeCategory);

  return (
    <PageLayout>
      <HeroSection
        title="INFORMATION"
        subtitle="Watch our latest videos on Medicare and retirement planning — straight from us to you."
      />

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Category filter */}
          <div className="flex gap-3 mb-10 justify-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
                  activeCategory === cat
                    ? 'bg-red-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-20">No videos in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={() => setActiveVideo(video)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </PageLayout>
  );
};

export default Information;
