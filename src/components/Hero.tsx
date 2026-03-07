import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import MysteryButton from './MysteryButton';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} id="home" className="bg-solar-dark text-white pt-36 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden transition-colors duration-300">
      <motion.div 
        style={{ y: yBackground }} 
        className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
      ></motion.div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center">
        <motion.div 
          style={{ y: yText }} 
          className="lg:w-1/2 text-center lg:text-left"
        >
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">A Energia que Move o Cariri</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl lg:text-6xl font-extrabold mt-4 mb-6 leading-tight"
          >
            Transforme Sol em <br /><span className="text-solar-orange underline decoration-solar-orange/30 dark:decoration-white/20">Liberdade Financeira</span>
          </motion.h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
            A MgS System Solar é líder em Juazeiro do Norte e região. Instalação segura com equipe certificada NR10/NR35 e garantia de 25 anos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a href="#calculadora" className="bg-solar-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition shadow-xl text-center hover:bg-orange-600 uppercase tracking-wide">
              Simular Minha Economia
            </a>
            <a href="https://wa.me/message/24V75JFH4PNMB1" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-solar-orange dark:hover:border-solar-orange transition flex items-center justify-center gap-2 text-gray-700 dark:text-white">
              <i className="fab fa-whatsapp text-green-500"></i> Falar com Especialista
            </a>
          </div>
          <div className="flex justify-center lg:justify-start">
            <MysteryButton text="Curioso? Acesse e verá o Mestre Jesus" />
          </div>
        </motion.div>
        
        <motion.div 
          style={{ y: yImage }} 
          className="lg:w-1/2 mt-16 lg:mt-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800" 
            className="rounded-3xl shadow-2xl border-4 border-white dark:border-white/5 w-full" 
            alt="Painéis Solares MgS em Juazeiro do Norte" 
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
          <div className="mt-6 text-center bg-white/80 dark:bg-solar-card/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 dark:border-white/10 shadow-lg max-w-md mx-auto">
            <p className="font-black text-solar-dark dark:text-white text-lg uppercase tracking-wide">
              <span className="text-solar-orange">MgS SYSTEM SOLAR</span>
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-bold mt-1 leading-tight">
              A melhor empresa do Cariri de energia solar com instalação especializada
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
