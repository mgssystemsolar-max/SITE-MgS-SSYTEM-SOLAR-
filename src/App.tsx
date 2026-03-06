/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [contaMensal, setContaMensal] = useState(500);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [projects, setProjects] = useState([
    { img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800", title: "Residência Alto Padrão", loc: "Juazeiro do Norte, CE" },
    { img: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?auto=format&fit=crop&q=80&w=800", title: "Indústria Têxtil", loc: "Barbalha, CE" },
    { img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800", title: "Comércio Local", loc: "Crato, CE" },
  ]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const title = prompt("Digite o nome do projeto:") || "Novo Projeto";
      const loc = prompt("Digite a localização:") || "Cariri, CE";
      
      setProjects([...projects, { img: imageUrl, title, loc }]);
    }
  };

  const testimonials = [
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
    },
    {
      name: "Mariana Costa",
      location: "Crato, CE",
      quote: "Excelente investimento! A equipe me explicou tudo detalhadamente e o pós-venda é sensacional. Minha conta zerou praticamente.",
      role: "Residencial"
    },
    {
      name: "Ricardo Oliveira",
      location: "Caucaia, CE",
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
      answer: `A economia é cumulativa. Em 5 anos, você terá economizado aproximadamente ${(contaMensal * 0.9 * 12 * 5).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Em 10 anos, esse valor salta para ${(contaMensal * 0.9 * 12 * 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`
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
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-gray-900 italic">
            MgS <span className="text-solar-orange uppercase">System Solar</span>
          </div>
          <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase tracking-wider">
            <a href="#home" className="hover:text-solar-orange transition">Início</a>
            <a href="#calculadora" className="hover:text-solar-orange transition">Simulador</a>
            <a href="#faq" className="hover:text-solar-orange transition">Dúvidas</a>
          </div>
          <a href="https://wa.me/message/24V75JFH4PNMB1" target="_blank" rel="noopener noreferrer" className="bg-solar-orange text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition">Orçamento</a>
        </div>
      </nav>

      <section id="home" className="bg-solar-dark text-white pt-36 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
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
              <a href="https://wa.me/message/24V75JFH4PNMB1" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-solar-orange transition flex items-center justify-center gap-2">
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

      {/* Partner Logos Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">Trabalhamos com as melhores marcas mundiais</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['WEG', 'Canadian Solar', 'Growatt', 'Fronius', 'BYD'].map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-black text-gray-800 uppercase">{brand}</span>
            ))}
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
                  <div className="flex items-center gap-2 group relative cursor-help">
                    <label className="text-white font-bold text-sm md:text-base">Valor da sua conta mensal:</label>
                    <div className="w-5 h-5 rounded-full border border-gray-500 text-gray-400 flex items-center justify-center text-xs font-serif italic hover:border-solar-orange hover:text-solar-orange transition">i</div>
                    <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none z-20 shadow-xl border border-gray-700">
                      Este valor representa sua média mensal atual de gastos com energia elétrica. Use o slider para ajustar.
                      <div className="absolute top-full left-4 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
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
              <div className="flex items-center justify-center gap-2 mb-2 group relative cursor-help">
                <p className="text-gray-400 uppercase text-xs font-bold tracking-widest">Economia em 25 Anos</p>
                <div className="w-4 h-4 rounded-full border border-gray-600 text-gray-500 flex items-center justify-center text-[10px] font-serif italic hover:border-solar-orange hover:text-solar-orange transition">i</div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none z-20 shadow-xl border border-gray-700 text-left">
                  Estimativa baseada na inflação energética média e eficiência do sistema ao longo de 25 anos. O retorno real pode variar.
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
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
                href="https://wa.me/message/24V75JFH4PNMB1"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 text-white font-bold py-3 lg:py-4 px-4 rounded-xl lg:rounded-2xl hover:bg-green-600 transition shadow-lg text-xs sm:text-sm lg:text-base uppercase tracking-wide"
              >
                Receber Meu Projeto Grátis
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Warranties Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "fa-certificate", title: "Certificação NR10 e NR35", desc: "Equipe técnica qualificada e segura." },
              { icon: "fa-shield-alt", title: "25 Anos de Garantia", desc: "Performance garantida pelos fabricantes." },
              { icon: "fa-hard-hat", title: "Instalação Premium", desc: "Acabamento impecável e sem sujeira." },
              { icon: "fa-bolt", title: "Homologação Rápida", desc: "Cuidamos de toda a burocracia." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center group">
                <div className="w-16 h-16 bg-solar-orange/10 text-solar-orange rounded-full flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-solar-orange group-hover:text-white transition">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="font-bold text-lg mb-2 text-solar-dark">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Nosso Portfólio</span>
            <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-solar-dark">Obras que geram <span className="text-solar-orange underline">valor</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                    <h3 className="text-white font-bold text-xl mb-1">{project.title}</h3>
                    <p className="text-solar-orange text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                      <i className="fas fa-map-marker-alt"></i> {project.loc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Upload Card */}
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer border-2 border-dashed border-gray-300 hover:border-solar-orange hover:bg-orange-50 transition-all duration-300 flex flex-col items-center justify-center gap-4"
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                accept="image/*" 
                className="hidden" 
              />
              <div className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-solar-orange/10 flex items-center justify-center text-gray-400 group-hover:text-solar-orange transition-colors duration-300">
                <i className="fas fa-plus text-2xl"></i>
              </div>
              <div className="text-center">
                <h3 className="text-gray-500 font-bold group-hover:text-solar-orange transition-colors">Adicionar Obra</h3>
                <p className="text-xs text-gray-400 mt-1">Carregar imagem do PC</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="https://www.instagram.com/marciogoncalvesda176/" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-solar-dark text-solar-dark px-8 py-3 rounded-full font-bold hover:bg-solar-dark hover:text-white transition">
              Ver Mais Projetos no Instagram
            </a>
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
                      className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col h-full w-full relative group"
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
                  className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center text-solar-dark hover:bg-solar-orange hover:text-white transition group"
                  aria-label="Previous testimonial"
                >
                  <i className="fas fa-chevron-left group-hover:-translate-x-1 transition-transform"></i>
                </button>
                <button 
                  onClick={nextTestimonial} 
                  className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center text-solar-dark hover:bg-solar-orange hover:text-white transition group"
                  aria-label="Next testimonial"
                >
                  <i className="fas fa-chevron-right group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-solar-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Nossa Expertise</span>
            <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6">O que faz um <span className="text-solar-orange underline decoration-white/20">Integrador Solar</span>?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Muito mais que instalar placas, a MgS System Solar cuida de todo o ciclo do seu projeto para garantir eficiência e segurança.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={index} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition group">
                <div className="w-14 h-14 bg-solar-orange rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-solar-orange/20 group-hover:scale-110 transition">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
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

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Pós-Venda Premium</span>
            <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-solar-dark">Suporte <span className="text-solar-orange underline">Contínuo</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Nossa relação não termina na instalação. Garantimos a máxima eficiência do seu sistema por anos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-6">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="font-bold text-xl mb-3 text-solar-dark">Monitoramento via App</h3>
              <p className="text-gray-500 text-sm">Acompanhe a geração de energia em tempo real pelo seu celular, de onde estiver.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-xl mb-6">
                <i className="fas fa-broom"></i>
              </div>
              <h3 className="font-bold text-xl mb-3 text-solar-dark">Limpeza Especializada</h3>
              <p className="text-gray-500 text-sm">Serviço de limpeza periódica dos painéis para garantir que a sujeira não afete a geração.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-xl mb-6">
                <i className="fas fa-wrench"></i>
              </div>
              <h3 className="font-bold text-xl mb-3 text-solar-dark">Manutenção Preventiva</h3>
              <p className="text-gray-500 text-sm">Revisões técnicas agendadas para assegurar a longevidade e segurança de todo o sistema.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-24 bg-solar-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-solar-orange/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-black text-solar-dark mb-4">Solicite seu <span className="text-solar-orange">Orçamento Gratuito</span></h2>
              <p className="text-gray-500">Preencha os dados abaixo e receba uma proposta personalizada para sua casa ou empresa.</p>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Nome Completo</label>
                  <input type="text" placeholder="Seu nome" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange focus:ring-1 focus:ring-solar-orange transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">WhatsApp</label>
                  <input type="tel" placeholder="(88) 99999-9999" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange focus:ring-1 focus:ring-solar-orange transition" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Cidade/UF</label>
                  <input type="text" placeholder="Ex: Juazeiro do Norte, CE" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange focus:ring-1 focus:ring-solar-orange transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Concessionária</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange focus:ring-1 focus:ring-solar-orange transition text-gray-600">
                    <option>Selecione...</option>
                    <option>Enel</option>
                    <option>Outra</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Valor Médio da Conta de Luz (R$)</label>
                <input type="number" placeholder="Ex: 500,00" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange focus:ring-1 focus:ring-solar-orange transition" />
              </div>
              <button className="w-full bg-solar-orange text-white font-bold text-lg py-4 rounded-xl hover:bg-orange-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Enviar Solicitação
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
                <i className="fas fa-lock mr-1"></i> Seus dados estão seguros. Entraremos em contato em até 24h.
              </p>
            </form>
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
              <a href="https://www.instagram.com/marciogoncalvesda176/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/profile.php?id=61577300515359&locale=pt_BR" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-facebook"></i></a>
              <a href="https://www.youtube.com/channel/UCQGzIxvn_I1uqved_psc9oQ" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-youtube"></i></a>
              <a href="https://wa.me/message/24V75JFH4PNMB1" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-solar-orange pl-4 uppercase">Endereço</h4>
            <p className="text-gray-400 text-sm">Juazeiro do Norte, CE<br/>Atendimento em toda a região do Cariri (Crato, Barbalha e arredores). Consulte nossa disponibilidade.</p>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          © 2026 MgS System Solar - Todos os direitos reservados.
        </div>
      </footer>

      <a href="https://wa.me/message/24V75JFH4PNMB1" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 bg-[#25d366] text-white p-4 rounded-full shadow-2xl z-50 text-3xl hover:scale-110 transition">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
