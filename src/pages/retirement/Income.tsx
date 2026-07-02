import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { TrendingUp, Shield, DollarSign, Target } from 'lucide-react';

const Income = () => (
  <PageLayout>
    <HeroSection
      title="INCOME PLANNING"
      subtitle="Build a reliable, tax-efficient income strategy that sustains your lifestyle throughout retirement."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">CREATING SUSTAINABLE RETIREMENT INCOME</h2>
        <p className="text-gray-700 mb-8">
          The transition from earning a paycheck to living on retirement savings is one of the most significant financial shifts you'll ever make. Without a strategic income plan, you risk running out of money, paying more taxes than necessary, or failing to keep pace with inflation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: DollarSign, title: 'Income Sources', desc: 'We coordinate Social Security, pensions, 401(k)s, IRAs, and additional retirement income vehicles to create a plan that fits your goals and provides lasting stability.' },
            { icon: TrendingUp, title: 'Growth & Preservation', desc: 'Balance growth potential with capital preservation to ensure your money lasts as long as you need it.' },
            { icon: Shield, title: 'Tax Efficiency', desc: 'Strategic withdrawal sequencing minimizes your tax burden and maximizes the longevity of your portfolio.' },
            { icon: Target, title: 'Inflation Protection', desc: 'Build in growth mechanisms to ensure your purchasing power keeps pace with rising costs.' },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
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
          Without a structured income plan, many retirees withdraw too aggressively in early retirement, pay unnecessary taxes, or leave money on the table with Social Security. The decisions you make in your first few years of retirement can impact your financial security for decades.
        </p>
        <p className="text-white font-semibold text-lg">
          A strategic income plan turns uncertainty into confidence.
        </p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">OUR APPROACH</h2>
        <p className="text-gray-700 text-lg mb-4">
          We analyze your complete financial picture -- income sources, expenses, tax situation, and goals -- to create a customized income strategy that gives you predictable cash flow, tax efficiency, and long-term sustainability.
        </p>
        <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p className="text-blue-700 font-semibold italic">"Your retirement paycheck should be as reliable as the one you earned while working."</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Income;
