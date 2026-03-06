import React, { useState, useRef } from 'react';

interface PortfolioProps {
  isAdmin: boolean;
}

export default function Portfolio({ isAdmin }: PortfolioProps) {
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

  const handleDeleteProject = (index: number) => {
    if (window.confirm("Tem certeza que deseja excluir este projeto?")) {
      const newProjects = projects.filter((_, i) => i !== index);
      setProjects(newProjects);
    }
  };

  const handleShareProject = (project: { title: string, loc: string }) => {
    const text = `Confira este projeto da MgS System Solar: ${project.title} em ${project.loc}. Economia e qualidade!`;
    if (navigator.share) {
      navigator.share({
        title: 'MgS System Solar',
        text: text,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      const encodedText = encodeURIComponent(`${text} ${window.location.href}`);
      window.open(`https://wa.me/?text=${encodedText}`, '_blank');
    }
  };

  return (
    <section id="projetos" className="py-24 bg-white dark:bg-solar-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Nosso Portfólio</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-solar-dark dark:text-white">Obras que geram <span className="text-solar-orange underline">valor</span></h2>
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
              
              <button 
                onClick={(e) => { e.stopPropagation(); handleShareProject(project); }}
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-solar-orange hover:border-solar-orange transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0"
                title="Compartilhar"
              >
                <i className="fas fa-share-alt"></i>
              </button>

              {isAdmin && (
                <button 
                  onClick={(e) => { e.stopPropagation(); handleDeleteProject(i); }}
                  className="absolute top-4 left-4 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition z-20"
                  title="Excluir Projeto"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              )}
            </div>
          ))}
          
          {/* Upload Card - Only visible to Admin */}
          {isAdmin && (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-solar-orange hover:bg-orange-50 dark:hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-4"
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                accept="image/*" 
                className="hidden" 
              />
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-white/10 group-hover:bg-solar-orange/10 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:text-solar-orange transition-colors duration-300">
                <i className="fas fa-plus text-2xl"></i>
              </div>
              <div className="text-center">
                <h3 className="text-gray-500 dark:text-gray-400 font-bold group-hover:text-solar-orange transition-colors">Adicionar Obra</h3>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Carregar imagem do PC</p>
              </div>
            </div>
          )}
        </div>
        <div className="text-center mt-12">
          <a href="https://www.instagram.com/marciogoncalvesda176/" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-solar-dark dark:border-white text-solar-dark dark:text-white px-8 py-3 rounded-full font-bold hover:bg-solar-dark hover:text-white dark:hover:bg-white dark:hover:text-solar-dark transition">
            Ver Mais Projetos no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
