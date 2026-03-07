import React from 'react';
import { motion } from 'motion/react';

export default function MgsAcademy() {
  const courses = [
    {
      title: "Pacote Profissional Solar",
      subtitle: "(Curso + Ferramentas)",
      description: "A solução completa para quem quer ser mestre no setor.",
      link: "https://pay.hotmart.com/B104278532G",
      cta: "QUERO O PACOTE COMPLETO",
      icon: "fa-graduation-cap",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Máquina de Campo v26.0 Master",
      subtitle: "",
      description: "O aplicativo definitivo para vistorias técnicas de alta precisão.",
      link: "https://go.hotmart.com/S104554304N",
      cta: "ACESSAR FERRAMENTA",
      icon: "fa-cogs",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Formação Projetista Fotovoltaico",
      subtitle: "Completa",
      description: "Do iniciante à homologação. O caminho para se tornar um projetista de elite.",
      link: "https://go.hotmart.com/K104298527J",
      cta: "INICIAR FORMAÇÃO",
      icon: "fa-drafting-compass",
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "Kit Profissional de Dimensionamento",
      subtitle: "Fotovoltaico",
      description: "Pare de perder tempo! Planilhas e métodos de cálculo ultrarrápidos.",
      link: "https://go.hotmart.com/O104313065T",
      cta: "BAIXAR KIT AGORA",
      icon: "fa-bolt",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section id="academy" className="py-24 bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Educação e Ferramentas</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-white">
            MgS <span className="text-solar-orange">ACADEMY</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Formação técnica e ferramentas exclusivas para profissionais que buscam excelência no setor solar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-solar-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/5 flex flex-col"
            >
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              <div className="p-8 flex-grow flex flex-col">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}>
                  <i className={`fas ${course.icon}`}></i>
                </div>
                
                <h3 className="text-xl font-black text-white mb-1 leading-tight">
                  {course.title}
                </h3>
                {course.subtitle && (
                  <span className="text-sm font-bold text-solar-orange uppercase tracking-wide mb-4 block">
                    {course.subtitle}
                  </span>
                )}
                
                <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
                  {course.description}
                </p>

                <a 
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] text-center bg-gradient-to-r ${course.color}`}
                >
                  {course.cta} <i className="fas fa-external-link-alt ml-2 text-xs opacity-70"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 font-medium italic text-lg max-w-3xl mx-auto border-t border-white/10 pt-8">
            "Aprenda com quem já transformou o cenário energético do Cariri. <br className="hidden md:block" />
            <span className="text-solar-orange font-bold">MgS System Solar:</span> Mais que energia, geramos conhecimento."
          </p>
        </div>
      </div>
    </section>
  );
}
