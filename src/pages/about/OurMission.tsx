import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar'
import { Target, Shield, Heart, Eye } from 'lucide-react';

const OurMission = () => (
  <PageLayout>
    <Navbar></Navbar>
    <HeroSection
      title="OUR MISSION"
      subtitle="Empowering veterans, retirees, and families with the knowledge and strategies to protect their financial future."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">SERVICE TO SECURITY</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Your mission doesn't end with service. It transforms. The same discipline, strategy, and commitment that defined your career now protect your financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { icon: Target, title: 'Mission-Focused Planning', desc: 'We approach every financial plan with the precision and dedication of a military operation. Your retirement deserves nothing less.' },
            { icon: Shield, title: 'Defense-First Strategy', desc: 'We don\'t just sell insurance -- we build defense strategies for your retirement, your family\'s security, and your legacy.' },
            { icon: Heart, title: 'Client-Centered Values', desc: 'Every recommendation we make puts your interests first. We earn trust through transparency, not sales pressure.' },
            { icon: Eye, title: 'Clear Communication', desc: 'We break down complex financial concepts into clear, understandable guidance so you can make confident decisions.' },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-red-500">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white mb-6">WHY IT MATTERS</h2>
        <p className="text-blue-50 text-lg mb-4">
          Without proper guidance, retirees risk outliving their savings, facing unexpected healthcare costs, and leaving their families unprotected. The decisions you make today about Medicare, income planning, and asset protection will shape your entire retirement.
        </p>
        <p className="text-white text-lg font-semibold">
          At Service to Security, we stand guard over what you've earned.
        </p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">OUR COMMITMENT</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Education First', desc: 'We believe informed clients make the best decisions. We teach before we recommend.' },
            { title: 'Ongoing Support', desc: 'Your plan evolves with your life. We\'re here for annual reviews and every question in between.' },
            { title: 'Your Future. My Mission.', desc: 'This isn\'t just a tagline -- it\'s the standard we hold ourselves to every single day.' },
          ].map((item) => (
            <div key={item.title} className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-bold text-blue-600 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default OurMission;
