
import React from 'react';
import { PILLARS } from '../constants';

const Solution: React.FC = () => {
  return (
    <section id="sobre" className="py-32 bg-clinic-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-24 reveal">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-lg bg-white border border-clinic-100 text-brand text-[9px] font-bold uppercase tracking-[0.3em] mb-10 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
              <span>O Diferencial Edineide Medeiros</span>
            </div>
            <h2 className="text-4xl md:text-8xl font-serif text-gray-900 leading-[0.95] text-balance">
              Estética de Resultados, <br />
              <span className="italic text-brand/80 font-light">Ética em cada detalhe.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 pb-4">
            <p className="text-xl text-gray-400 leading-relaxed font-light border-l border-brand/20 pl-10">
              Não acreditamos em mudanças drásticas. Acreditamos no resgate da sua melhor versão através de uma abordagem clínica rigorosa e um olhar artístico apurado.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => (
            <div 
              key={idx} 
              className="reveal group relative bg-white p-12 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_-20px_rgba(163,86,126,0.12)] transition-all duration-700 flex flex-col border border-gray-50 hover:border-brand/10"
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <span className="absolute top-10 right-12 text-7xl font-serif font-bold text-clinic-50 group-hover:text-brand/5 transition-colors duration-700 select-none">
                0{idx + 1}
              </span>

              <div className="mb-12">
                <div className="relative w-16 h-16 bg-clinic-50 rounded-xl flex items-center justify-center text-brand border border-clinic-100 group-hover:bg-brand group-hover:text-white transition-all duration-700 shadow-sm">
                  {pillar.icon}
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-5 group-hover:text-brand transition-colors duration-500">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-lg font-light">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
