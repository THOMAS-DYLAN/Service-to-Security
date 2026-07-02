import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Shield, TrendingUp, Clock, DollarSign } from 'lucide-react';

const Annuities = () => (
  <PageLayout>
    <HeroSection
      title="ANNUITIES"
      subtitle="Create guaranteed income streams and protect your retirement savings with strategic annuity solutions."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">UNDERSTANDING ANNUITIES</h2>
        <p className="text-gray-700 mb-8">
          Annuities are insurance contracts designed to provide guaranteed income in retirement. They can offer protection from market volatility, guaranteed lifetime income, and tax-deferred growth -- making them a valuable tool in a comprehensive retirement plan.
        </p>

        <h3 className="text-2xl font-bold text-blue-600 mb-4">TYPES OF ANNUITIES</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: Shield, title: 'Fixed Annuities', desc: 'Offer a guaranteed interest rate for a set period. Predictable growth with no market risk. Ideal for conservative investors seeking safety.' },
            { icon: TrendingUp, title: 'Fixed Indexed Annuities', desc: 'Growth is linked to a market index (like the S&P 500) but with downside protection. Participate in market gains without risking your principal.' },
            { icon: Clock, title: 'Immediate Annuities', desc: 'Convert a lump sum into guaranteed monthly income that starts right away. Ideal for creating a pension-like income stream in retirement.' },
            { icon: DollarSign, title: 'Deferred Annuities', desc: 'Allow your money to grow tax-deferred until you\'re ready to begin withdrawals. Build your retirement nest egg with guaranteed protection.' },
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

    <section className="py-16 bg-blue-500">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white mb-6">WHY IT MATTERS</h2>
        <p className="text-blue-50 text-lg mb-4">
          Market downturns in early retirement can permanently damage your portfolio. Annuities provide a guaranteed floor of income that can't be outlived, giving you the confidence to weather market volatility without sacrificing your lifestyle.
        </p>
        <p className="text-white font-semibold text-lg">
          The right annuity strategy eliminates the fear of running out of money.
        </p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">OUR APPROACH</h2>
        <p className="text-gray-700 text-lg mb-4">
          We take a need-based approach to annuities. We'll evaluate whether an annuity is right for your situation, compare options from top-rated carriers, and ensure any recommendation fits your overall retirement income strategy. We never recommend products that aren't in your best interest.
        </p>
        <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p className="text-blue-700 font-semibold italic">"Annuities aren't one-size-fits-all. We find the right fit -- or recommend a different solution entirely."</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Annuities;
