import React from 'react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Novas regras da Energia Solar em 2026: O que muda?",
      category: "Legislação",
      date: "05 Mar 2026",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
      excerpt: "Entenda como a Lei 14.300 impacta os novos projetos e porque ainda vale muito a pena investir em energia solar no Brasil."
    },
    {
      id: 2,
      title: "Manutenção Preventiva: Garantindo a eficiência do seu sistema",
      category: "Dicas",
      date: "28 Fev 2026",
      image: "https://images.unsplash.com/photo-1626074961596-e9949709d8f1?auto=format&fit=crop&q=80&w=800",
      excerpt: "A sujeira pode reduzir sua geração em até 25%. Saiba qual a frequência ideal de limpeza para a região do Cariri."
    },
    {
      id: 3,
      title: "Energia Solar no Cariri: Potencial e Vantagens",
      category: "Regional",
      date: "15 Fev 2026",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
      excerpt: "Nossa região possui um dos maiores índices de irradiação solar do mundo. Descubra como transformar esse calor em dinheiro no bolso."
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50 dark:bg-solar-card transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Blog & Notícias</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-solar-dark dark:text-white">
            Fique por dentro do <span className="text-solar-orange underline decoration-solar-orange/30">Mundo Solar</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Informação de qualidade para você economizar mais e entender tudo sobre o seu investimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-solar-dark rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-white/5">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-solar-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 block">{post.date}</span>
                <h3 className="text-xl font-bold text-solar-dark dark:text-white mb-3 group-hover:text-solar-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-solar-orange font-bold text-sm uppercase tracking-wider hover:gap-2 transition-all">
                  Ler Matéria <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-block border-2 border-solar-dark dark:border-white text-solar-dark dark:text-white px-8 py-3 rounded-full font-bold hover:bg-solar-dark hover:text-white dark:hover:bg-white dark:hover:text-solar-dark transition">
            Ver Todas as Notícias
          </a>
        </div>
      </div>
    </section>
  );
}
