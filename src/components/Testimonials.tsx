import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const testimonials = [
    {
      name: "Carlos Eduardo",
      location: "Juazeiro do Norte, CE",
      quote: "A melhor decisão que tomei para minha casa. A conta de energia caiu de R$ 800 para a taxa mínima. O atendimento da MgS foi impecável do início ao fim.",
      role: "Residencial"
    },
    {
      name: "Ana Paula Souza",
      location: "Crato, CE",
      quote: "Instalei na minha empresa e o retorno foi muito rápido. A equipe técnica é muito qualificada e deixou tudo limpo e organizado. Recomendo demais!",
      role: "Comercial"
    },
    {
      name: "Roberto Mendes",
      location: "Barbalha, CE",
      quote: "Estava com receio da obra, mas foi tudo muito rápido. Em 2 dias estava tudo funcionando. Hoje vejo o sol e só penso na economia que estou fazendo.",
      role: "Residencial"
    },
    {
      name: "Mariana Costa",
      location: "Juazeiro do Norte, CE",
      quote: "Excelente investimento! A equipe me explicou tudo detalhadamente e o pós-venda é sensacional. Minha conta zerou praticamente.",
      role: "Residencial"
    },
    {
      name: "Ricardo Oliveira",
      location: "Crato, CE",
      quote: "Profissionalismo nota 10. O sistema está gerando mais do que o prometido. Muito satisfeito com a MgS System Solar.",
      role: "Comercial"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % (testimonials.length - itemsPerPage + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + (testimonials.length - itemsPerPage + 1)) % (testimonials.length - itemsPerPage + 1));
  };

  return (
    <section className="py-24 bg-solar-dark relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-solar-card to-solar-dark -z-10"></div>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Prova Social</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-white">Quem usa, <span className="text-solar-orange underline decoration-solar-orange/30">recomenda</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Veja o que nossos clientes de Juazeiro, Crato e Barbalha estão dizendo sobre a economia real.</p>
        </div>
        
        <div className="relative">
          {/* Carousel Track */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex -mx-4"
              animate={{ x: `-${currentTestimonial * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.3333%] px-4 flex"
                >
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-solar-card p-8 rounded-3xl shadow-xl border border-white/10 flex flex-col h-full w-full relative group"
                  >
                    <div className="absolute top-6 right-8 text-6xl text-solar-orange/10 font-serif leading-none group-hover:text-solar-orange/20 transition-colors">"</div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i key={star} className="fas fa-star text-solar-orange text-sm"></i>
                        ))}
                      </div>
                      <p className="text-gray-300 italic mb-6 relative z-10 leading-relaxed">"{testimonial.quote}"</p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-xs text-gray-400 uppercase tracking-wider flex items-center gap-1">
                          <i className="fas fa-map-marker-alt text-solar-orange"></i> {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center mt-12 gap-6">
            <div className="flex gap-2">
              {Array.from({ length: testimonials.length - itemsPerPage + 1 }).map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentTestimonial === i ? 'bg-solar-orange w-8' : 'bg-gray-200 w-2 hover:bg-gray-300'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={prevTestimonial} 
                className="w-12 h-12 rounded-full bg-solar-card border border-white/10 shadow-lg flex items-center justify-center text-white hover:bg-solar-orange hover:text-white transition group"
                aria-label="Previous testimonial"
              >
                <i className="fas fa-chevron-left group-hover:-translate-x-1 transition-transform"></i>
              </button>
              <button 
                onClick={nextTestimonial} 
                className="w-12 h-12 rounded-full bg-solar-card border border-white/10 shadow-lg flex items-center justify-center text-white hover:bg-solar-orange hover:text-white transition group"
                aria-label="Next testimonial"
              >
                <i className="fas fa-chevron-right group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
