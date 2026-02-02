
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS, WHATSAPP_LINK } from '../constants';
import { WhatsAppIcon } from './Icons';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="inline-flex items-center space-x-3 mb-8">
              <div className="bg-brand/5 p-2 rounded-lg text-brand">
                <HelpCircle size={20} />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand">Suporte e Transparência</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-serif text-gray-900 leading-[0.9] mb-10">
              Sua jornada, <br />
              <span className="italic text-brand/80 font-light">sem mistérios.</span>
            </h2>
            
            <div className="bg-clinic-50 rounded-2xl p-10 border border-clinic-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all duration-700 transform group-hover:scale-110">
                <WhatsAppIcon className="w-24 h-24 text-brand" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-gray-900 mb-5">Ainda tem dúvidas?</h4>
              <p className="text-gray-400 mb-10 font-light leading-relaxed">
                Nossa equipe está pronta para uma conversa detalhada sobre seu caso.
              </p>
              <a 
                href={WHATSAPP_LINK}
                className="inline-flex items-center space-x-4 text-brand font-bold uppercase tracking-[0.2em] text-[10px] group/link"
              >
                <span>Falar com especialista</span>
                <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center transform group-hover/link:translate-x-2 transition-transform shadow-lg shadow-brand/20">
                  <ArrowRight size={16} />
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div 
                    key={idx} 
                    className={`group border border-gray-100 rounded-2xl transition-all duration-500 ${isOpen ? 'bg-clinic-50 border-brand/10 pb-8' : 'bg-white pb-2'}`}
                  >
                    <button 
                      className="w-full text-left flex justify-between items-start p-8 outline-none"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                    >
                      <div className="flex space-x-6">
                        <span className={`text-[10px] font-bold tracking-[0.2em] transition-colors duration-500 ${isOpen ? 'text-brand' : 'text-gray-300'}`}>
                          0{idx + 1}
                        </span>
                        <span className={`text-2xl md:text-3xl font-serif leading-tight transition-colors duration-500 ${isOpen ? 'text-brand' : 'text-gray-800'}`}>
                          {faq.question}
                        </span>
                      </div>
                      
                      <div className={`mt-1 shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-brand text-white rotate-180 shadow-lg shadow-brand/20' : 'bg-gray-50 text-gray-400'}`}>
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 px-8' : 'max-h-0 opacity-0 px-8'}`}
                    >
                      <div className="pl-10 flex space-x-6">
                         <p className="text-gray-500 text-lg leading-relaxed font-light italic">
                           {faq.answer}
                         </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
