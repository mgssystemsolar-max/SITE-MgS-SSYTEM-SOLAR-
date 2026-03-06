import React, { useState } from 'react';

export default function ProjectStatus() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.length < 5) {
      setResult("Por favor, digite um número de contrato válido (ex: MGS-1234).");
      return;
    }
    // Simulação de busca
    setResult(`Status do Contrato ${search.toUpperCase()}: Em Homologação na Enel. Previsão: 5 dias úteis.`);
  };

  return (
    <section className="py-16 bg-solar-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-solar-orange/20 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-2xl lg:text-3xl font-black mb-2">Já é cliente MgS?</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">Acompanhe o status da sua obra ou homologação em tempo real.</p>
        
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20">
          <input 
            type="text" 
            placeholder="Digite seu nº de contrato ou CPF" 
            className="flex-grow bg-transparent text-white placeholder-gray-400 px-4 py-3 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="bg-solar-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors shadow-lg">
            Consultar
          </button>
        </form>

        {result && (
          <div className="mt-6 bg-white/10 inline-block px-6 py-4 rounded-lg border border-solar-orange/50 animate-fade-in">
            <p className="font-mono text-sm">
              <i className="fas fa-info-circle text-solar-orange mr-2"></i>
              {result}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
