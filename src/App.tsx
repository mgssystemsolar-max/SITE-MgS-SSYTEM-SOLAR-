/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [contaMensal, setContaMensal] = useState(500);
  const [openFaq1, setOpenFaq1] = useState(false);
  const [openFaq2, setOpenFaq2] = useState(false);

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
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-solar-dark rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center border-b-8 border-solar-orange shadow-2xl">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="w-full lg:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/10 space-y-8"
            >
              <div className="space-y-4">
                <label className="text-white font-bold block">Valor da sua conta mensal:</label>
                <div className="text-4xl font-black text-solar-orange">{valorContaFormatado}</div>
                <input 
                  type="range" 
                  min="200" 
                  max="10000" 
                  step="50" 
                  value={contaMensal}
                  onChange={(e) => setContaMensal(Number(e.target.value))}
                  className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-solar-orange" 
                />
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="w-full lg:w-1/2 bg-white/5 p-8 rounded-3xl text-center border border-white/10"
            >
              <p className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-2">Economia em 25 Anos</p>
              <motion.div
                key={contaMensal}
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="text-4xl lg:text-5xl font-black text-white mb-6"
              >
                {economia25Anos}
              </motion.div>
              <a 
                href={`https://wa.me/5588999999999?text=Quero economizar R$ ${contaMensal} por mês!`} 
                className="block bg-green-500 text-white font-bold py-4 rounded-2xl hover:bg-green-600 transition shadow-lg"
              >
                RECEBER MEU PROJETO GRÁTIS
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black mb-4 text-solar-dark">Dúvidas <span className="text-solar-orange">Frequentes</span></h2>
        </div>
        <div className="container mx-auto px-6 max-w-3xl space-y-4">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button 
              onClick={() => setOpenFaq1(!openFaq1)} 
              className="w-full p-6 text-left flex justify-between items-center font-bold text-lg text-solar-dark"
            >
              O sistema funciona em dias de chuva?
              <i className={`fas fa-chevron-down text-solar-orange transition ${openFaq1 ? 'rotate-180' : ''}`}></i>
            </button>
            {openFaq1 && (
              <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                Sim! O sistema funciona com a luz do sol (irradiação), não com o calor. Mesmo nublado ou chovendo, há geração, apenas em menor intensidade.
              </div>
            )}
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button 
              onClick={() => setOpenFaq2(!openFaq2)} 
              className="w-full p-6 text-left flex justify-between items-center font-bold text-lg text-solar-dark"
            >
              Qual a garantia dos equipamentos?
              <i className={`fas fa-chevron-down text-solar-orange transition ${openFaq2 ? 'rotate-180' : ''}`}></i>
            </button>
            {openFaq2 && (
              <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                Trabalhamos com os melhores fabricantes do mercado. As placas possuem garantia de performance de até 25 anos.
              </div>
            )}
          </div>
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
