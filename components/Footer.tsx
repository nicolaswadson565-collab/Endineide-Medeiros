
import React from 'react';
import { Instagram, MapPin, Phone, ExternalLink } from 'lucide-react';
import { WHATSAPP_LINK, MAPS_LINK } from '../constants';
import { WhatsAppIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="relative py-32 bg-neutral-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-brand/5 rounded-full blur-[150px]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <h2 className="text-5xl md:text-9xl font-serif text-white mb-14 leading-[0.9] text-balance font-light">
            Recupere o seu <br />
            <span className="italic text-brand">brilho e autoconfiança.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-10">
            <a 
              href={WHATSAPP_LINK}
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute -inset-4 bg-brand/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative bg-brand text-white px-14 py-6 rounded-2xl font-bold flex items-center space-x-5 hover:bg-brand/90 transition-all transform hover:-translate-y-1 shadow-2xl shadow-brand/30 overflow-hidden group/final">
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover/final:left-[150%] transition-all duration-1000"></div>
                
                <WhatsAppIcon className="w-7 h-7" />
                <span className="text-xl tracking-tight uppercase tracking-[0.1em]">Agendar Consultoria VIP</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-20">
        <div>
          <div className="flex flex-col mb-10">
            <span className="text-2xl font-serif font-bold tracking-widest text-brand">EDINEIDE MEDEIROS</span>
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Beauty Clinic</span>
          </div>
          <p className="text-gray-400 mb-12 leading-relaxed font-light text-lg max-w-sm">
            Estética avançada e personalizada, entregando resultados que respeitam sua essência e realçam sua beleza natural.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com/edineidebeauty" className="w-14 h-14 rounded-xl bg-clinic-50 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all transform hover:-translate-y-1 shadow-sm border border-clinic-100">
              <Instagram className="w-6 h-6" />
            </a>
            <a href={WHATSAPP_LINK} className="w-14 h-14 rounded-xl bg-clinic-50 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all transform hover:-translate-y-1 shadow-sm border border-clinic-100">
              <WhatsAppIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold mb-10 text-gray-900 uppercase tracking-[0.3em]">Concierge & Contato</h4>
          <ul className="space-y-8">
            <li className="flex items-start space-x-5 text-gray-400">
              <div className="bg-clinic-50 p-3.5 rounded-xl text-brand shadow-sm border border-clinic-100">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase text-gray-400 tracking-widest">Atendimento</span>
                <span className="font-bold text-gray-900 text-lg">(88) 98167-0085</span>
              </div>
            </li>
            <li className="flex items-start space-x-5 text-gray-400">
              <div className="bg-clinic-50 p-3.5 rounded-xl text-brand shadow-sm border border-clinic-100">
                <MapPin size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase text-gray-400 tracking-widest">Localização</span>
                <span className="text-md font-medium text-gray-800 leading-snug">R. Cândido Olimpio de Freitas, 1934 <br/> Limoeiro do Norte - CE</span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold mb-10 text-gray-900 uppercase tracking-[0.3em]">Funcionamento</h4>
          <div className="bg-clinic-50 p-10 rounded-2xl border border-clinic-100 shadow-sm">
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex justify-between items-center">
                <span className="text-gray-400 font-light">Seg - Sex</span>
                <span className="text-gray-900 font-bold">08:00 — 18:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-400 font-light">Sábado</span>
                <span className="text-gray-900 font-bold">08:00 — 12:00</span>
              </li>
              <li className="pt-6 mt-6 border-t border-clinic-200">
                 <a 
                  href={MAPS_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-brand font-bold uppercase text-[9px] tracking-[0.2em] hover:translate-x-1 transition-transform"
                >
                  <span>Ver no Mapa</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="container mx-auto px-6 flex flex-col items-center text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">
          <p>© {new Date().getFullYear()} Edineide Medeiros. Ciência & Estética de Alta Performance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
