import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';

const MedicareSupplement = () => (
  <PageLayout>
    <HeroSection
      title="MEDICARE SUPPLEMENT"
      subtitle="Also known as Medigap, these plans fill the coverage gaps left by Original Medicare -- giving you predictable costs and greater peace of mind."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">WHAT IS MEDIGAP?</h2>
        <p className="text-gray-700 mb-4">
          Medicare Supplement Insurance (Medigap) policies are sold by private companies to fill the "gaps" in Original Medicare coverage. These gaps include copayments, coinsurance, and deductibles that you'd otherwise pay out of pocket.
        </p>
        <p className="text-gray-700 mb-8">
          There are 10 standardized Medigap plans (labeled A through N), and each plan offers a different level of coverage. The most popular plans are Plan F, Plan G, and Plan N.
        </p>

        <h3 className="text-2xl font-bold text-blue-600 mb-4">POPULAR MEDIGAP PLANS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { plan: 'Plan F', desc: 'The most comprehensive coverage. Covers all Medicare gaps including Part B excess charges.', note: '** Only available to those eligible before January 1, 2020.', highlight: true },
            { plan: 'Plan G', desc: 'Nearly identical to Plan F, covering everything except the Part B deductible. The most popular choice for new enrollees.', note: '', highlight: false },
            { plan: 'Plan N', desc: 'A cost-effective option with lower premiums. Requires small copays for some office visits and ER visits.', note: '', highlight: false },
          ].map((item) => (
            <div key={item.plan} className={`p-6 rounded-lg border-2 ${item.highlight ? 'border-red-500 bg-red-50' : 'border-blue-200 bg-blue-50'}`}>
              <h4 className="text-xl font-bold text-blue-600 mb-3">{item.plan}</h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
              {item.note && <p className="text-gray-600 text-sm italic font-semibold mt-2">{item.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-blue-500">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">KEY CONSIDERATIONS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Medigap plans DO NOT include prescription drug coverage -- you\'ll need a separate Part D plan',
            'You can see any doctor who accepts Medicare -- no network restrictions',
            'Best time to enroll is during your 6-month Medigap Open Enrollment Period',
            'Premiums vary by carrier, location, age, and tobacco use',
            'Once your open enrollment ends, medical underwriting may apply',
            'Medigap policies cannot be used with Medicare Advantage plans',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
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
          We compare Medigap policies from multiple A-rated carriers to ensure you get the best coverage at the most competitive price. Our goal is to help you lock in comprehensive coverage during your best enrollment window, so you're protected for life.
        </p>
        <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p className="text-blue-700 font-semibold italic">"The right Medigap plan gives you freedom to see any doctor, anywhere -- without worrying about surprise bills."</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default MedicareSupplement;
