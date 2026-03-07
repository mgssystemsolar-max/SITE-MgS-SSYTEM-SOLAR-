import React, { useState, useRef, useEffect } from 'react';
import MysteryButton from './MysteryButton';
import PortfolioMap from './PortfolioMap';
import { saveProjectsToDB, loadProjectsFromDB } from '../utils/db';

interface PortfolioProps {
  isAdmin: boolean;
}

interface Project {
  img: string;
  title: string;
  loc: string;
}

export default function Portfolio({ isAdmin }: PortfolioProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [toast, setToast] = useState<{ show: boolean, message: string } | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([
    { img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800&fm=webp", title: "Residência Alto Padrão", loc: "Juazeiro do Norte, CE" },
    { img: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?auto=format&fit=crop&q=80&w=800&fm=webp", title: "Indústria Têxtil", loc: "Barbalha, CE" },
    { img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800&fm=webp", title: "Comércio Local", loc: "Crato, CE" },
  ]);

  // Load projects from IndexedDB on mount
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const savedProjects = await loadProjectsFromDB();
        if (savedProjects && savedProjects.length > 0) {
          setProjects(savedProjects);
        }
      } catch (e) {
        console.error("Failed to load saved projects from DB", e);
      }
    };
    loadProjects();
  }, []);

  // Filter projects based on selected city
  const filteredProjects = selectedCity 
    ? projects.filter(p => p.loc.includes(selectedCity))
    : projects;

  // Helper to resize image and convert to Base64
  const processImage = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 600;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.7)); // Compress to 70% quality
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      
      try {
        // Process all files
        const promises = Array.from(files).map(async (file) => {
          const imageUrl = await processImage(file);
          return {
            img: imageUrl,
            title: "Nova Instalação",
            loc: "Cariri, CE"
          };
        });

        const processedProjects = await Promise.all(promises);
        const updatedProjects = [...projects, ...processedProjects];
        setProjects(updatedProjects);
        
        // Auto-save to DB after upload
        await saveProjectsToDB(updatedProjects);
        
        setToast({ show: true, message: `${processedProjects.length} fotos adicionadas e salvas!` });
      } catch (error) {
        console.error("Erro ao processar imagens", error);
        setToast({ show: true, message: "Erro ao processar algumas imagens." });
      } finally {
        setIsUploading(false);
        setTimeout(() => setToast(null), 3000);
      }
    }
  };

  const handleDeleteProject = async (index: number) => {
    if (window.confirm("Tem certeza que deseja excluir este projeto?")) {
      const newProjects = projects.filter((_, i) => i !== index);
      setProjects(newProjects);
      
      // Auto-save to DB after delete
      try {
        await saveProjectsToDB(newProjects);
        setToast({ show: true, message: "Projeto removido com sucesso!" });
      } catch (e) {
        setToast({ show: true, message: "Erro ao salvar alterações." });
      }
      
      setTimeout(() => setToast(null), 3000);
    }
  };

  const handleSaveProjects = async () => {
    try {
      await saveProjectsToDB(projects);
      setToast({ show: true, message: "Galeria salva com sucesso!" });
    } catch (e) {
      console.error(e);
      setToast({ show: true, message: "Erro ao salvar no banco de dados local!" });
    }
    setTimeout(() => setToast(null), 3000);
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
    <section id="projetos" className="py-24 bg-solar-dark text-white transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Nosso Portfólio</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-white">Obras que geram <span className="text-solar-orange underline">valor</span></h2>
        </div>
        
        {/* Interactive Map Filter */}
        <PortfolioMap 
          selectedCity={selectedCity} 
          onSelectCity={setSelectedCity} 
        />
        
        {/* Admin Controls */}
        {isAdmin && (
          <div className="flex justify-end mb-6 gap-4">
             <div className="text-xs text-gray-500 flex items-center">
                <i className="fas fa-info-circle mr-1"></i>
                Dica: Selecione várias fotos de uma vez
             </div>
            <button 
              onClick={handleSaveProjects}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition shadow-lg flex items-center gap-2"
            >
              <i className="fas fa-save"></i> Salvar Galeria
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading='lazy'
                  width="800"
                  height="600"
                  decoding="async"
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
            ))
          ) : (
            <div className="col-span-3 text-center py-12 text-gray-500">
              <i className="fas fa-search text-4xl mb-4 opacity-50"></i>
              <p>Nenhum projeto encontrado nesta cidade.</p>
              <button onClick={() => setSelectedCity(null)} className="text-solar-orange underline mt-2">Ver todos</button>
            </div>
          )}
          
          {/* Upload Card - Only visible to Admin */}
          {isAdmin && (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer border-2 border-dashed border-gray-700 hover:border-solar-orange hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-4"
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                accept="image/*" 
                multiple
                className="hidden" 
              />
              <div className="w-16 h-16 rounded-full bg-white/10 group-hover:bg-solar-orange/10 flex items-center justify-center text-gray-500 group-hover:text-solar-orange transition-colors duration-300">
                {isUploading ? (
                   <i className="fas fa-spinner fa-spin text-2xl"></i>
                ) : (
                   <i className="fas fa-images text-2xl"></i>
                )}
              </div>
              <div className="text-center">
                <h3 className="text-gray-400 font-bold group-hover:text-solar-orange transition-colors">
                  {isUploading ? "Processando..." : "Adicionar Fotos em Massa"}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {isUploading ? "Aguarde..." : "Selecione várias imagens"}
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col items-center gap-6 mt-12">
          <MysteryButton text="Veja a Luz que Inspira Nossas Obras" />
          
          <a href="https://www.instagram.com/marciogoncalvesda176/" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-solar-dark transition">
            Ver Mais Projetos no Instagram
          </a>
        </div>

        {/* Toast Notification */}
        {toast && toast.show && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-3 animate-fade-in-up">
            <i className="fas fa-check-circle text-green-400"></i>
            <span className="font-medium">{toast.message}</span>
          </div>
        )}
      </div>
    </section>
  );
}
