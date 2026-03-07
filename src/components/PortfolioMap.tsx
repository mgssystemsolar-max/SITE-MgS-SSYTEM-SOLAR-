import React from 'react';

interface PortfolioMapProps {
  onSelectCity: (city: string | null) => void;
  selectedCity: string | null;
}

export default function PortfolioMap({ onSelectCity, selectedCity }: PortfolioMapProps) {
  const cities = [
    { name: 'Juazeiro do Norte', top: '40%', left: '55%', id: 'Juazeiro do Norte, CE' },
    { name: 'Crato', top: '45%', left: '35%', id: 'Crato, CE' },
    { name: 'Barbalha', top: '60%', left: '50%', id: 'Barbalha, CE' },
    { name: 'Missão Velha', top: '35%', left: '70%', id: 'Missão Velha, CE' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl border border-white/10">
        <div className="absolute inset-0 opacity-20">
           {/* Abstract Map Background Pattern */}
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.1" />
             <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.1" fill="none" />
           </svg>
        </div>
        
        <div className="relative z-10 text-center mb-8">
          <h3 className="text-white font-bold text-xl"><i className="fas fa-map-marked-alt text-solar-orange mr-2"></i> Mapa de Obras no Cariri</h3>
          <p className="text-gray-400 text-sm">Clique nas cidades para filtrar os projetos</p>
        </div>

        <div className="relative w-full aspect-[16/9] bg-slate-800/50 rounded-xl border border-white/5 backdrop-blur-sm">
          {/* Map Grid Lines */}
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          {cities.map((city) => (
            <button
              key={city.name}
              onClick={() => onSelectCity(selectedCity === city.id ? null : city.id)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 ${selectedCity === city.id ? 'scale-125 z-20' : 'hover:scale-110 z-10'}`}
              style={{ top: city.top, left: city.left }}
            >
              <div className={`relative flex items-center justify-center w-6 h-6 rounded-full ${selectedCity === city.id ? 'bg-solar-orange shadow-[0_0_20px_rgba(255,107,0,0.6)]' : 'bg-white shadow-lg'}`}>
                <div className={`w-2 h-2 rounded-full ${selectedCity === city.id ? 'bg-white' : 'bg-solar-orange'}`}></div>
                {selectedCity === city.id && (
                  <div className="absolute inset-0 rounded-full border-2 border-white animate-ping"></div>
                )}
              </div>
              
              <div className={`absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${selectedCity === city.id ? 'bg-solar-orange text-white' : 'bg-slate-900 text-gray-300 group-hover:bg-white group-hover:text-slate-900'}`}>
                {city.name}
              </div>
            </button>
          ))}
          
          {/* Connecting Lines (Abstract) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            <path d="M55% 40% L35% 45% L50% 60% Z" fill="none" stroke="#FF6B00" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="55%" y1="40%" x2="70%" y2="35%" stroke="#FF6B00" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>
        
        {selectedCity && (
          <div className="text-center mt-6">
            <button 
              onClick={() => onSelectCity(null)}
              className="text-gray-400 hover:text-white text-sm underline decoration-dotted"
            >
              Limpar Filtro
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
