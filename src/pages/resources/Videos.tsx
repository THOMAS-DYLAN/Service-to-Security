import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Play, Clock } from 'lucide-react';

const videos = [
  { title: 'Medicare 101: Everything You Need to Know', duration: '12 min', category: 'Medicare', desc: 'A complete overview of Medicare parts A, B, C, and D -- what they cover, what they cost, and how to enroll.' },
  { title: 'Choosing Between Medicare Advantage and Medigap', duration: '8 min', category: 'Medicare', desc: 'Understand the key differences and find the right fit for your healthcare needs and budget.' },
  { title: 'When to Claim Social Security', duration: '10 min', category: 'Retirement', desc: 'Strategic timing options and how filing age impacts your lifetime benefits.' },
  { title: 'Building Your Retirement Paycheck', duration: '14 min', category: 'Retirement', desc: 'How to turn your savings into reliable monthly income that lasts throughout retirement.' },
  { title: 'Understanding Long-Term Care Risks', duration: '9 min', category: 'Retirement', desc: 'The costs, risks, and planning options every retiree should understand.' },
  { title: 'Avoiding Medicare Enrollment Penalties', duration: '7 min', category: 'Medicare', desc: 'Don\'t let missed deadlines cost you money -- learn the enrollment periods and penalties.' },
];

const Videos = () => (
  <PageLayout>
    <HeroSection
      title="VIDEO LIBRARY"
      subtitle="Watch and learn at your own pace -- expert guidance on Medicare and retirement planning in short, focused videos."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.title} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/50 cursor-pointer hover:bg-white/30 transition">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">{video.category}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-blue-600 mb-1">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{video.desc}</p>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <Clock className="w-3 h-3" /> {video.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Videos;
