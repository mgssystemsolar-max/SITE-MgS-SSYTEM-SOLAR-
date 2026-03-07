import React from 'react';

export default function SolarKnowledge() {
  return (
    <section id="conhecimento" className="py-24 bg-solar-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Educação Solar</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-white">Como Funciona a <span className="text-solar-orange underline decoration-solar-orange/30">Energia Solar</span>?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Entenda o passo a passo de como o sol se transforma em economia na sua conta de luz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0" aria-hidden="true"></div>

          {[
            {
              step: "01",
              title: "Captação",
              icon: "fa-sun",
              desc: "Os painéis solares instalados no telhado captam a luz do sol e a transformam em energia elétrica (corrente contínua)."
            },
            {
              step: "02",
              title: "Conversão",
              icon: "fa-random", // or fa-exchange-alt
              desc: "O Inversor Solar recebe essa energia e a converte para o padrão da nossa rede elétrica (corrente alternada), pronta para uso."
            },
            {
              step: "03",
              title: "Consumo",
              icon: "fa-plug",
              desc: "A energia é distribuída pelo quadro de força para alimentar suas lâmpadas, eletrodomésticos e equipamentos."
            },
            {
              step: "04",
              title: "Créditos",
              icon: "fa-piggy-bank",
              desc: "Se sobrar energia, ela vai para a rede da concessionária e vira créditos que abatem sua conta automaticamente."
            }
          ].map((item, index) => (
            <div key={index} className="relative z-10 bg-solar-card p-8 rounded-3xl shadow-xl border border-white/10 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-16 h-16 bg-solar-orange text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg mx-auto group-hover:bg-white group-hover:text-solar-orange transition-colors">
                <i className={`fas ${item.icon}`} aria-hidden="true"></i>
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-solar-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                Passo {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed text-center">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <i className="fas fa-leaf text-green-500" aria-hidden="true"></i>
              Impacto Ambiental
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-200">
                <i className="fas fa-check-circle text-green-500 mt-1" aria-hidden="true"></i>
                <span><strong>Energia 100% Limpa:</strong> Não emite poluentes ou gases de efeito estufa.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <i className="fas fa-check-circle text-green-500 mt-1" aria-hidden="true"></i>
                <span><strong>Renovável:</strong> O sol é uma fonte inesgotável de energia, especialmente no Nordeste.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <i className="fas fa-check-circle text-green-500 mt-1" aria-hidden="true"></i>
                <span><strong>Silenciosa:</strong> O sistema opera sem ruídos, não incomodando vizinhos ou a fauna local.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-solar-orange/5 p-8 rounded-3xl border border-solar-orange/20">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <i className="fas fa-chart-line text-solar-orange" aria-hidden="true"></i>
              Valorização do Imóvel
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Além da economia mensal imediata, instalar energia solar valoriza seu imóvel em até <strong>10% a 30%</strong>. Compradores buscam casas com custos fixos menores e sustentabilidade.
            </p>
            <a href="#calculadora" className="inline-flex items-center gap-2 text-solar-orange font-bold hover:gap-3 transition-all">
              Quero valorizar meu imóvel <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
