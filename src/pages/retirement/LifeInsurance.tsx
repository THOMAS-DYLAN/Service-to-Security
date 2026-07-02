import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Shield, Heart, Users, TrendingUp } from 'lucide-react';

const LifeInsurance = () => (
  <PageLayout>
    <HeroSection
      title="LIFE INSURANCE PLANNING"
      subtitle="Protect your loved ones with comprehensive life insurance strategies designed for your unique needs."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">WHY LIFE INSURANCE MATTERS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <Shield className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-blue-600 mb-2">Income Replacement</h3>
            <p className="text-gray-700">
              Ensure your family maintains their standard of living if the unexpected happens. Life insurance replaces lost income and covers ongoing expenses.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <Heart className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-blue-600 mb-2">Final Expenses</h3>
            <p className="text-gray-700">
              Cover funeral costs, medical bills, and outstanding debts so your loved ones aren't burdened with financial stress during difficult times.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <Users className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-blue-600 mb-2">Family Security</h3>
            <p className="text-gray-700">
              Protect your spouse, children, and dependents with financial resources they can rely on when they need it most.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <TrendingUp className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-blue-600 mb-2">Estate Planning</h3>
            <p className="text-gray-700">
              Use life insurance as part of a comprehensive estate strategy to transfer wealth efficiently and cover estate taxes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-blue-500">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">TYPES OF LIFE INSURANCE</h2>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Term Life Insurance</h3>
            <p className="text-gray-700 mb-3">
              Affordable coverage for a specific period (10, 20, or 30 years). Ideal for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Young families with mortgage obligations</li>
              <li>Parents with dependent children</li>
              <li>Budget-conscious individuals seeking maximum coverage</li>
              <li>Temporary income replacement needs</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Whole Life Insurance</h3>
            <p className="text-gray-700 mb-3">
              Permanent coverage with cash value accumulation. Benefits include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Lifetime protection that never expires</li>
              <li>Cash value growth you can borrow against</li>
              <li>Fixed premiums that never increase</li>
              <li>Potential dividends (for participating policies)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Universal Life Insurance</h3>
            <p className="text-gray-700 mb-3">
              Flexible permanent coverage with investment components:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Adjustable death benefit and premiums</li>
              <li>Cash value growth tied to interest rates</li>
              <li>Tax-deferred accumulation</li>
              <li>Access to policy loans and withdrawals</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Final Expense Insurance</h3>
            <p className="text-gray-700 mb-3">
              Simplified whole life coverage designed specifically to cover end-of-life costs:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Smaller face amounts typically ranging from $5,000 to $50,000</li>
              <li>Simplified underwriting -- no medical exams required</li>
              <li>Covers funeral costs, burial expenses, and outstanding medical bills</li>
              <li>Guaranteed level premiums that never increase</li>
              <li>Ideal for seniors who want to ease the financial burden on loved ones</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Infinite Banking Concept (IBC)</h3>
            <p className="text-gray-700 mb-3">
              A strategy that uses dividend-paying whole life insurance as your own personal banking system:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Build a "personal bank" using whole life policy cash value</li>
              <li>Borrow against your policy for major purchases -- cars, real estate, business needs</li>
              <li>Your money continues to grow even while borrowed against</li>
              <li>Recapture interest you'd normally pay to banks and lenders</li>
              <li>Create generational wealth with tax-advantaged growth and death benefit</li>
              <li>Maintain full control of your financial resources</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">OUR APPROACH</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shrink-0">1</div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">Needs Assessment</h3>
              <p className="text-gray-700">
                We analyze your financial situation, family structure, debts, and future obligations to determine appropriate coverage amounts.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shrink-0">2</div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">Policy Comparison</h3>
              <p className="text-gray-700">
                We compare options from multiple carriers to find the best rates and coverage for your specific needs and budget.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shrink-0">3</div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">Underwriting Support</h3>
              <p className="text-gray-700">
                We guide you through the application and medical exam process, helping ensure the smoothest experience possible.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shrink-0">4</div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">Ongoing Review</h3>
              <p className="text-gray-700">
                As your life changes (marriage, children, home purchase), we review your coverage to ensure it still meets your needs.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
          <h3 className="text-xl font-bold text-red-600 mb-3">SPECIAL CONSIDERATIONS FOR VETERANS</h3>
          <p className="text-gray-700 mb-3">
            Veterans have unique life insurance options through VA programs:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>Service-Disabled Veterans Life Insurance (S-DVI)</strong> - Coverage for veterans with service-connected disabilities</li>
            <li><strong>Veterans' Group Life Insurance (VGLI)</strong> - Renewable term coverage after separation from service</li>
            <li><strong>Family Servicemembers' Group Life Insurance (FSGLI)</strong> - Coverage for spouses and dependent children</li>
          </ul>
          <p className="text-gray-700 mt-3">
            We help veterans understand and maximize both government and private life insurance benefits.
          </p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default LifeInsurance;
