import React from 'react';
import MysteryButton from './MysteryButton';

export default function Expertise() {
  return (
    <section className="py-24 bg-solar-dark text-white relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 dark:opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Nossa Expertise</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-white">O que faz um <span className="text-solar-orange underline decoration-white/20">Integrador Solar</span>?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Muito mais que instalar placas, a MgS System Solar cuida de todo o ciclo do seu projeto para garantir eficiência e segurança.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              icon: "fa-search-dollar",
              title: "Curadoria Técnica",
              desc: "Selecionamos os melhores equipamentos (painéis e inversores) do mercado global, garantindo durabilidade e máxima geração para o seu perfil de consumo."
            },
            {
              icon: "fa-tools",
              title: "Instalação Certificada",
              desc: "Nossa equipe própria segue rigorosamente as normas NR10 e NR35. Instalação limpa, segura e esteticamente planejada para valorizar seu imóvel."
            },
            {
              icon: "fa-file-signature",
              title: "Homologação Completa",
              desc: "Esqueça a burocracia. Cuidamos de todo o processo de aprovação e vistoria junto à concessionária de energia até a troca do medidor."
            },
            {
              icon: "fa-headset",
              title: "Monitoramento e Pós-Venda",
              desc: "Acompanhamos a performance do seu sistema remotamente e oferecemos suporte contínuo para garantir que sua economia seja real e constante."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:shadow-xl transition group duration-300">
              <div className="w-14 h-14 bg-solar-orange rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-solar-orange/20 group-hover:scale-110 transition">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <MysteryButton text="Descubra a Luz que Guia Nossos Passos" />
        </div>
      </div>
    </section>
  );
}
