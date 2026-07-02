import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Medicare', 'Retirement'];

const blogPosts = [
  { title: '5 Medicare Mistakes That Cost Retirees Thousands', category: 'Medicare', date: 'February 2026', excerpt: 'Avoid these common pitfalls during Medicare enrollment to protect your wallet and your coverage.' },
  { title: 'When Should You Claim Social Security? A Strategic Guide', category: 'Retirement', date: 'February 2026', excerpt: 'The right timing can mean hundreds of thousands of dollars in additional lifetime benefits.' },
  { title: 'Medicare Advantage vs. Medigap: Which Is Right for You?', category: 'Medicare', date: 'January 2026', excerpt: 'Understanding the key differences to make the best choice for your healthcare needs.' },
  { title: 'How to Create a Retirement Paycheck That Lasts', category: 'Retirement', date: 'January 2026', excerpt: 'Strategies for turning your savings into reliable monthly income throughout retirement.' },
  { title: 'Understanding the Medicare Part D Out-of-Pocket Cap', category: 'Medicare', date: 'December 2025', excerpt: 'How the new $2,100 annual cap changes the game for prescription drug coverage in 2026.' },
  { title: 'Protecting Your Assets from Long-Term Care Costs', category: 'Retirement', date: 'December 2025', excerpt: 'Planning strategies to shield your savings from the devastating costs of extended care.' },
  { title: 'Medicare Open Enrollment: What You Need to Know', category: 'Medicare', date: 'November 2025', excerpt: 'Key dates, deadlines, and strategies for reviewing and updating your Medicare coverage.' },
  { title: 'The Infinite Banking Concept: Be Your Own Bank', category: 'Retirement', date: 'November 2025', excerpt: 'How whole life insurance can be used as a powerful personal banking strategy.' },
  { title: 'Plan F vs. Plan G: Which Medigap Plan Wins?', category: 'Medicare', date: 'October 2025', excerpt: 'A head-to-head comparison of the two most popular Medicare Supplement plans.' },
  { title: 'Estate Planning Basics Every Retiree Should Know', category: 'Retirement', date: 'October 2025', excerpt: 'Why trusts, wills, and beneficiary designations matter more than you think.' },
  { title: 'Turning 65? Your Medicare Enrollment Timeline', category: 'Medicare', date: 'September 2025', excerpt: 'A month-by-month guide to preparing for Medicare enrollment before your 65th birthday.' },
  { title: 'How Annuities Fit Into Your Retirement Income Plan', category: 'Retirement', date: 'September 2025', excerpt: 'Understanding when annuities make sense and how they can provide guaranteed lifetime income.' },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <PageLayout>
      <HeroSection
        title="BLOG"
        subtitle="Expert insights on Medicare, retirement planning, and financial security -- written in plain English."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
          <div className="flex gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition ${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <div key={post.title} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-3 bg-blue-600" />
                <div className="p-6">
                  <span className="text-xs font-semibold text-red-500 uppercase">{post.category}</span>
                  <h3 className="text-lg font-bold text-blue-600 mt-1 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" /> {post.date}</span>
                    <Link to="/contact" className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:text-red-500 transition">
                       Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
