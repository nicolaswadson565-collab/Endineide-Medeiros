
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { WHATSAPP_LINK } from './constants';
import { WhatsAppIcon } from './components/Icons';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand/20 selection:text-brand relative">
      <Navbar />
      <main className="relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
           <div className="bg-elegant-lines absolute inset-0"></div>
        </div>
        
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />

      <a 
        href={WHATSAPP_LINK}
        className="fixed bottom-6 right-6 z-[60] md:hidden group"
        aria-label="WhatsApp"
      >
        <div className="absolute -inset-2 bg-[#25D366]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300">
          <WhatsAppIcon className="w-8 h-8" />
          <div className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-[#25D366]"></div>
        </div>
      </a>
    </div>
  );
};

export default App;
