import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Locations = () => (
  <PageLayout>
    <HeroSection
      title="OFFICE LOCATIONS & SERVICE AREA"
      subtitle="Serving veterans, retirees, and families across the greater Trenton and Missouri area."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-6">OUR OFFICE</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-600">Address</h3>
                  <p className="text-gray-700">Service to Security</p>
                  <p className="text-gray-700">1039 Oklahoma Ave</p>
                  <p className="text-gray-700">Trenton, MO 64683</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-600">Phone</h3>
                  <a href="tel:816-248-1100" className="text-gray-700 hover:text-blue-600 transition">816-248-1100</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-600">Email</h3>
                  <a href="mailto:mthomas@krs.insure" className="text-gray-700 hover:text-blue-600 transition">mthomas@krs.insure</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-600">Office Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-700">Saturday: By appointment</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-blue-600 mb-2">SERVICE AREA</h3>
              <p className="text-gray-700 text-sm">
                While our office is based in Trenton, we proudly serve clients throughout Missouri and surrounding areas. Virtual consultations are available for clients who prefer to meet remotely.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-6">FIND US</h2>
            <div className="aspect-[4/3] rounded-lg overflow-hidden border-2 border-gray-300 shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=Trenton,Missouri&z=13&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Trenton Office Location"
              ></iframe>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {['Trenton, MO', 'Independence, MO', "Lee's Summit, MO", 'Blue Springs, MO'].map((city) => (
                <div key={city} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <p className="text-gray-700 text-sm">{city}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    
  </PageLayout>
);

export default Locations;
