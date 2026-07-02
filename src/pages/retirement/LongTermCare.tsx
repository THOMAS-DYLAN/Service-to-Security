import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Shield, Heart, DollarSign, Users } from 'lucide-react';

const LongTermCare = () => (
  <PageLayout>
    <HeroSection
      title="LONG-TERM CARE PLANNING"
      subtitle="Protect your assets, your dignity, and your family from the devastating costs of extended care."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">THE REALITY OF LONG-TERM CARE</h2>
        <p className="text-gray-700 mb-4">
          Over 70% of Americans turning 65 will need some form of long-term care during their lifetime. Whether it's home health aides, assisted living, or nursing home care, the costs can quickly deplete retirement savings and burden family members.
        </p>
        <p className="text-gray-700 mb-8">
          Medicare does NOT cover most long-term care costs. Without a plan, families are often left scrambling to cover expenses that can exceed $100,000 per year.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: DollarSign, title: 'Average Costs', desc: 'Nursing home care averages over $8,000/month. Home health aides cost $25-$30/hour. These costs can devastate unprotected families.' },
            { icon: Shield, title: 'Asset Protection', desc: 'Long-term care insurance and hybrid policies protect your savings, home, and investments from being depleted by care costs.' },
            { icon: Heart, title: 'Family Impact', desc: 'Without planning, the caregiving burden falls on family members -- affecting their health, careers, and finances.' },
            { icon: Users, title: 'Planning Options', desc: 'Traditional LTC insurance, hybrid life/LTC policies, and asset-based solutions offer flexible protection strategies.' },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-red-600" />
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
        <h2 className="text-3xl font-bold text-white mb-6">WHY IT MATTERS</h2>
        <p className="text-blue-50 text-lg mb-4">
          The biggest risk to your retirement isn't market volatility -- it's an unplanned long-term care event. A single extended care need can wipe out decades of savings and leave a surviving spouse financially vulnerable.
        </p>
        <p className="text-white font-semibold text-lg">
          Planning ahead preserves your independence, your assets, and your family's well-being.
        </p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">OUR APPROACH</h2>
        <p className="text-gray-700 text-lg mb-4">
          As a Certified Long-Term Care (CLTC) professional, Michael Thomas evaluates your risk, family history, and financial situation to recommend the most appropriate protection strategy. We explore all options including traditional policies, hybrid solutions, and self-funding strategies.
        </p>
        <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p className="text-blue-700 font-semibold italic">"The best time to plan for long-term care is before you need it."</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default LongTermCare;
