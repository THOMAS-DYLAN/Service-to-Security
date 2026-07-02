import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { ShieldCheck, Users, Award, TrendingUp, Heart, Clock } from 'lucide-react';

const WhyChooseUs = () => (
  <PageLayout>
    <HeroSection
      title="WHY CHOOSE US"
      subtitle="Mission-driven financial planning built on trust, expertise, and a genuine commitment to your future."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: 'Certified Expertise', desc: 'Retirement Income Certified Professional (RICP®), Certified Long-Term Care (CLTC), and Medicare Masters Certified (MMC) certifications ensure you receive guidance from a true specialist in retirement, long-term care, and Medicare planning.' },
            { icon: Users, title: 'Veteran-Focused', desc: 'We understand the unique challenges veterans face transitioning from service to retirement and tailor our strategies accordingly.' },
            { icon: Award, title: 'No-Pressure Approach', desc: 'We never push products. We educate, recommend, and let you make confident decisions at your own pace.' },
            { icon: TrendingUp, title: 'Comprehensive Planning', desc: 'From Medicare enrollment to income strategies and asset protection, we cover every aspect of your retirement defense.' },
            { icon: Heart, title: 'Client-First Values', desc: 'Every recommendation is made with your best interest at heart. Your goals drive our strategy -- not sales quotas.' },
            { icon: Clock, title: 'Ongoing Support', desc: 'Our relationship doesn\'t end after enrollment. We provide annual reviews, ongoing adjustments, and year-round support.' },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-600 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-red-500">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white mb-6">THE RISK OF GOING WITHOUT GUIDANCE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {[
            'Choosing the wrong Medicare plan can cost thousands in out-of-pocket expenses each year',
            'Without income planning, many retirees risk outliving their savings',
            'Late enrollment penalties can permanently increase your premiums',
            'Failing to plan for long-term care can devastate your family\'s finances',
          ].map((risk) => (
            <div key={risk} className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
              <div className="w-2 h-2 mt-2 rounded-full bg-white shrink-0" />
              <p className="text-white">{risk}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">OUR PROMISE</h2>
        <p className="text-gray-700 text-lg mb-6">
          At Service to Security, we promise to treat every client like family. We bring military-grade precision to financial planning and stand guard over what you've earned. Your future isn't just our business -- it's our mission.
        </p>
        <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p className="text-blue-700 font-semibold italic text-lg">"Service to Security. Your Future. My Mission."</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default WhyChooseUs;
