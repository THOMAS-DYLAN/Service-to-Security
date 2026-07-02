import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Pill, AlertTriangle, DollarSign } from 'lucide-react';

const PartD = () => (
  <PageLayout>
    <HeroSection
      title="PART D PRESCRIPTION PLANS"
      subtitle="Prescription drug coverage that keeps your medications affordable and your health protected in retirement."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">WHAT IS MEDICARE PART D?</h2>
        <p className="text-gray-700 mb-4">
          Medicare Part D is prescription drug coverage offered through private insurance companies approved by Medicare. These plans help cover the cost of prescription medications and may help lower your drug costs while protecting against higher costs in the future.
        </p>

        <h3 className="text-2xl font-bold text-blue-600 mb-4 mt-8">HOW PART D WORKS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: 'Monthly Premium', desc: 'You pay a monthly premium to your Part D plan. Premiums vary by plan and location.' },
            { title: 'Annual Deductible', desc: 'You may need to pay a deductible before your plan begins covering costs. Not all plans have one.' },
            { title: 'Copays & Coinsurance', desc: 'After your deductible, you pay a portion of each prescription (copay or percentage).' },
            { title: 'Annual Out-of-Pocket Cap', desc: 'In 2026, once your total out-of-pocket spending hits $2,100, you pay $0 for the rest of the year. This replaces the old catastrophic phase.' },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-lg border border-gray-200">
              <h4 className="font-bold text-blue-600 mb-2">{item.title}</h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-red-500">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">WHY IT MATTERS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: Pill, title: 'Drug Formularies', desc: 'Each plan covers different medications. Choosing the wrong plan could leave your prescriptions uncovered.' },
            { icon: AlertTriangle, title: 'Late Penalties', desc: 'If you delay enrollment without creditable coverage, you may face permanent premium penalties.' },
            { icon: DollarSign, title: 'Cost Variations', desc: 'Plans differ dramatically in premiums, copays, and pharmacy networks. Comparing plans annually saves money.' },
          ].map((item) => (
            <div key={item.title} className="text-white">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-white/50 bg-white/10 flex items-center justify-center">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-red-50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">OUR APPROACH</h2>
        <p className="text-gray-700 text-lg mb-4">
          We review your current medications, preferred pharmacies, and budget to find the Part D plan that minimizes your costs while maximizing coverage. We also review your plan annually during the Annual Enrollment Period to ensure it still meets your needs.
        </p>
        <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p className="text-blue-700 font-semibold italic">"The right Part D plan can save you hundreds -- even thousands -- each year."</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default PartD;
