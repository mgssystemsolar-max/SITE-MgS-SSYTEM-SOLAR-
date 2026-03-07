import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import PartnerLogo from './PartnerLogo';

export default function Partners() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const partners = [
    { name: 'WEG Solar Cariri', domain: 'weg.net', url: 'https://www.weg.net' },
    { name: 'Canadian Solar Juazeiro', domain: 'canadiansolar.com', url: 'https://www.canadiansolar.com' },
    { name: 'Growatt Inversores Cariri', domain: 'ginverter.com', url: 'https://www.ginverter.com' },
    { name: 'Fronius Energia Solar', domain: 'fronius.com', url: 'https://www.fronius.com' },
    { name: 'BYD Solar Brasil', domain: 'byd.com', url: 'https://www.byd.com' },
    { name: 'Intelbras Solar CE', domain: 'intelbras.com', url: 'https://www.intelbras.com' },
    { name: 'Sungrow Solar Expert', domain: 'sungrowpower.com', url: 'https://www.sungrowpower.com' },
    { name: 'Jinko Solar Cariri', domain: 'jinkosolar.com', url: 'https://www.jinkosolar.com' },
  ];

  return (
    <section ref={containerRef} className="py-20 bg-white dark:bg-solar-dark border-b border-gray-100 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <i className="fas fa-check-circle"></i> Instalador Homologado e Certificado no Ceará
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-solar-dark dark:text-white mb-4">
            Nossos Parceiros Tecnológicos e <span className="text-solar-orange">Fornecedores Globais</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Trabalhamos exclusivamente com marcas Tier 1 para garantir a máxima eficiência em **Energia Solar no Cariri** e todo o Nordeste.
          </p>
        </div>

        {/* Logos Grid com Lazy Loading e SEO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.a 
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ y: index % 2 === 0 ? y1 : y2 }}
              className="group flex items-center justify-center p-8 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-solar-orange/30 hover:shadow-lg transition-all duration-300"
              title={`Equipamentos ${partner.name} para Energia Solar Cariri`}
            >
              <PartnerLogo 
                src={`https://logo.clearbit.com/${partner.domain}`} 
                alt={`${partner.name} - Especialista em Energia Solar Cariri`} 
                fallbackText={partner.name}
                className="max-h-12 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
            </motion.a>
          ))}
        </div>

        {/* Seção MGS Academy Integrada */}
        <div className="bg-gray-50 dark:bg-solar-card rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-solar-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-solar-dark dark:text-white mb-4">
                Hub de Tecnologia Solar do Cariri
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                A **MgS System Solar** valida tecnologias mundiais para a realidade de Juazeiro do Norte. Através da <span className="font-bold text-solar-orange">MGS Academy</span>, formamos a elite dos projetistas fotovoltaicos do Ceará usando equipamentos destes parceiros globais.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm italic border-l-4 border-solar-orange pl-4">
                "Nossos alunos são treinados com tecnologia de ponta, consolidando a confiança das maiores fabricantes em cada projeto homologado pela MgS."
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-solar-orange/10 rounded-full flex items-center justify-center text-solar-orange text-2xl mb-4">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h4 className="font-bold text-solar-dark dark:text-white mb-2">Acesse nossa Formação Técnica</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-xs">
                Aprenda a projetar e homologar com quem domina o sol do Nordeste.
              </p>
              <button 
                onClick={() => window.open('https://go.hotmart.com/K104298527J', '_blank')}
                className="bg-solar-orange text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20"
              >
                Conhecer MGS Academy
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
