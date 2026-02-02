
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, ChevronRight, MapPin, Phone } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { WhatsAppIcon } from './Icons';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const menuLinks = [
    { name: 'Procedimentos', href: '#procedimentos' },
    { name: 'Diferencial', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  return (
    <>
      {/* Top Bar - High End Concierge Feel */}
      <div className={`hidden lg:block bg-white border-b border-clinic-100 py-2.5 transition-all duration-500 ${isScrolled ? '-translate-y-full opacity-0 absolute' : 'translate-y-0 opacity-100'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <MapPin size={12} className="text-brand" />
              <span>Limoeiro do Norte - CE</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={12} className="text-brand" />
              <span>(88) 98167-0085</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://instagram.com/edineidebeauty" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors flex items-center space-x-2">
              <Instagram size={12} />
              <span>@edineidebeauty</span>
            </a>
          </div>
        </div>
      </div>

      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-sm py-3' 
            : 'top-0 lg:top-[37px] bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex flex-col group cursor-pointer outline-none"
          >
            <span className={`text-xl md:text-2xl font-serif font-bold tracking-widest transition-colors duration-300 ${isScrolled ? 'text-brand' : 'text-gray-900'}`}>
              EDINEIDE MEDEIROS
            </span>
            <span className={`text-[9px] uppercase tracking-[0.4em] font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-400' : 'text-gray-500'}`}>
              Beauty Clinic
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold tracking-[0.2em] uppercase">
            {menuLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-brand transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK} 
              className="relative overflow-hidden bg-brand text-white px-8 py-3.5 rounded-xl hover:bg-brand/90 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-brand/10 flex items-center space-x-3 group/btn"
            >
              <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover/btn:left-[150%] transition-all duration-700"></div>
              <WhatsAppIcon className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </a>
          </div>

          <button 
            className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-brand' : 'text-gray-900'}`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-clinic-900/40 backdrop-blur-md transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out transform flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-8 border-b border-clinic-50">
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold text-brand tracking-tighter">EM</span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-gray-400 font-bold">Beauty Clinic</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 bg-clinic-50 rounded-lg text-brand hover:bg-clinic-100 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow flex flex-col p-8 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Navegação</span>
            {menuLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className={`flex justify-between items-center text-3xl font-serif text-gray-800 hover:text-brand transition-all duration-300 transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <span>{link.name}</span>
                <ChevronRight className="text-clinic-200" size={24} />
              </a>
            ))}

            <div 
              className={`pt-10 transition-all duration-700 transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <a 
                href={WHATSAPP_LINK} 
                className="flex items-center justify-center space-x-3 w-full bg-brand text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand/20 active:scale-95 transition-all"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span>Agendar Agora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
