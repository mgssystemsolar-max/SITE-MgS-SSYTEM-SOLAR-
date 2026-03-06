/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [contaMensal, setContaMensal] = useState(500);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
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
      answer: `A economia é cumulativa. Em 5 anos, você terá economizado aproximadamente ${(contaMensal * 0.9 * 12 * 5).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Em 10 anos, esse valor salta para ${(contaMensal * 0.9 * 12 * 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`
    },
    {
      question: "O que acontece se eu gerar mais energia do que consumo?",
      answer: "O excedente vira créditos energéticos que ficam válidos por 60 meses. Você pode usá-los em meses de menor geração ou abater no consumo de outro imóvel na mesma área de concessão."
    },
    {
      question: "Como funciona a instalação?",
      answer: "É rápida e sem grandes obras. Nossa equipe técnica instala as estruturas e painéis no telhado, conecta ao inversor e cuida de toda a homologação junto à concessionária de energia."
    }
  ];

  const economia25Anos = (contaMensal * 0.9 * 12 * 25).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  const valorContaFormatado = contaMensal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-solar-orange selection:text-white">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-gray-900 italic">
            MgS <span className="text-solar-orange uppercase">System Solar</span>
          </div>
          <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase tracking-wider">
            <a href="#home" className="hover:text-solar-orange transition">Início</a>
            <a href="#calculadora" className="hover:text-solar-orange transition">Simulador</a>
            <a href="#faq" className="hover:text-solar-orange transition">Dúvidas</a>
          </div>
          <a href="https://wa.me/5588999999999" className="bg-solar-orange text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition">Orçamento</a>
        </div>
      </nav>

      <section id="home" className="bg-solar-dark text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Energia Inteligente</span>
            <h1 className="text-4xl lg:text-6xl font-extrabold mt-4 mb-6 leading-tight">
              Transforme o Sol em <br /><span className="text-solar-orange underline decoration-white/20">Economia Real</span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
              Reduza sua conta de luz em até 95%. Projetos personalizados da MgS System Solar com tecnologia de ponta e garantia de 25 anos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#calculadora" className="bg-solar-orange px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition shadow-xl text-center">SIMULAR ECONOMIA</a>
              <a href="https://wa.me/5588999999999" className="border-2 border-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-solar-orange transition flex items-center justify-center gap-2">
                <i className="fab fa-whatsapp text-green-500"></i> Falar com Especialista
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-16 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800" 
              className="rounded-3xl shadow-2xl border-4 border-white/5 w-full" 
              alt="Painéis Solares MgS" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <section id="calculadora" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black mb-4">Quanto você vai <span className="text-solar-orange underline">poupar</span>?</h2>
          <p className="text-gray-500">Arraste o simulador abaixo e veja o poder do sol no seu bolso.</p>
        </div>
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="bg-solar-dark rounded-3xl lg:rounded-[3rem] p-4 sm:p-6 md:p-10 lg:p-16 flex flex-col lg:flex-row gap-6 lg:gap-12 items-center border-b-4 lg:border-b-8 border-solar-orange shadow-2xl">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="w-full lg:w-1/2 bg-white/5 p-5 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/10 space-y-6 lg:space-y-8"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-white font-bold text-sm md:text-base">Valor da sua conta mensal:</label>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-solar-orange break-words tracking-tight">
                  {valorContaFormatado}
                </div>
                <div className="relative w-full pt-2">
                  <input 
                    type="range" 
                    min="200" 
                    max="10000" 
                    step="50" 
                    value={contaMensal}
                    onChange={(e) => setContaMensal(Number(e.target.value))}
                    className="w-full range-lg touch-none"
                    aria-label="Definir valor da conta mensal"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-3 font-medium font-mono">
                    <span>R$ 200</span>
                    <span>R$ 10.000</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="w-full lg:w-1/2 bg-white/5 p-5 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl text-center border border-white/10"
            >
              <p className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-2">Economia em 25 Anos</p>
              <motion.div
                key={contaMensal}
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 break-words tracking-tight"
              >
                {economia25Anos}
              </motion.div>
              <a 
                href={`https://wa.me/5588999999999?text=Quero economizar R$ ${contaMensal} por mês!`} 
                className="block bg-green-500 text-white font-bold py-3 lg:py-4 px-4 rounded-xl lg:rounded-2xl hover:bg-green-600 transition shadow-lg text-xs sm:text-sm lg:text-base uppercase tracking-wide"
              >
                Receber Meu Projeto Grátis
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white -z-10"></div>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Depoimentos</span>
            <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-solar-dark">Quem usa, <span className="text-solar-orange underline decoration-solar-orange/30">recomenda</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Veja o que nossos clientes estão dizendo sobre a economia e o atendimento da MgS System Solar.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Eduardo",
                location: "Fortaleza, CE",
                quote: "A melhor decisão que tomei para minha casa. A conta de energia caiu de R$ 800 para a taxa mínima. O atendimento da MgS foi impecável do início ao fim.",
                role: "Residencial"
              },
              {
                name: "Ana Paula Souza",
                location: "Sobral, CE",
                quote: "Instalei na minha empresa e o retorno foi muito rápido. A equipe técnica é muito qualificada e deixou tudo limpo e organizado. Recomendo demais!",
                role: "Comercial"
              },
              {
                name: "Roberto Mendes",
                location: "Juazeiro do Norte, CE",
                quote: "Estava com receio da obra, mas foi tudo muito rápido. Em 2 dias estava tudo funcionando. Hoje vejo o sol e só penso na economia que estou fazendo.",
                role: "Residencial"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col h-full relative group"
              >
                <div className="absolute top-6 right-8 text-6xl text-solar-orange/10 font-serif leading-none group-hover:text-solar-orange/20 transition-colors">"</div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="fas fa-star text-solar-orange text-sm"></i>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6 relative z-10 leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 bg-solar-dark rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-solar-dark">{testimonial.name}</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black mb-4 text-solar-dark">Dúvidas <span className="text-solar-orange">Frequentes</span></h2>
        </div>
        <div className="container mx-auto px-6 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} 
                className="w-full p-6 text-left flex justify-between items-center font-bold text-lg text-solar-dark hover:bg-gray-50 transition"
              >
                {faq.question}
                <i className={`fas fa-chevron-down text-solar-orange transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}></i>
              </button>
              <motion.div 
                initial={false}
                animate={{ height: openFaqIndex === index ? "auto" : 0, opacity: openFaqIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-solar-dark text-white pt-20 pb-10">
        <div className="container mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-black italic mb-6 uppercase tracking-tighter">MgS <span className="text-solar-orange">System Solar</span></h3>
            <p className="text-gray-400 text-sm">Especialistas em energia limpa e redução de custos. Atendemos residências e empresas com excelência.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-solar-orange pl-4 uppercase">Redes Sociais</h4>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl text-solar-orange">
              <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i></a>
              <a href="https://wa.me/5588999999999" className="hover:text-white"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-solar-orange pl-4 uppercase">Endereço</h4>
            <p className="text-gray-400 text-sm">Atendimento em toda a região de [Sua Cidade/UF]. Consulte nossa disponibilidade para instalação.</p>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          © 2026 MgS System Solar - Todos os direitos reservados.
        </div>
      </footer>

      <a href="https://wa.me/5588999999999" className="fixed bottom-8 right-8 bg-[#25d366] text-white p-4 rounded-full shadow-2xl z-50 text-3xl hover:scale-110 transition">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
