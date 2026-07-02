import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Medicare Basics",
      questions: [
        {
          q: "When should I enroll in Medicare?",
          a: "Your Initial Enrollment Period begins 3 months before your 65th birthday month and ends 3 months after. Enrolling late can result in permanent penalties. If you're still working with employer coverage, special rules may apply."
        },
        {
          q: "What's the difference between Medicare Advantage and Medicare Supplement?",
          a: "Medicare Advantage (Part C) replaces Original Medicare with an all-in-one plan from a private insurer. Medicare Supplement (Medigap) works alongside Original Medicare to cover out-of-pocket costs like deductibles and copays. Each has different benefits, networks, and costs."
        },
        {
          q: "Do I need Part D if I have Medicare Advantage?",
          a: "Most Medicare Advantage plans include prescription drug coverage. However, you should verify your specific plan includes Part D. If it doesn't, you may want to add standalone Part D coverage to avoid penalties."
        },
        {
          q: "Can I change my Medicare plan?",
          a: "Yes! During Annual Enrollment Period (October 15 - December 7) you can switch between Original Medicare and Medicare Advantage, change Medicare Advantage plans, or add/drop Part D coverage. Some Special Enrollment Periods also allow changes."
        }
      ]
    },
    {
      category: "Retirement Planning",
      questions: [
        {
          q: "When should I start planning for retirement?",
          a: "The earlier, the better! Ideally, retirement planning begins in your 20s and 30s. However, it's never too late. Even if you're in your 50s or 60s, strategic planning can significantly improve your retirement security."
        },
        {
          q: "How much money do I need to retire?",
          a: "A common rule of thumb is to replace 70-80% of your pre-retirement income. However, your specific needs depend on lifestyle, health, location, and goals. We create personalized projections based on your unique situation."
        },
        {
          q: "What is Social Security optimization?",
          a: "Social Security optimization involves strategically timing when you claim benefits (between ages 62-70) to maximize lifetime payouts. Factors include spousal benefits, survivor benefits, work history, health, and life expectancy."
        },
        {
          q: "Should I pay off my mortgage before retiring?",
          a: "It depends on your interest rate, tax situation, and overall financial picture. Sometimes it makes sense to keep a low-rate mortgage and invest the difference. We analyze your specific scenario to determine the best strategy."
        }
      ]
    },
    {
      category: "Long-Term Care",
      questions: [
        {
          q: "What is long-term care insurance?",
          a: "Long-term care insurance covers services like nursing home care, assisted living, and in-home care when you can't perform daily activities independently. It protects your assets from being depleted by care costs that Medicare doesn't cover."
        },
        {
          q: "When should I buy long-term care insurance?",
          a: "The ideal age is typically between 50-65. Premiums are lower when you're younger and healthier. Waiting too long may result in higher costs or being uninsurable due to health conditions."
        },
        {
          q: "Does Medicare cover long-term care?",
          a: "Medicare provides very limited long-term care coverage - only short-term skilled nursing (up to 100 days) following a hospital stay. It does NOT cover custodial care, which is the most common type of long-term care needed."
        },
        {
          q: "What are alternatives to traditional long-term care insurance?",
          a: "Alternatives include hybrid life insurance with LTC riders, annuities with LTC benefits, self-insuring with savings, or Medicaid planning. Each has pros and cons depending on your assets, health, and family situation."
        }
      ]
    },
    {
      category: "Life Insurance",
      questions: [
        {
          q: "How much life insurance do I need?",
          a: "A general guideline is 10-12 times your annual income. However, we calculate your specific needs based on debts, income replacement, education costs, final expenses, and financial goals. Everyone's situation is unique."
        },
        {
          q: "What's the difference between term and whole life insurance?",
          a: "Term life provides coverage for a specific period (10, 20, 30 years) at lower cost. Whole life is permanent, builds cash value, and has fixed premiums for life. Term is great for temporary needs; whole life for lifelong protection and estate planning."
        },
        {
          q: "Can I get life insurance if I have health issues?",
          a: "Often yes! While health issues may affect rates, many conditions are insurable. We work with carriers specializing in different health profiles and can explore guaranteed issue or simplified underwriting options if needed."
        },
        {
          q: "Do I still need life insurance in retirement?",
          a: "It depends on your goals. Common reasons to keep or buy life insurance in retirement include: covering final expenses, leaving an inheritance, equalizing estate distribution, or supplementing retirement income through policy loans."
        }
      ]
    },
    {
      category: "Working with Us",
      questions: [
        {
          q: "How much do your services cost?",
          a: "Our consultations are complimentary. We're compensated by insurance carriers when you purchase coverage, at no additional cost to you. Our goal is to find the right solutions for your needs, not to sell unnecessary products."
        },
        {
          q: "Do you only work with veterans?",
          a: "While we specialize in serving veterans and understand military benefits, we serve all individuals and families seeking retirement and insurance planning guidance. Our mission-driven approach benefits everyone."
        },
        {
          q: "What areas do you serve?",
          a: "We're based in Kansas City, MO, but serve clients throughout Missouri and via virtual consultations nationwide. We're licensed to help with Medicare, life insurance, and retirement planning in multiple states."
        },
        {
          q: "How often should we review my plan?",
          a: "We recommend annual reviews, plus anytime you experience a major life change: marriage, divorce, birth, death, home purchase, retirement, health diagnosis, or significant income change. Your plan should evolve with your life."
        }
      ]
    }
  ];

  return (
    <PageLayout>
      <HeroSection
        title="FREQUENTLY ASKED QUESTIONS"
        subtitle="Find answers to common questions about Medicare, retirement planning, life insurance, and our services."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b-2 border-blue-600">{category.category}</h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = catIndex * 100 + qIndex;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div key={qIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full flex items-center justify-between p-4 text-left bg-blue-50 hover:bg-blue-100 transition"
                      >
                        <span className="font-semibold text-blue-600 pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`h-5 w-5 text-blue-600 transition-transform shrink-0 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 bg-white border-t border-gray-200">
                          <p className="text-gray-700">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="mt-12 p-6 bg-blue-500 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-3">STILL HAVE QUESTIONS?</h3>
            <p className="text-blue-50 mb-6">
              We're here to help! Schedule a complimentary consultation to discuss your specific situation and get personalized answers.
            </p>
            <a
              href="/contact/consultation"
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-lg transition"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Faq;
