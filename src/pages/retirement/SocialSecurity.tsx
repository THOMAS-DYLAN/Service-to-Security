import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Clock, DollarSign, TrendingUp } from 'lucide-react';

const SocialSecurity = () => (
  <PageLayout>
    <HeroSection
      title="SOCIAL SECURITY OPTIMIZATION"
      subtitle="Maximize your lifetime Social Security benefits with strategic timing and coordination."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">MAKING THE MOST OF YOUR BENEFITS</h2>
        <p className="text-gray-700 mb-4">
          Social Security is one of the most valuable assets in your retirement plan, but the decision of when and how to claim can dramatically impact your lifetime benefits. The difference between the best and worst claiming strategy can be worth hundreds of thousands of dollars.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {[
            { icon: Clock, age: '62', title: 'Early Filing', desc: 'You can start as early as 62, but your benefit is permanently reduced by up to 30%. Best for those with health concerns or immediate income needs.' },
            { icon: DollarSign, age: '67', title: 'Full Retirement Age', desc: 'Filing at your FRA (66-67 depending on birth year) gives you 100% of your earned benefit. A balanced option for many retirees.' },
            { icon: TrendingUp, age: '70', title: 'Delayed Filing', desc: 'Each year you delay past FRA adds 8% to your benefit. Filing at 70 gives you 124-132% of your base amount. Ideal for longevity planning.' },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">{item.age}</span>
              </div>
              <h3 className="text-lg font-bold text-blue-600 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-blue-500">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white mb-6">WHY IT MATTERS</h2>
        <p className="text-blue-50 text-lg mb-4">
          Nearly 70% of Americans claim Social Security before their full retirement age, potentially leaving thousands of dollars on the table. Spousal benefits, survivor benefits, and tax implications add layers of complexity that most retirees don't fully understand.
        </p>
        <p className="text-white font-semibold text-lg">
          The right claiming strategy can mean the difference between a comfortable retirement and financial stress.
        </p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">WHAT WE ANALYZE</h2>
        <div className="space-y-3">
          {[
            'Your full retirement age and benefit estimates',
            'Spousal and survivor benefit coordination',
            'Impact of continued work on benefits',
            'Tax implications of Social Security income',
            'Coordination with pensions, IRAs, and other income sources',
            'Longevity projections and break-even analysis',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default SocialSecurity;
