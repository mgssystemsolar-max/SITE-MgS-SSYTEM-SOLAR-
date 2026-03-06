import React from 'react';

export default function Partners() {
  return (
    <section className="py-10 bg-white dark:bg-solar-dark border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-400 dark:text-gray-500 text-sm font-bold uppercase tracking-widest mb-8">Trabalhamos com as melhores marcas mundiais</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {['WEG', 'Canadian Solar', 'Growatt', 'Fronius', 'BYD'].map((brand) => (
            <span key={brand} className="text-xl md:text-2xl font-black text-gray-400 dark:text-gray-600 uppercase hover:text-solar-orange dark:hover:text-solar-orange transition-colors duration-300 cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
