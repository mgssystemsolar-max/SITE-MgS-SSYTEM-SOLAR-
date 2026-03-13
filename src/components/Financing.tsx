import React from 'react';
import { motion } from 'motion/react';

export default function Financing() {
  const financingOptions = [
    {
      icon: "fas fa-university",
      title: "Financiamento Bancário",
      description: "Trabalhamos com as principais linhas de crédito do mercado (Banco do Nordeste, Santander, BV, etc.). Financie até 100% do projeto com taxas reduzidas e carência de até 120 dias.",
      highlight: "A parcela fica igual ou menor que sua conta de luz!"
    },
    {
      icon: "fas fa-credit-card",
      title: "Cartão de Crédito",
      description: "Parcele seu sistema de energia solar no cartão de crédito com facilidade e rapidez na aprovação. Ideal para projetos residenciais de menor porte.",
      highlight: "Parcelamento em até 24x"
    },
    {
      icon: "fas fa-handshake",
      title: "Consórcio Sustentável",
      description: "Planeje a compra do seu sistema solar a médio e longo prazo, sem pagar juros. Uma excelente opção para quem não tem pressa e quer economizar ainda mais.",
      highlight: "Parcelas reduzidas e sem juros"
    },
    {
      icon: "fas fa-money-bill-wave",
      title: "Pagamento à Vista",
      description: "Para quem deseja o máximo de retorno sobre o investimento, oferecemos descontos especiais para pagamentos à vista.",
      highlight: "Melhor ROI e desconto exclusivo"
    }
  ];

  return (
    <section id="financiamento" className="py-24 bg-solar-card text-white transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Facilidades de Pagamento</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-white">
            Planos e <span className="text-solar-orange underline decoration-solar-orange/30">Financiamento</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ter energia solar é mais fácil do que você imagina. A economia gerada na sua conta de luz paga a parcela do financiamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {financingOptions.map((option, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-solar-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-solar-orange/20 transition-colors">
                <i className={`${option.icon} text-3xl text-solar-orange`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{option.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {option.description}
              </p>
              <div className="mt-auto">
                <span className="inline-block bg-solar-orange/20 text-solar-orange text-xs font-bold px-3 py-1 rounded-full">
                  {option.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-solar-dark to-solar-card border border-solar-orange/30 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-solar-orange/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 lg:w-2/3">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Quer saber qual é a melhor opção para você?
            </h3>
            <p className="text-gray-300 text-lg">
              Nossos especialistas fazem uma análise gratuita da sua conta de energia e apresentam o plano de pagamento ideal, mostrando o tempo de retorno do seu investimento.
            </p>
          </div>
          
          <div className="relative z-10 lg:w-1/3 flex justify-center lg:justify-end w-full">
            <a 
              href="https://wa.me/message/24V75JFH4PNMB1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto bg-solar-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition shadow-xl text-center hover:bg-orange-600 flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp text-xl"></i> Falar com Consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
