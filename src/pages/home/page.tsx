import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import PricingSystem from './components/PricingSystem';
import Access from './components/Access';
import Recruit from './components/Recruit';
import StoreInfo from './components/StoreInfo';
import BlogSection from './components/BlogSection';
import FAQ from './components/FAQ';
import Terms from './components/Terms';
import Footer from './components/Footer';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <About />
      <PricingSystem />
      <Access />
      <Recruit />
      <StoreInfo />
      <BlogSection />
      <FAQ />
      <Terms />
      <Footer />
    </div>
  );
}