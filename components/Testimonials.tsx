
import React from 'react';
import { Star, Quote, Award, Sparkles, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-32 bg-neutral-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-brand/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-4 mb-10">
              <div className="flex -space-x-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-brand text-brand" />)}
              </div>
              <div className="h-3 w-px bg-white/10"></div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">5.0 Excelência no Google</span>
            </div>

            <h2 className="text-5xl md:text-8xl font-serif mb-16 leading-[0.95] text-balance">
              Transformações que <br />
              <span className="italic text-brand font-light">inspiram confiança.</span>
            </h2>
            
            <div className="relative group">
              <Quote className="absolute -top-12 -left-12 text-brand/5 w-40 h-40 -z-10 transform -rotate-12 transition-transform group-hover:rotate-0 duration-1000" />
              
              <div className="bg-white/[0.02] backdrop-blur-md p-10 md:p-14 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
                <p className="text-2xl md:text-3xl font-serif italic mb-12 leading-relaxed text-white/80 relative z-10 font-light">
                  "Eu tinha pânico de ficar com 'cara de boneca'. Na clínica, a Dra. Edineide entendeu exatamente que eu só queria parecer mais jovem e descansada. Me sinto incrível!"
                </p>
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand to-brand/60 flex items-center justify-center font-serif text-2xl font-bold shadow-lg">M</div>
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-lg p-1 border-2 border-neutral-900">
                        <CheckCircle2 size={10} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl tracking-tight">Mariana S.</h4>
                      <p className="text-brand text-[10px] font-bold uppercase tracking-[0.2em]">Paciente VIP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Award />, title: "Insumos Premium", desc: "Marcas mundiais" },
                { icon: <Sparkles />, title: "Expertise", desc: "Estética Avançada" },
                { icon: <Heart />, title: "Cuidado Único", desc: "Atendimento VIP" },
                { icon: <ShieldCheck />, title: "Biossegurança", desc: "Rigor absoluto" }
              ].map((badge, idx) => (
                <div 
                  key={idx} 
                  className={`p-10 rounded-2xl border border-white/5 flex flex-col items-center text-center transition-all duration-700 hover:border-brand/40 group ${idx % 2 !== 0 ? 'lg:mt-10' : ''} bg-white/[0.01] hover:bg-white/[0.04]`}
                >
                  <div className="w-16 h-16 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center text-brand mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    {React.cloneElement(badge.icon as React.ReactElement, { size: 28 })}
                  </div>
                  <h4 className="font-bold mb-2 text-lg text-white/90">{badge.title}</h4>
                  <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
