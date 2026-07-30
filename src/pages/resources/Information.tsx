import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { X, Volume2, Maximize } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type VideoSource = 'youtube' | 'facebook' | 'tiktok' | 'instagram' | 'direct';

interface Video {
  id: string;
  title: string;
  category: string;
  date: string;
  source: VideoSource;
  url: string;
  thumbnail?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getEmbedUrl = (video: Video): string | null => {
  const { source, url } = video;

  if (source === 'youtube') {
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
    // Handles both /videos/ and /reel/ URLs
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&autoplay=true&allowfullscreen=true&width=auto`;
  }
  if (source === 'tiktok') {
    const match = url.match(/video\/(\d+)/);
    const id = match?.[1];
    return id ? `https://www.tiktok.com/embed/v2/${id}` : null;
  }
  if (source === 'instagram') {
    return `${url.replace(/\/$/, '')}/embed/`;
  }
  if (source === 'direct') {
    return url;
  }
  return null;
};

const getThumbnail = (video: Video): string => {
  if (video.thumbnail) return video.thumbnail;
  if (video.source === 'youtube') {
    const match =
      video.url.match(/[?&]v=([^&]+)/) ||
      video.url.match(/youtu\.be\/([^?&]+)/) ||
      video.url.match(/embed\/([^?&]+)/);
    const id = match?.[1];
    if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }
  return '';
};

// ─── Videos ───────────────────────────────────────────────────────────────────

const videos: Video[] = [
  {
    id: 'v1',
    title: '"What If" Wednesday w/ Mike Thomas',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1087581636936821',
  },
  {
    id: 'v2',
    title: 'Is Your Estate Plan A Time Bomb!? | Monday Monday w/ Mike Thomas',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/2101929137412531',
  },
  {
    id: 'v3',
    title: 'The Retirement Income Gap | "What If" Wednesday w/ Mike Thomas',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/2327141148103136',
  },
  {
    id: 'v4',
    title: 'What if your plan was built backwards | Money Monday w/ Mike Thomas',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1432609488694655',
  },
  {
    id: 'v5',
    title: 'The Safety Test | "What If" Wednesday w/ Mike Thomas',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1573751707796380',
  },
  {
    id: 'v6',
    title: 'Long Term Care! | Money Monday w/ Mike Thomas',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1577606340518101',
  },
  {
    id: 'v7',
    title: 'Know Your Number! | Money Monday w/ Mike Thomas',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1319655473704175',
  },
  {
    id: 'v8',
    title: '10 Minute Beneficiary Check Up!!! | "What if" Wednesday w/ Mike Thomas',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1724864018519890',
  },
  {
    id: 'v9',
    title: 'MEDICARE!! | "Money Monday" w/ Mike Thomas',
    category: 'Medicare',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/2174020686751754',
  },
  {
    id: 'v10',
    title: 'Cost of Doing Nothing! | "What If" Wednesday w/ Mike Thomas',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1713980076281942',
  },
  {
    id: 'v11',
    title: 'Loyalty Over Luck! | "Money Monday" w/ Mike Thomas',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1410222157583478',
  },
  {
    id: 'v12',
    title: '3 Account Check Up! | "What If" Wednesday w/ Mike Thomas',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/2161971344372268',
  },
  {
    id: 'v13',
    title: 'The Value of Options! | "Money Monday" w/ Mike Thomas',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1699897147806829',
  },
  {
    id: 'v14',
    title: '"Your Money Has A Job!" | "What If" Wednesday w/ Mike Thomas',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/828927870155060',
  },
  {
    id: 'v15',
    title: 'Life Insurance! | Annuity Awareness Month!',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/960931580099454',
  },
  {
    id: 'v16',
    title: '"What If" Wednesday w/ Mike Thomas - Farm/Business Succession',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/970875449072424',
  },
  {
    id: 'v17',
    title: '"What If" Wednesday w/ Mike Thomas - Annual Reviews',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1886876768666904',
  },
  {
    id: 'v18',
    title: '"What If" Wednesday w/ Mike Thomas - WAITING',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1762753725105944',
  },
  {
    id: 'v19',
    title: '"What If" Wednesday w/ Mike Thomas - Protecting Families, Not Chasing Sales',
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1725628415280754',
  },
  {
    id: 'v20',
    title: "The UN's of Life Insurance: What Families Deserve to Know!",
    category: 'Retirement',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/26359487676979882',
  },
  {
    id: 'v21',
    title: 'Medicare Minute w/ Mike — Just Over 2 Days Left of Annual Enrollment Period!',
    category: 'Medicare',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/886556317384957',
  },
  {
    id: 'v22',
    title: 'AEP is Winding Down… 7 Days Left in Annual Enrollment Period',
    category: 'Medicare',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/2352921108472738',
  },
  {
    id: 'v23',
    title: 'Medicare Minute w/ Mike - 3 BIG Things Happening Over the Next Few Weeks!',
    category: 'Medicare',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/3796929243939372',
  },
  {
    id: 'v24',
    title: 'Medicare Minute w/ Mike - Will Widespread SARs Affect Your Medicare Plan?',
    category: 'Medicare',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1171356568195118',
  },
  {
    id: 'v25',
    title: 'Medicare Minute w/ Mike - Annual Enrollment Period is Right Around the Corner!',
    category: 'Medicare',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/31739502295664941',
  },
  {
    id: 'v26',
    title: 'Medicare Minute w/ Mike - Your Future My Mission',
    category: 'Medicare',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1155869753119156',
  },
  {
    id: 'v27',
    title: 'Medicare Minute w/ Mike - VETERANS This One is For You!',
    category: 'Medicare',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/24391053333870970',
  },
  {
    id: 'v28',
    title: 'Medicare Minute w/ Mike Thomas - Have You Reviewed Your ANOC?',
    category: 'Medicare',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1332034905115774',
  },
  {
    id: 'v29',
    title: 'Medicare Minute w/ Mike - What is Medicare',
    category: 'Medicare',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/582710521594020',
  },
  {
    id: 'v30',
    title: 'Medicare Minute w/ Mike – Special Intro Edition',
    category: 'Medicare',
    date: '2026',
    source: 'facebook' as VideoSource,
    url: 'https://www.facebook.com/reel/1296703368529103',
  },
];

const categories = ['All', 'Medicare', 'Retirement'];

// ─── Modal Player ─────────────────────────────────────────────────────────────

const Modal = ({ video, onClose }: { video: Video; onClose: () => void }) => {
  const embedUrl = getEmbedUrl(video);

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
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-3xl mx-4">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3 px-1">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-400">{video.category} · {video.date}</span>
            <h2 className="text-white font-bold text-base leading-snug mt-0.5 max-w-xl">{video.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="ml-4 mt-1 flex-shrink-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Player — capped at 70vh so it never overflows the screen */}
        <div
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black"
          style={{ height: 'min(56.25vw, 70vh)' }}
        >
          <div className="absolute inset-0">
            {video.source === 'direct' && embedUrl ? (
              <video
                src={embedUrl}
                controls
                autoPlay
                className="w-full h-full"
              />
            ) : embedUrl ? (
              <iframe
                src={embedUrl}
                className="w-full h-full"
                style={{ border: 'none' }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                title={video.title}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-white/60 gap-3">
                <p className="text-sm">Can't embed this video directly.</p>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-sm"
                >
                  Watch on original platform →
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Footer hint */}
        <p className="mt-3 text-center text-white/25 text-xs">Press Esc or click outside to close</p>
      </div>
    </div>
  );
};

// ─── Gallery Tile ─────────────────────────────────────────────────────────────

const GalleryTile = ({ video, onClick }: { video: Video; onClick: () => void }) => {
  const [hovered, setHovered] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const thumb = getThumbnail(video);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full focus:outline-none group"
      style={{ paddingTop: '56.25%' }}
      aria-label={`Play: ${video.title}`}
    >
      {/* Thumbnail / background */}
      <div className="absolute inset-0 overflow-hidden rounded-none">
        {thumb && !imgFailed ? (
          <img
            src={thumb}
            alt=""
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
          />
        ) : (
          <div
            className="w-full h-full transition-all duration-500"
            style={{
              background: hovered
                ? 'linear-gradient(135deg, #1e3a6e 0%, #7f1d1d 100%)'
                : 'linear-gradient(135deg, #1e2d4a 0%, #4a1515 100%)',
            }}
          />
        )}

        {/* Overlay gradient — always present, intensifies on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.0) 100%)',
            opacity: hovered ? 1 : 0.7,
          }}
        />

        {/* Category pill */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-all duration-300"
            style={{
              background: hovered ? '#ef4444' : 'rgba(239,68,68,0.8)',
              color: '#fff',
              backdropFilter: 'blur(4px)',
            }}
          >
            {video.category}
          </span>
        </div>

        {/* Play ring */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div
            className="flex items-center justify-center rounded-full border-2 border-white transition-all duration-300"
            style={{
              width: hovered ? 64 : 52,
              height: hovered ? 64 : 52,
              background: hovered ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(4px)',
              boxShadow: hovered ? '0 0 32px rgba(255,255,255,0.2)' : 'none',
            }}
          >
            {/* Triangle */}
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: '10px solid transparent',
                borderBottom: '10px solid transparent',
                borderLeft: hovered ? '18px solid white' : '16px solid rgba(255,255,255,0.85)',
                marginLeft: 3,
                transition: 'all 0.3s',
              }}
            />
          </div>
        </div>

        {/* Title + date at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-4 pt-8 transition-transform duration-300"
          style={{ transform: hovered ? 'translateY(0)' : 'translateY(4px)' }}
        >
          <p className="text-white/50 text-xs mb-1">{video.date}</p>
          <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 text-left">
            {video.title}
          </h3>
        </div>
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
        subtitle="Watch our latest videos on Medicare and retirement planning."
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Category filter */}
          <div className="flex gap-3 mb-8 justify-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-red-500 text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery grid — no cards, no borders, just raw tiles edge to edge */}
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-24 text-sm">No videos in this category yet.</p>
          ) : (
            <div
              className="grid gap-1"
              style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              }}
            >
              {filtered.map((video) => (
                <GalleryTile
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
        <Modal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </PageLayout>
  );
};

export default Information;
