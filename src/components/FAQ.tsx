import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qual a diferença entre On-Grid e Off-Grid?",
      answer: "O sistema On-Grid é conectado à rede elétrica, permitindo trocar energia com a concessionária (créditos) e gerando economia de até 95%. Já o Off-Grid usa baterias e é isolado, ideal para locais remotos onde a rede elétrica não chega."
    },
    {
      question: "O sistema funciona em dias de chuva?",
      answer: "Sim! O sistema funciona com a luz do sol (irradiação), não com o calor. Mesmo nublado ou chovendo, há geração, apenas em menor intensidade."
    },
    {
      question: "Qual a garantia dos equipamentos?",
      answer: "Trabalhamos com os melhores fabricantes do mercado. As placas possuem garantia de performance de até 25 anos."
    },
    {
      question: "Com que frequência o sistema precisa de manutenção?",
      answer: "A manutenção é mínima. Basicamente uma limpeza das placas a cada 6 meses ou 1 ano, dependendo da poeira do local. A chuva ajuda a limpar naturalmente."
    },
    {
      question: "Em quanto tempo tenho o retorno do investimento?",
      answer: "O retorno (payback) médio é de 2 a 4 anos. Como o sistema dura 25 anos ou mais, você terá mais de 20 anos de lucro puro."
    },
    {
      question: "Quanto posso economizar em 5 ou 10 anos?",
      answer: `A economia é cumulativa. Em 5 anos, você terá economizado aproximadamente ${(500 * 0.9 * 12 * 5).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Em 10 anos, esse valor salta para ${(500 * 0.9 * 12 * 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`
    },
    {
      question: "O que acontece se eu gerar mais energia do que consumo?",
      answer: "O excedente vira créditos energéticos que ficam válidos por 60 meses. Você pode usá-los em meses de menor geração ou abater no consumo de outro imóvel na mesma área de concessão."
    },
    {
      question: "Como funciona a instalação e quanto tempo demora?",
      answer: "É rápida e sem grandes obras. Em média, uma instalação residencial leva de 2 a 3 dias. Nossa equipe cuida de tudo: fixação dos painéis, conexão ao inversor e homologação junto à concessionária."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-solar-card transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-black mb-4 text-white">Dúvidas <span className="text-solar-orange">Frequentes</span></h2>
      </div>
      <div className="container mx-auto px-6 max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-solar-dark rounded-2xl shadow-sm overflow-hidden">
            <button 
              onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} 
              className="w-full p-6 text-left flex justify-between items-center font-bold text-lg text-white hover:bg-white/5 transition"
            >
              {faq.question}
              <i className={`fas fa-chevron-down text-solar-orange transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : 'rotate-0'}`}></i>
            </button>
            <motion.div 
              initial={false}
              animate={{ height: openFaqIndex === index ? "auto" : 0, opacity: openFaqIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                {faq.answer}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
