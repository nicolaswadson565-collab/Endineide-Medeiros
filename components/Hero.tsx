
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-clinic-100">
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-8xl font-serif text-gray-900 leading-[1.05] mb-8 text-balance animate-fade-up">
            Sua melhor versão, <br />
            <span className="italic text-brand/90 font-light block overflow-hidden">
              <span className="inline-block animate-[fadeUp_1.2s_ease-out_0.2s_forwards] opacity-0">sem deixar de ser você.</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-12 leading-relaxed max-w-xl text-balance font-light animate-[fadeUp_1.2s_ease-out_0.4s_forwards] opacity-0">
            Recupere o aspecto descansado e a saúde da sua pele com procedimentos de alta precisão que preservam sua identidade. Resultados naturais para quem busca elegância, não exageros.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 animate-[fadeUp_1.2s_ease-out_0.6s_forwards] opacity-0">
            <a 
              href={WHATSAPP_LINK}
              className="relative overflow-hidden bg-brand text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-brand/90 transition-all transform hover:-translate-y-1 shadow-2xl shadow-brand/20 group/primary"
            >
              <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover/primary:left-[150%] transition-all duration-1000"></div>
              <span>Agendar Avaliação</span>
              <ArrowRight className="w-5 h-5 group-hover/primary:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#procedimentos"
              className="bg-white/40 backdrop-blur-md border border-gray-200 text-gray-800 px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all text-center hover:shadow-xl hover:shadow-black/5"
            >
              Ver Procedimentos
            </a>
          </div>
        </div>

        <div className="relative group animate-blur-in">
          <div className="absolute -inset-4 bg-brand/5 rounded-3xl blur-2xl group-hover:bg-brand/10 transition-colors duration-700 animate-pulse"></div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/50">
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200" 
              alt="Mulher com pele radiante e natural" 
              className="w-full h-full object-cover transform transition-transform duration-[2s] hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
