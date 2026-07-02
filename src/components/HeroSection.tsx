interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => (
  <section className="py-16 md:py-20 bg-blue-600">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
      <p className="text-lg md:text-xl text-blue-100 max-w-3xl lg:max-w-5xl mx-auto">{subtitle}</p>
    </div>
  </section>
);

export default HeroSection;
