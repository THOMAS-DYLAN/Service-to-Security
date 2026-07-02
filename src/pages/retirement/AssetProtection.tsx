import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Shield, Lock, Umbrella, Scale } from 'lucide-react';

const AssetProtection = () => (
  <PageLayout>
    <HeroSection
      title="ASSET PROTECTION"
      subtitle="Safeguard your hard-earned wealth from taxes, lawsuits, market risk, and long-term care costs."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">DEFENDING YOUR WEALTH</h2>
        <p className="text-gray-700 mb-8">
          You've spent a lifetime building your wealth. Asset protection planning ensures that what you've earned stays protected -- from market downturns, excessive taxation, legal liabilities, and healthcare costs that can erode your legacy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: Shield, title: 'Market Protection', desc: 'Strategies to shield your retirement savings from market volatility, especially during the critical early retirement years when losses can be devastating.' },
            { icon: Lock, title: 'Tax Mitigation', desc: 'Proactive tax planning to minimize your lifetime tax burden through strategic Roth conversions, withdrawal sequencing, and income management.' },
            { icon: Umbrella, title: 'Legacy Planning', desc: 'Ensure your wealth is transferred efficiently to your beneficiaries while minimizing estate taxes and probate complications.' },
            { icon: Scale, title: 'Legal Protection', desc: 'Structure your assets to provide protection from potential lawsuits, creditors, and other legal threats to your wealth.' },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'A 30% market decline in your first year of retirement can permanently reduce your income',
            'Without tax planning, retirees often pay more in taxes than necessary on Social Security and withdrawals',
            'Unplanned long-term care can consume $100,000+ per year of your savings',
            'Without proper beneficiary planning, your heirs may face unnecessary taxes and legal complications',
          ].map((item) => (
            <div key={item} className="bg-white/10 p-4 rounded-lg flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-white shrink-0" />
              <p className="text-white text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">OUR APPROACH</h2>
        <p className="text-gray-700 text-lg mb-4">
          We take a holistic approach to asset protection, examining your complete financial picture to identify vulnerabilities and implement defensive strategies. Our goal is to ensure your wealth serves you throughout retirement and creates a lasting legacy.
        </p>
        <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p className="text-blue-700 font-semibold italic">"We don't just grow wealth -- we defend it."</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default AssetProtection;
