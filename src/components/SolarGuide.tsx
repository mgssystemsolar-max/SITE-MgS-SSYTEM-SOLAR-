import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function SolarGuide() {
  const [selectedGuide, setSelectedGuide] = useState<number | null>(null);

  const guides = [
    {
      id: 1,
      title: "COMO ESCOLHER INSTALADOR?",
      icon: "fa-user-hard-hat",
      content: [
        "Verifique se a empresa possui engenheiro responsável (CREA).",
        "Exija certificações de segurança obrigatórias (NR10 e NR35).",
        "Peça para ver o portfólio de obras já realizadas na sua região.",
        "Busque referências e avaliações de clientes antigos.",
        "A MgS System Solar possui selo de qualidade ABSOLAR e equipe própria certificada."
      ]
    },
    {
      id: 2,
      title: "COMO ESCOLHER PLACAS?",
      icon: "fa-solar-panel",
      content: [
        "Priorize marcas 'Tier 1' (líderes globais em qualidade e bancabilidade).",
        "Verifique a eficiência do módulo (hoje, acima de 21% é o ideal).",
        "Exija garantia de performance linear de pelo menos 25 anos.",
        "Prefira tecnologias modernas como Half-Cell e PERC, que rendem mais em dias nublados."
      ]
    },
    {
      id: 3,
      title: "COMO ESCOLHER INVERSORES?",
      icon: "fa-microchip",
      content: [
        "O inversor é o 'cérebro' do sistema. Não economize aqui.",
        "Verifique se possui Wi-Fi nativo e aplicativo de monitoramento em português.",
        "Confira a garantia (padrão de 5 a 10 anos, expansível).",
        "Certifique-se que a marca tem assistência técnica e suporte no Brasil (ex: Growatt, Deye, WEG)."
      ]
    },
    {
      id: 4,
      title: "COMO MANTER UM SISTEMA?",
      icon: "fa-tools",
      content: [
        "Limpeza: A sujeira pode reduzir a geração em até 20%. Limpe a cada 6 meses ou 1 ano.",
        "Monitoramento: Acompanhe a geração diária pelo aplicativo para identificar falhas.",
        "Inspeção: Contrate uma revisão elétrica profissional a cada 2 anos.",
        "Nunca suba no telhado sem equipamentos de segurança adequados."
      ]
    }
  ];

  return (
    <section id="comece-aqui" className="py-24 bg-white dark:bg-solar-dark transition-colors duration-300 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Guia do Iniciante</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-solar-dark dark:text-white uppercase leading-tight">
            Novo em Energia Solar? <br />
            <span className="text-solar-orange underline decoration-solar-orange/30">Comece Aqui.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide) => (
            <motion.div 
              key={guide.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedGuide(guide.id)}
              className="cursor-pointer bg-gray-50 dark:bg-solar-card p-8 rounded-3xl border-2 border-transparent hover:border-solar-orange transition-all duration-300 shadow-lg flex flex-col items-center text-center h-full justify-center group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-gray-500 select-none">
                0{guide.id}
              </div>
              
              <div className="w-20 h-20 bg-solar-orange/10 rounded-full flex items-center justify-center text-3xl text-solar-orange mb-6 group-hover:bg-solar-orange group-hover:text-white transition-colors duration-300 relative z-10">
                <i className={`fas ${guide.icon}`}></i>
              </div>
              
              <h3 className="text-lg font-black text-solar-dark dark:text-white uppercase leading-tight relative z-10">
                {guide.title}
              </h3>
              
              <p className="mt-6 text-xs text-solar-orange font-bold uppercase tracking-wider flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                Ver Detalhes <i className="fas fa-arrow-right"></i>
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Environment */}
      <AnimatePresence>
        {selectedGuide !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedGuide(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-solar-card w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedGuide(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-500 dark:text-white hover:bg-red-500 hover:text-white transition-colors z-10"
              >
                <i className="fas fa-times"></i>
              </button>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-100 dark:border-white/10 pb-6">
                   <div className="w-16 h-16 bg-solar-orange rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg shadow-solar-orange/30 shrink-0">
                    <i className={`fas ${guides.find(g => g.id === selectedGuide)?.icon}`}></i>
                  </div>
                  <div>
                    <span className="text-solar-orange font-bold tracking-widest text-sm uppercase">Passo 0{selectedGuide}</span>
                    <h3 className="text-xl md:text-2xl font-black text-solar-dark dark:text-white uppercase leading-none mt-1">
                      {guides.find(g => g.id === selectedGuide)?.title}
                    </h3>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl mb-8">
                  <ul className="space-y-4">
                    {guides.find(g => g.id === selectedGuide)?.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                        <i className="fas fa-check-circle text-green-500 mt-1 shrink-0 text-lg"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end">
                   <a 
                    href="#contact" 
                    onClick={() => setSelectedGuide(null)}
                    className="w-full md:w-auto text-center bg-solar-dark dark:bg-white text-white dark:text-solar-dark px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
                   >
                     Falar com um Especialista <i className="fas fa-comment-dots"></i>
                   </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
