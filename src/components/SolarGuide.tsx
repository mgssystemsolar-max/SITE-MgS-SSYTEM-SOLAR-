import React from 'react';

export default function SolarGuide() {
  const cards = [
    {
      icon: "fa-user-shield",
      title: "Instalador Seguro",
      text: "Não caia em ciladas. A MgS garante técnicos com registro no CFT e certificações NR10 e NR35. Segurança elétrica é coisa séria."
    },
    {
      icon: "fa-solar-panel",
      title: "Placas Tier 1",
      text: "Trabalhamos apenas com painéis de classificação Tier 1 (Bloomberg). Eficiência real e durabilidade comprovada para o sol do Cariri."
    },
    {
      icon: "fa-microchip",
      title: "Inversores Globais",
      text: "O cérebro do seu sistema. Utilizamos marcas líderes mundiais como WEG, Growatt e Fronius para garantir estabilidade na geração."
    },
    {
      icon: "fa-broom",
      title: "Manutenção Nordeste",
      text: "O segredo da longevidade no nosso clima. Oferecemos planos de limpeza e monitoramento para seu sistema durar 25 anos ou mais."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Guia do Iniciante</span>
          <h2 className="text-3xl lg:text-4xl font-black mt-2 mb-6 text-solar-dark dark:text-white">
            O que você precisa saber antes de <span className="text-solar-orange underline decoration-solar-orange/30">investir</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white dark:bg-solar-card p-8 rounded-2xl shadow-lg border-b-4 border-solar-orange hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-solar-orange/10 rounded-full flex items-center justify-center text-solar-orange text-2xl mb-6">
                <i className={`fas ${card.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-solar-dark dark:text-white">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
