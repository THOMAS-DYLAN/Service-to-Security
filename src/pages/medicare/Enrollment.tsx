import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Calendar, AlertTriangle, Clock } from 'lucide-react';

const Enrollment = () => (
  <PageLayout>
    <HeroSection
      title="ENROLLMENT PERIODS"
      subtitle="Know your enrollment windows to avoid penalties, secure the best coverage, and protect your healthcare in retirement."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">MEDICARE ENROLLMENT WINDOWS</h2>
        <div className="space-y-6">
          {[
            { icon: Calendar, title: 'Initial Enrollment Period (IEP)', period: '7-month window around your 65th birthday', desc: 'Begins 3 months before your 65th birthday month, includes your birthday month, and extends 3 months after. This is your best opportunity to enroll without penalties or medical underwriting.', color: 'border-blue-500 bg-blue-50' },
            { icon: Clock, title: 'Annual Enrollment Period (AEP)', period: 'October 15 - December 7 each year', desc: 'The annual window to switch Medicare Advantage plans, change Part D coverage, or return to Original Medicare. Changes take effect January 1.', color: 'border-red-500 bg-red-50' },
            { icon: Calendar, title: 'Medicare Advantage Open Enrollment', period: 'January 1 - March 31 each year', desc: 'If you\'re already enrolled in a Medicare Advantage plan, this period allows you to switch to a different MA plan or return to Original Medicare and join a Part D plan.', color: 'border-blue-500 bg-blue-50' },
            { icon: AlertTriangle, title: 'Special Enrollment Periods (SEP)', period: 'Varies by qualifying event', desc: 'Triggered by life changes such as moving, losing employer coverage, or qualifying for Medicaid. These periods allow you to make coverage changes outside normal enrollment windows.', color: 'border-red-500 bg-red-50' },
          ].map((item) => (
            <div key={item.title} className={`p-6 rounded-lg border-l-4 ${item.color}`}>
              <div className="flex items-start gap-4">
                <item.icon className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-blue-600">{item.title}</h3>
                  <p className="text-red-500 font-semibold text-sm mb-2">{item.period}</p>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-red-500">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white mb-6">WHY TIMING MATTERS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Late Part B enrollment can result in a 10% premium penalty for each 12-month period you delayed',
            'Late Part D enrollment adds 1% per month to your premium -- permanently',
            'Missing your Medigap Open Enrollment means potential medical underwriting and higher costs',
            'Employer coverage transitions require careful timing to avoid gaps',
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
          We help you identify which enrollment periods apply to your situation, ensure you meet every deadline, and guide you through the selection process so you can enroll with confidence and avoid costly mistakes.
        </p>
        <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p className="text-blue-700 font-semibold italic">"Don't let a missed deadline cost you thousands. We make sure you enroll at the right time, every time."</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Enrollment;
