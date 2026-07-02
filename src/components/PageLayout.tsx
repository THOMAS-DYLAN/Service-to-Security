import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CTASection from './CTASection';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <main>{children}</main>
    <CTASection />
    <Footer />
  </div>
);

export default PageLayout;
