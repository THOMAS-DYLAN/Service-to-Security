import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Shield, Heart, Pill, Building2 } from 'lucide-react';

const MedicareBasics = () => (
  <PageLayout>
    <HeroSection
      title="MEDICARE BASICS"
      subtitle="Understanding the foundation of your healthcare coverage in retirement -- what Medicare is, who it's for, and how it works."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">WHAT IS MEDICARE?</h2>
        <p className="text-gray-700 mb-4">
          Medicare is the federal health insurance program for people aged 65 and older, as well as certain younger individuals with disabilities or specific conditions. It's designed to help cover the cost of healthcare in retirement, but it doesn't cover everything -- and understanding your options is critical to avoiding costly gaps.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {[
            { icon: Building2, title: 'Part A: Hospital Insurance', desc: 'Covers inpatient hospital stays, skilled nursing facility care, hospice care, and some home health care. Most people don\'t pay a monthly premium for Part A.', color: 'bg-blue-100 text-blue-600' },
            { icon: Heart, title: 'Part B: Medical Insurance', desc: 'Covers doctor visits, outpatient care, preventive services, medical equipment, and some home health services. Part B requires a monthly premium.', color: 'bg-red-100 text-red-600' },
            { icon: Pill, title: 'Part D: Prescription Drugs', desc: 'Covers the cost of prescription medications through private insurance plans approved by Medicare. Plans and costs vary by provider.', color: 'bg-blue-100 text-blue-600' },
            { icon: Shield, title: 'Medicare Advantage (Part C)', desc: 'An alternative to Original Medicare offered by private insurers. Bundles Parts A, B, and usually D with additional benefits like vision and dental.', color: 'bg-red-100 text-red-600' },
          ].map((part) => (
            <div key={part.title} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className={`w-12 h-12 rounded-full ${part.color} flex items-center justify-center mb-4`}>
                <part.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-blue-600 mb-2">{part.title}</h3>
              <p className="text-gray-700 text-sm">{part.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-blue-500">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white mb-6">WHY IT MATTERS</h2>
        <p className="text-blue-50 text-lg mb-4">
          The choices you make during your initial enrollment period shape your coverage and your costs for years ahead. A plan that doesn't fit your needs -- or missing your enrollment window -- can lead to avoidable penalties, gaps in coverage, and expenses you didn't plan for.
        </p>
        <p className="text-white font-semibold text-lg">
          That's why getting it right the first time matters. With the right guidance, you can make confident decisions and avoid costly mistakes.
        </p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">WHO IS ELIGIBLE?</h2>
        <div className="space-y-3">
          {[
            'Adults aged 65 and older (U.S. citizens or permanent legal residents)',
            'Individuals under 65 with certain disabilities who have received Social Security benefits for 24 months',
            'People with End-Stage Renal Disease (ESRD) or ALS',
            'Those who have worked and paid Medicare taxes for at least 10 years (40 quarters)',
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

export default MedicareBasics;
