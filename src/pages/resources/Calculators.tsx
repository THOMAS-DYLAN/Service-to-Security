import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Calculator, TrendingUp, DollarSign, Calendar } from 'lucide-react';

const Calculators = () => (
  <PageLayout>
    <HeroSection
      title="RETIREMENT CALCULATORS"
      subtitle="Use our planning tools to estimate your retirement needs and Social Security benefits."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Retirement Savings Calculator */}
          <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-600">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Retirement Savings Calculator</h3>
            <p className="text-gray-700 mb-6 text-center">
              Estimate how much you need to save for a comfortable retirement based on your current age, savings, and expected expenses.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Current Age</label>
                <input
                  type="number"
                  placeholder="45"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Retirement Age</label>
                <input
                  type="number"
                  placeholder="65"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Current Savings</label>
                <input
                  type="text"
                  placeholder="$100,000"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Contribution</label>
                <input
                  type="text"
                  placeholder="$500"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Annual Return</label>
                <input
                  type="text"
                  placeholder="7%"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
                Calculate
              </button>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border-2 border-blue-600">
              <p className="text-gray-600 text-sm text-center">
                <strong>Projected Retirement Savings:</strong> Results will appear here
              </p>
            </div>
          </div>

          {/* Social Security Calculator */}
          <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-600">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Social Security Estimator</h3>
            <p className="text-gray-700 mb-6 text-center">
              Estimate your Social Security benefits at different claiming ages to optimize your retirement income strategy.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Year of Birth</label>
                <input
                  type="number"
                  placeholder="1960"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Monthly Benefit at FRA</label>
                <input
                  type="text"
                  placeholder="$2,000"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
                <p className="text-xs text-gray-600 mt-1">Find this on your SSA statement</p>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Claiming Age</label>
                <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none">
                  <option value="">Select age...</option>
                  <option value="62">62 (Earliest)</option>
                  <option value="65">65</option>
                  <option value="67">67 (Full Retirement Age)</option>
                  <option value="70">70 (Maximum Benefit)</option>
                </select>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
                Calculate Benefits
              </button>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border-2 border-blue-600">
              <p className="text-gray-600 text-sm text-center mb-2">
                <strong>Estimated Monthly Benefit:</strong> Results will appear here
              </p>
              <p className="text-xs text-gray-500 text-center">
                Benefits shown before taxes and Medicare premiums
              </p>
            </div>
          </div>

          {/* Life Insurance Needs Calculator */}
          <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-600">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Life Insurance Calculator</h3>
            <p className="text-gray-700 mb-6 text-center">
              Calculate how much life insurance coverage you need to protect your family's financial future.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Annual Income</label>
                <input
                  type="text"
                  placeholder="$75,000"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Income Replacement</label>
                <input
                  type="number"
                  placeholder="10"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Outstanding Debts</label>
                <input
                  type="text"
                  placeholder="$250,000"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
                <p className="text-xs text-gray-600 mt-1">Mortgage, car loans, credit cards, etc.</p>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Education Costs</label>
                <input
                  type="text"
                  placeholder="$100,000"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Current Life Insurance</label>
                <input
                  type="text"
                  placeholder="$50,000"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
                Calculate Coverage Need
              </button>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border-2 border-blue-600">
              <p className="text-gray-600 text-sm text-center">
                <strong>Recommended Coverage:</strong> Results will appear here
              </p>
            </div>
          </div>

          {/* Medicare Cost Estimator */}
          <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-600">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Medicare Cost Estimator</h3>
            <p className="text-gray-700 mb-6 text-center">
              Estimate your annual Medicare costs including premiums, deductibles, and potential out-of-pocket expenses.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Medicare Plan Type</label>
                <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none">
                  <option value="">Select plan type...</option>
                  <option value="original">Original Medicare + Supplement</option>
                  <option value="advantage">Medicare Advantage</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Annual Income (for IRMAA calculation)</label>
                <input
                  type="text"
                  placeholder="$95,000"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Prescriptions</label>
                <input
                  type="number"
                  placeholder="3"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Doctor Visits per Year</label>
                <input
                  type="number"
                  placeholder="6"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
                Estimate Costs
              </button>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border-2 border-blue-600">
              <p className="text-gray-600 text-sm text-center">
                <strong>Estimated Annual Cost:</strong> Results will appear here
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-red-500 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">WANT PERSONALIZED CALCULATIONS?</h2>
          <p className="text-red-50 text-lg mb-6">
            These calculators provide general estimates. For a detailed, personalized analysis of your retirement and insurance needs, schedule a complimentary consultation.
          </p>
          <a
            href="/contact/consultation"
            className="inline-block bg-white text-red-600 font-bold px-8 py-4 rounded-lg hover:bg-red-50 transition"
          >
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Calculators;
