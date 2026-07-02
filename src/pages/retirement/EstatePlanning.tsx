import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Shield, FileText, Users, Building2, Scale, Lock } from 'lucide-react';

const EstatePlanning = () => (
  <PageLayout>
    <HeroSection
      title="ESTATE PLANNING"
      subtitle="Protect your legacy, provide for your loved ones, and ensure your wishes are honored with a comprehensive estate plan."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">WHY ESTATE PLANNING MATTERS</h2>
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12">
          Estate planning isn't just for the wealthy -- it's for anyone who wants to make sure their assets, their family, and their wishes are protected. Without a proper plan, your estate could face probate delays, unnecessary taxes, and family disputes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <Shield className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-blue-600 mb-2">Asset Protection</h3>
            <p className="text-gray-700">
              Shield your assets from creditors, lawsuits, and unnecessary taxation. A well-structured estate plan ensures more of your wealth goes to the people you love.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <Users className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-blue-600 mb-2">Family Security</h3>
            <p className="text-gray-700">
              Ensure your spouse, children, and dependents are taken care of. Designate guardians, set up trusts, and provide clear instructions for your loved ones.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <Scale className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-blue-600 mb-2">Avoid Probate</h3>
            <p className="text-gray-700">
              Probate can be expensive, time-consuming, and public. Proper estate planning tools like trusts help your family avoid the probate process entirely.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <FileText className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-blue-600 mb-2">Your Wishes Honored</h3>
            <p className="text-gray-700">
              Without clear documentation, state laws decide how your assets are distributed. An estate plan puts you in control of your legacy.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-blue-500">
      <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">ESTATE PLANNING TOOLS</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Revocable Living Trust</h3>
            <p className="text-gray-700 mb-3">
              A revocable living trust allows you to transfer assets into a trust during your lifetime while maintaining full control. Benefits include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Avoids probate -- assets transfer immediately to beneficiaries</li>
              <li>Maintains privacy -- unlike wills, trusts are not public record</li>
              <li>Provides continuity if you become incapacitated</li>
              <li>Can be modified or revoked at any time during your lifetime</li>
              <li>Protects blended families with clear asset distribution</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Irrevocable Trust</h3>
            <p className="text-gray-700 mb-3">
              An irrevocable trust provides stronger asset protection and tax benefits:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Assets are removed from your taxable estate</li>
              <li>Protection from creditors and lawsuits</li>
              <li>Can help with Medicaid planning and long-term care</li>
              <li>Ideal for wealth transfer and legacy planning</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Wills & Power of Attorney</h3>
            <p className="text-gray-700 mb-3">
              Essential documents that every estate plan should include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Last Will & Testament</strong> -- Directs how assets are distributed and names guardians for minor children</li>
              <li><strong>Durable Power of Attorney</strong> -- Designates someone to manage your finances if you're unable to</li>
              <li><strong>Healthcare Power of Attorney</strong> -- Designates someone to make medical decisions on your behalf</li>
              <li><strong>Living Will / Advance Directive</strong> -- Documents your wishes for end-of-life medical care</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">INTEGRATED TRUST SERVICES PARTNERSHIP</h2>
            <p className="text-gray-700 mb-4">
              Michael Thomas is certified with <strong>Integrated Trust Services (ITS)</strong>, a leading provider of trust administration and estate planning solutions. This partnership allows us to offer our clients access to professionally managed trust services without the high costs typically associated with traditional trust companies or attorneys.
            </p>
            <p className="text-gray-700 mb-4">
              Integrated Trust Services provides:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
              <li><strong>Affordable Trust Creation</strong> -- Professional-grade revocable and irrevocable trusts at a fraction of the cost</li>
              <li><strong>Trust Administration</strong> -- Ongoing management and support for your trust</li>
              <li><strong>Asset Protection Strategies</strong> -- Comprehensive planning to safeguard your wealth</li>
              <li><strong>Medicaid & Long-Term Care Planning</strong> -- Trusts designed to protect assets while qualifying for benefits</li>
              <li><strong>Business Succession Planning</strong> -- Ensuring smooth transitions for business owners</li>
              <li><strong>Beneficiary Coordination</strong> -- Aligning trusts with insurance, retirement accounts, and other assets</li>
            </ul>
            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <p className="text-red-700 font-semibold italic">
                "A trust isn't just a document -- it's the foundation of a secure legacy."
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-600 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-600 text-center mb-4">Why Integrated Trust Services?</h3>
            <div className="space-y-3">
              {[
                'Lower cost than traditional trust attorneys',
                'Professionally managed trust administration',
                'Customized to your unique family situation',
                'Coordinates with your existing financial plan',
                'Ongoing updates as laws and circumstances change',
                'Accessible guidance from a certified professional',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                <Lock className="w-4 h-4" />
                ITS Certified Professional
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-red-500">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white mb-6">OUR APPROACH</h2>
        <p className="text-blue-50 text-lg mb-4">
          We take a holistic approach to estate planning, working alongside our Integrated Trust Services partnership to ensure every aspect of your financial life is coordinated. From trust creation to beneficiary designations, we help you build a legacy plan that protects your family and honors your wishes.
        </p>
        <p className="text-white font-semibold text-lg mb-6">
          No pressure. No complicated jargon. Just clear, actionable guidance you can trust.
        </p>
        <div className="inline-block p-6 bg-white/10 rounded-lg">
          <p className="text-white font-semibold italic text-lg">"Your Future. My Mission."</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default EstatePlanning;
