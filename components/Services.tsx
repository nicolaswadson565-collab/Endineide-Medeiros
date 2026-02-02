
import React from 'react';
import { SERVICES, WHATSAPP_LINK } from '../constants';
import { Plus, User, Sparkle, Wind, ArrowUpRight } from 'lucide-react';

const ServiceIcon = ({ name }: { name: string }) => {
  const baseClasses = "w-5 h-5";
  switch (name) {
    case 'face': return <User className={baseClasses} />;
    case 'skin': return <Sparkle className={baseClasses} />;
    case 'body': return <Wind className={baseClasses} />;
    default: return <Plus className={baseClasses} />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="procedimentos" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8 reveal">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-[1px] bg-brand"></div>
              <span className="text-brand font-bold tracking-[0.3em] text-[9px] uppercase">Menu de Especialidades</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif text-gray-900 leading-[0.9] mb-8">
              Ciência e arte <br /> 
              <span className="italic text-brand/70 font-light">em harmonia.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-md leading-relaxed">
              Protocolos desenvolvidos sob rigor clínico para realçar seus traços naturais.
            </p>
          </div>
          <div className="pb-4">
             <a 
              href={WHATSAPP_LINK} 
              className="group flex items-center space-x-4 text-gray-900 font-bold uppercase tracking-[0.2em] text-[10px] hover:text-brand transition-all duration-500"
            >
              <span>Protocolos Completos</span>
              <div className="w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-white group-hover:-rotate-12 transition-all duration-500 shadow-sm">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="reveal group flex flex-col h-full bg-white rounded-2xl transition-all duration-700 hover:-translate-y-2"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-10 shadow-2xl shadow-gray-100 border border-gray-50">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-lg shadow-xl">
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-brand">
                    {service.category}
                  </span>
                </div>
                <div className="absolute bottom-0 right-0">
                  <div className="w-14 h-14 bg-white rounded-tl-2xl flex items-center justify-center text-brand border-l border-t border-gray-50">
                    <ServiceIcon name={service.iconName} />
                  </div>
                </div>
              </div>

              <div className="px-2 flex flex-col flex-grow">
                <h3 className="text-3xl font-serif text-gray-900 leading-snug mb-5 group-hover:text-brand transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-lg mb-10 flex-grow">
                  {service.description}
                </p>

                <a 
                  href={WHATSAPP_LINK}
                  className="relative overflow-hidden group/btn bg-brand text-white flex items-center justify-between p-5 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-brand/25 hover:-translate-y-1"
                >
                  <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover/btn:left-[150%] transition-all duration-700"></div>
                  <span className="font-bold uppercase tracking-widest text-[10px]">Agendar Avaliação</span>
                  <Plus size={18} className="group-hover/btn:rotate-90 transition-transform duration-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
