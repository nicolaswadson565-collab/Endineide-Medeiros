
import React from 'react';
import { Moon, History, Waves } from 'lucide-react';

const Problem: React.FC = () => {
  const pains = [
    { 
      icon: <Moon className="w-6 h-6" />, 
      title: "Olhar Cansado",
      text: "Sente que seu rosto transmite um cansaço que você nem sempre está sentindo." 
    },
    { 
      icon: <History className="w-6 h-6" />, 
      title: "Marcas do Tempo",
      text: "Linhas que antes eram suaves agora parecem mais marcadas no espelho." 
    },
    { 
      icon: <Waves className="w-6 h-6" />, 
      title: "Perda de Firmeza",
      text: "A sensação de que o contorno do seu rosto está perdendo a definição original." 
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="relative order-2 lg:order-1 reveal reveal-left">
            <div className="relative">
              <div className="absolute -inset-4 border border-clinic-100 rounded-2xl transform rotate-2 pointer-events-none opacity-50"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border border-clinic-50">
                <img 
                  src="https://images.unsplash.com/photo-1598454125644-2d94100e41d4?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105" 
                  alt="Beleza madura e natural"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <div className="inline-block px-4 py-1.5 rounded-lg bg-clinic-50 border border-clinic-100 text-brand text-[9px] font-bold uppercase tracking-[0.3em] mb-10">
                Autoconhecimento & Estética
              </div>
              
              <h2 className="text-4xl md:text-7xl font-serif text-gray-900 mb-10 leading-[1] text-balance">
                Você sente que o <br /><span className="italic text-brand/80">brilho</span> se perdeu no espelho?
              </h2>
              
              <p className="text-xl text-gray-500 mb-14 leading-relaxed font-light max-w-xl">
                O passar dos anos traz sabedoria, mas a rotina pode desgastar o viço natural. Na clínica, não buscamos mudar seu rosto, mas sim <span className="font-semibold text-gray-900">reacender a luz</span> que sempre esteve aí.
              </p>
            </div>
            
            <div className="grid gap-5">
              {pains.map((pain, idx) => (
                <div 
                  key={idx} 
                  className="reveal group flex items-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5 transition-all duration-500"
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="w-16 h-16 shrink-0 rounded-xl bg-clinic-50 flex items-center justify-center text-brand transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                    {pain.icon}
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-serif font-bold text-gray-900 mb-1">{pain.title}</h4>
                    <p className="text-gray-500 leading-snug font-light italic">"{pain.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
