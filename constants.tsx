
import React from 'react';
import { Sparkles, ShieldCheck, Microscope, UserCheck, Search, Zap, Leaf, Activity, Droplets, Heart } from 'lucide-react';
import { ServiceCard, FAQItem } from './types';

export const WHATSAPP_LINK = "https://wa.me/5588981670085?text=Olá! Gostaria de agendar uma avaliação na Edineide Medeiros Beauty Clinic.";
export const MAPS_LINK = "https://www.google.com/maps/place/Edineide+Medeiros+Beauty/@-5.1502116,-38.09833,19z/data=!4m6!3m5!1s0x7bbd106957ee233:0x6d725265f80d8826!8m2!3d-5.1502562!4d-38.0982541!16s%2Fg%2F11f08j4wsy?entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D";

export const PILLARS = [
  {
    title: "Avaliação Técnica",
    description: "Entendemos a causa da sua queixa antes de sugerir o tratamento, através de um olhar clínico detalhado e personalizado.",
    icon: <Search className="w-7 h-7" />
  },
  {
    title: "Insumos Premium",
    description: "Utilizamos apenas o que há de melhor e mais seguro no mercado mundial para garantir sua segurança.",
    icon: <ShieldCheck className="w-7 h-7" />
  },
  {
    title: "Naturalidade",
    description: "Nosso objetivo é que as pessoas notem que você está radiante, sem saberem exatamente o que você fez.",
    icon: <Sparkles className="w-7 h-7" />
  }
];

export const SERVICES: ServiceCard[] = [
  {
    title: "Gerenciamento do Envelhecimento",
    description: "Botox e Bioestimuladores para suavizar lines e devolver a firmeza sem paralisar sua expressão.",
    image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&q=80&w=1200",
    category: "Estética Facial",
    iconName: 'face'
  },
  {
    title: "Saúde e Textura da Pele",
    description: "Tratamento de manchas (Melasma), acne e poros, devolvendo o brilho natural e uniforme.",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=1200",
    category: "Estética Avançada",
    iconName: 'skin'
  },
  {
    title: "Remodelagem Corporal Consciente",
    description: "Protocolos para gordura localizada e flacidez focados em contorno e bem-estar sistêmico.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200",
    category: "Estética Corporal",
    iconName: 'body'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Vou ficar sem expressão?",
    answer: "Absolutamente não. Trabalhamos com pontos estratégicos para relaxar a musculatura mantendo sua naturalidade e expressões genuínas."
  },
  {
    question: "O pós-procedimento é lento?",
    answer: "A maioria dos nossos protocolos permite que você volte às suas atividades no mesmo dia, com orientações simples de cuidados."
  },
  {
    question: "Como sei qual o melhor pra mim?",
    answer: "Tudo começa na nossa Avaliação Personalizada, onde traçamos seu plano de tratamento único baseado na sua anatomia e objetivos."
  }
];
