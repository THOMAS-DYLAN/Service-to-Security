import { Link } from 'react-router-dom';


const CTASection = () => (
  <section className="py-16 bg-red-500">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">SECURE YOUR FUTURE TODAY</h2>
      <p className="text-lg text-blue-50 mb-8 max-w-2xl lg:max-w-4xl mx-auto">
        Don't leave your retirement to chance. Take action now to protect what you've earned.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact/consultation"
          className="bg-white hover:bg-blue-50 text-blue-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
        >
          Schedule Your Complimentary Consultation
        </Link>
        <Link
          to="/contact/us"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
