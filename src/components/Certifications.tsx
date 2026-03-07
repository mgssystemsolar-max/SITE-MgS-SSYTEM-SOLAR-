import React from 'react';

export default function Certifications() {
  return (
    <section className="py-20 bg-solar-card transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "fa-certificate", title: "Certificação NR10 e NR35", desc: "Equipe técnica qualificada e segura." },
            { icon: "fa-shield-alt", title: "25 Anos de Garantia", desc: "Performance garantida pelos fabricantes." },
            { icon: "fa-hard-hat", title: "Instalação Premium", desc: "Acabamento impecável e sem sujeira." },
            { icon: "fa-bolt", title: "Homologação Rápida", desc: "Cuidamos de toda a burocracia." }
          ].map((item, i) => (
            <div key={i} className="bg-solar-dark p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center group">
              <div className="w-16 h-16 bg-solar-orange/10 text-solar-orange rounded-full flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-solar-orange group-hover:text-white transition">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
