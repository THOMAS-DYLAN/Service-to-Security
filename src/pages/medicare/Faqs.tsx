import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  { q: 'When should I sign up for Medicare?', a: 'Your Initial Enrollment Period begins 3 months before the month you turn 65, includes your birthday month, and extends 3 months after. If you\'re still working and have employer coverage, you may be able to delay enrollment without penalty.' },
  { q: 'What\'s the difference between Medicare Advantage and Medigap?', a: 'Medicare Advantage (Part C) replaces Original Medicare with a bundled plan from a private insurer, often including additional benefits. Medigap supplements Original Medicare by covering out-of-pocket costs like copays and deductibles. You cannot have both at the same time.' },
  { q: 'Is Medicare free?', a: 'Part A is premium-free for most people who have worked and paid Medicare taxes for at least 10 years. Part B has a standard monthly premium (adjusted by income). Part D and Medicare Advantage plans have separate premiums that vary by plan.' },
  { q: 'What does Medicare NOT cover?', a: 'Original Medicare does not cover dental, vision, hearing aids, long-term care, or most prescription drugs. You may need supplemental coverage like Medicare Advantage, Medigap, or standalone Part D plans to fill these gaps.' },
  { q: 'Can I change my Medicare plan?', a: 'Yes, during the Annual Enrollment Period (October 15 - December 7) you can switch plans. Medicare Advantage enrollees also have the Medicare Advantage Open Enrollment Period (January 1 - March 31). Special Enrollment Periods are available for qualifying life events.' },
  { q: 'Will I have a penalty if I enroll late?', a: 'Possibly. Late enrollment in Part B carries a 10% premium surcharge for each full 12-month period you delayed. Late enrollment in Part D adds 1% of the national base premium per month of delay. These penalties are permanent.' },
  { q: 'Do I need a Part D plan if I don\'t take medications?', a: 'It\'s generally recommended to enroll in a Part D plan even if you don\'t currently take medications. If you delay enrollment and later need coverage, you\'ll face a permanent late enrollment penalty added to your premiums.' },
  { q: 'What is the Medicare "donut hole"?', a: 'The donut hole (coverage gap) is a temporary limit on Part D coverage. After you and your plan spend a certain amount on covered drugs, you enter the gap and pay a higher percentage of costs until you reach the catastrophic coverage threshold.' },
];

const MedicareFaqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <PageLayout>
      <HeroSection
        title="MEDICARE FAQs"
        subtitle="Clear answers to the most common Medicare questions -- so you can make confident decisions about your healthcare coverage."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
          <div className="space-y-3">
            {faqItems.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-blue-50 transition"
                >
                  <span className="font-bold text-blue-600 pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-600 shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 bg-blue-50">
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-500">
        <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">STILL HAVE QUESTIONS?</h2>
          <p className="text-blue-50 text-lg mb-6">
            Medicare can be complex, and every situation is unique. We're here to answer your specific questions and help you navigate your options with clarity and confidence.
          </p>
          <a href="tel:816-248-1100" className="inline-block bg-white hover:bg-blue-50 text-blue-600 font-bold px-8 py-4 rounded-lg shadow-lg transition transform hover:scale-105">
            Call Us: 816-248-1100
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default MedicareFaqs;
