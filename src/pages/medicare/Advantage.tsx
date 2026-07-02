import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { CheckCircle, AlertCircle } from 'lucide-react';

const MedicareAdvantage = () => (
  <PageLayout>
    <HeroSection
      title="MEDICARE ADVANTAGE"
      subtitle="Explore how Medicare Advantage (Part C) plans bundle your coverage with additional benefits beyond Original Medicare."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">WHAT IS MEDICARE ADVANTAGE?</h2>
        <p className="text-gray-700 mb-4">
          Medicare Advantage plans, also known as Part C, are offered by private insurance companies approved by Medicare. These plans provide all of your Part A and Part B coverage, and most include Part D prescription drug coverage as well.
        </p>
        <p className="text-gray-700 mb-8">
          Many Medicare Advantage plans also offer extra benefits that Original Medicare doesn't cover, including routine dental, vision, hearing, fitness programs, and even transportation to medical appointments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              Benefits
            </h3>
            <ul className="space-y-3">
              {[
                'Often lower out-of-pocket costs than Original Medicare',
                'Bundled coverage (Part A, Part B, & Part D)',
                'Additional benefits like dental, vision, and hearing',
                'Maximum out-of-pocket spending limit for protection',
                'Many plans available with $0 monthly premiums',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-red-50 rounded-lg">
            <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-red-600" />
              Considerations
            </h3>
            <ul className="space-y-3">
              {[
                'Provider networks may limit your choice of doctors',
                'Referrals may be required for specialists (HMO plans)',
                'Coverage may not travel well outside your plan\'s service area',
                'Plan benefits and costs change annually',
                'Switching back to Original Medicare may require underwriting',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-red-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-red-500">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white mb-6">WHY IT MATTERS</h2>
        <p className="text-blue-50 text-lg">
          Choosing between Medicare Advantage and Original Medicare is one of the most important healthcare decisions you'll make. The right choice depends on your health needs, preferred doctors, medications, and budget. Working with a certified Medicare specialist ensures you make a confident, informed decision.
        </p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">OUR APPROACH</h2>
        <p className="text-gray-700 text-center mb-6">
          We compare plans from multiple carriers to find the Medicare Advantage option that best fits your needs. We'll walk you through every detail -- from networks and formularies to costs and benefits -- so you can enroll with confidence.
        </p>
        <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p className="text-blue-700 font-semibold italic">"We don't push plans. We find the right fit for your life."</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default MedicareAdvantage;
