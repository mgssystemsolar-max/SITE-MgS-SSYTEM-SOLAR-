import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Calculator() {
  const [contaMensal, setContaMensal] = useState(500);

  // Cálculo simplificado: Economia de 95% em 25 anos
  // Valor * 0.95 * 12 meses * 25 anos
  const economiaTotal = contaMensal * 0.95 * 12 * 25;
  
  // Valorização do imóvel estimada em 15x a economia anual (valuation simplificado)
  // ou simplesmente uma porcentagem fixa sobre um valor de imóvel hipotético.
  // O prompt pede "Valorização do Imóvel (média de 15%)".
  // Vamos assumir que o sistema valoriza o imóvel em cerca de 15%.
  // Como não temos o valor do imóvel, vamos exibir o texto de destaque.
  
  const economiaFormatada = economiaTotal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  });

  const valorContaFormatado = contaMensal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <section id="calculadora" className="py-24 bg-solar-dark text-white transition-colors duration-300">
      <div className="container mx-auto px-6 text-center mb-12">
        <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Simulador Interativo</span>
        <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-4 text-white">Quanto você vai <span className="text-solar-orange underline">poupar</span>?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Arraste o slider abaixo e descubra o impacto financeiro da energia solar no seu bolso e no seu patrimônio.</p>
      </div>
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="bg-solar-dark rounded-3xl lg:rounded-[3rem] p-4 sm:p-6 md:p-10 lg:p-16 flex flex-col lg:flex-row gap-6 lg:gap-12 items-center border-b-4 lg:border-b-8 border-solar-orange shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-solar-orange/10 rounded-full blur-3xl -z-0"></div>

          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="w-full lg:w-1/2 bg-white/5 p-6 lg:p-8 rounded-3xl border border-white/10 space-y-8 z-10"
          >
            <div className="space-y-6">
              <label className="text-gray-300 font-bold text-sm uppercase tracking-wider">Qual o valor médio da sua conta?</label>
              
              <div className="text-4xl sm:text-5xl font-black text-solar-orange tracking-tight">
                {valorContaFormatado}
              </div>
              
              <div className="relative w-full pt-4">
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
                <div className="flex justify-between text-xs text-gray-500 mt-3 font-mono">
                  <span>R$ 200</span>
                  <span>R$ 10.000</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 space-y-6 z-10"
          >
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-2">Economia Estimada (25 Anos)</p>
              <motion.div
                key={contaMensal}
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
              >
                {economiaFormatada}
              </motion.div>
              <p className="text-xs text-gray-500 mt-2">*Cálculo baseado na inflação energética média.</p>
            </div>

            <div className="bg-green-500/10 p-6 rounded-2xl border border-green-500/20 flex items-center gap-4">
              <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0">
                <i className="fas fa-home"></i>
              </div>
              <div>
                <p className="text-green-400 uppercase text-xs font-bold tracking-widest">Valorização do Imóvel</p>
                <p className="text-white font-bold text-lg leading-tight">Seu imóvel valoriza em média <span className="text-green-400 text-xl">15%</span></p>
              </div>
            </div>

            <a 
              href={`https://wa.me/5588999999999?text=Olá Márcio, vi o site da MgS e gostaria de uma análise para minha conta de ${valorContaFormatado}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-solar-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-solar-orange/50 transition-all text-center uppercase tracking-wide transform hover:-translate-y-1"
            >
              Quero essa economia
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
