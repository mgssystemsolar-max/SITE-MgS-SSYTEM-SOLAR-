import React from 'react';

export default function AboutUs() {
  return (
    <section id="quem-somos" className="py-24 bg-white dark:bg-solar-dark transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-solar-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/5 transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://drive.google.com/uc?export=view&id=1fcNt8-3EcIZcrQtlo_y34ct5csQeLodr" 
                alt="Fundador MgS System Solar" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-white font-bold text-lg">Compromisso com você</p>
                <p className="text-gray-300 text-sm">Márcio Gonçalves - Fundador</p>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-solar-orange text-white p-6 rounded-2xl shadow-xl z-20 hidden md:block animate-bounce-slow">
              <p className="text-4xl font-black">100%</p>
              <p className="text-xs font-bold uppercase tracking-wider">Satisfação</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Sobre a MgS System Solar</span>
            <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-solar-dark dark:text-white leading-tight">
              A Energia que Move o <span className="text-solar-orange underline decoration-solar-orange/30">Cariri</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
              Nascemos em <strong>Juazeiro do Norte</strong> com uma missão clara: tornar a energia solar acessível, segura e eficiente para todos os caririenses.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              Somos especialistas em projetos fotovoltaicos de alta performance. Não vendemos apenas placas solares; entregamos <strong>liberdade energética</strong> e valorização patrimonial, com o selo de qualidade de quem realmente entende do clima e das necessidades da nossa região.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-solar-orange/10 p-3 rounded-xl text-solar-orange shrink-0">
                  <i className="fas fa-bullseye text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-solar-dark dark:text-white text-lg">Missão</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Levar economia e sustentabilidade para lares e empresas com transparência total.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-solar-orange/10 p-3 rounded-xl text-solar-orange shrink-0">
                  <i className="fas fa-eye text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-solar-dark dark:text-white text-lg">Visão</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ser a referência absoluta em qualidade e pós-venda no setor solar do Nordeste.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 bg-solar-dark dark:bg-white text-white dark:text-solar-dark px-8 py-4 rounded-xl font-bold hover:gap-4 transition-all shadow-lg hover:shadow-xl">
              Conheça Nossa Equipe <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
