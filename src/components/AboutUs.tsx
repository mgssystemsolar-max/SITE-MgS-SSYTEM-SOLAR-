import React, { useState } from 'react';

export default function AboutUs() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="quem-somos" className="py-24 bg-solar-dark text-white transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-solar-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 transform hover:scale-[1.02] transition-transform duration-500 bg-gray-800 min-h-[400px]">
              <img 
                src="https://drive.google.com/thumbnail?id=1fcNt8-3EcIZcrQtlo_y34ct5csQeLodr&sz=w1000" 
                alt="Fundador MgS System Solar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-white font-bold text-lg">Compromisso com você</p>
              <p className="text-gray-400 text-sm">Márcio Gonçalves - Fundador</p>
              <p className="text-solar-orange font-bold text-xs uppercase mt-1 tracking-wider">Técnico em Eletrotécnica</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                <span className="text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                  <i className="fas fa-id-card text-solar-orange"></i>
                  Registro CFT
                </span>
                <span className="text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                  <i className="fas fa-hard-hat text-solar-orange"></i>
                  NR10 & NR35
                </span>
              </div>
            </div>
            
            {/* Safe Installation Badge */}
            <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 lg:p-6 rounded-2xl shadow-xl z-20 hidden md:flex flex-col items-center text-center animate-bounce-slow border-4 border-solar-dark">
              <i className="fas fa-shield-alt text-3xl mb-1"></i>
              <p className="text-xs font-bold uppercase tracking-wider">Instalação<br/>Segura</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Sobre a MgS System Solar</span>
            <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-white leading-tight">
              A Energia que Move o <span className="text-solar-orange underline decoration-solar-orange/30">Cariri</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Nascemos em <strong>Juazeiro do Norte</strong> com uma missão clara: tornar a energia solar acessível, segura e eficiente para todos os caririenses.
            </p>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Somos especialistas em projetos fotovoltaicos de alta performance. Não vendemos apenas placas solares; entregamos <strong>liberdade energética</strong> e valorização patrimonial, com o selo de qualidade de quem realmente entende do clima e das necessidades da nossa região.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-solar-orange/10 p-3 rounded-xl text-solar-orange shrink-0">
                  <i className="fas fa-bullseye text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Missão</h4>
                  <p className="text-sm text-gray-400">Levar economia e sustentabilidade para lares e empresas com transparência total.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-solar-orange/10 p-3 rounded-xl text-solar-orange shrink-0">
                  <i className="fas fa-eye text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Visão</h4>
                  <p className="text-sm text-gray-400">Ser a referência absoluta em qualidade e pós-venda no setor solar do Nordeste.</p>
                </div>
              </div>
            </div>

            <div 
              className="flex items-center gap-4 mb-10 p-4 bg-white/5 rounded-2xl border border-white/5 max-w-md cursor-pointer hover:bg-white/10 transition-colors group"
              onClick={() => setIsZoomed(true)}
              title="Clique para ampliar o certificado"
            >
              <div className="relative">
                <img 
                  src="https://drive.google.com/thumbnail?id=1FtMaH3vOIaxIt6pjuTKXQTlMJJWCTcn7&sz=w1000" 
                  alt="Certificado Técnico" 
                  className="h-16 w-auto object-contain rounded-md"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-md flex items-center justify-center">
                  <i className="fas fa-search-plus text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md"></i>
                </div>
              </div>
              <div>
                <p className="font-bold text-white text-sm uppercase tracking-wide group-hover:text-solar-orange transition-colors">Técnico Certificado</p>
                <p className="text-xs text-gray-400">Especialista em soluções Intelbras</p>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-solar-dark px-8 py-4 rounded-xl font-bold hover:gap-4 transition-all shadow-lg hover:shadow-xl">
              Conheça Nossa Equipe <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
            <img 
              src="https://drive.google.com/thumbnail?id=1FtMaH3vOIaxIt6pjuTKXQTlMJJWCTcn7&sz=w1000" 
              alt="Certificado Técnico Ampliado" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-scale-up"
              referrerPolicy="no-referrer"
            />
            <button 
              className="absolute -top-12 right-0 text-white hover:text-solar-orange transition-colors text-xl font-bold flex items-center gap-2"
              onClick={() => setIsZoomed(false)}
            >
              <i className="fas fa-times"></i> Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
