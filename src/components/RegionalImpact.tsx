import React from 'react';

export default function RegionalImpact() {
  const cities = [
    "Piquet Carneiro",
    "Santana do Cariri",
    "Barbalha",
    "Icó",
    "Juazeiro do Norte",
    "Jaguaretama",
    "Iguatu",
    "Várzea Alegre"
  ];

  return (
    <section className="py-20 bg-solar-card transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Alcance Regional</span>
            <h2 className="text-3xl lg:text-4xl font-black mt-2 mb-6 text-white">
              Nosso Impacto nas Cidades da <span className="text-solar-orange underline decoration-solar-orange/30">Região do Cariri</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Seguindo todas as normas, nossos projetos abrangem residencial, comercial e rural. Além disso, são realizados para multiplicar a eficiência e diminuir os gastos.
            </p>
            
            <div className="bg-solar-dark p-6 rounded-2xl shadow-lg border-l-4 border-solar-orange mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-solar-orange/10 p-3 rounded-full text-solar-orange shrink-0">
                  <i className="fas fa-certificate text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">Qualidade Comprovada</h3>
                  <p className="text-gray-400 font-medium">
                    A primeira empresa do Cariri com selo de qualidade <span className="text-solar-orange font-bold">CERTIFICAÇÃO ABSOLAR</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-solar-dark rounded-3xl p-8 shadow-xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-solar-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-xl font-bold mb-6 text-center text-white flex items-center justify-center gap-2">
                <i className="fas fa-map-marked-alt text-solar-orange"></i> Cidades Atendidas
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {cities.map((city, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-solar-orange/20 transition-colors group cursor-default">
                    <i className="fas fa-check-circle text-green-500 group-hover:scale-110 transition-transform"></i>
                    <span className="font-medium text-gray-200">{city}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 italic">
                  E expandindo para mais localidades...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
