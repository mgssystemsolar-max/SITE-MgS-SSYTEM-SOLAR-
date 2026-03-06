import React, { useRef } from 'react';

interface HeaderProps {
  LOGO_URL: string;
  onAdminLogin: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ LOGO_URL, onAdminLogin, darkMode, toggleDarkMode }: HeaderProps) {
  const logoClickCount = useRef(0);

  const handleLogoClick = () => {
    logoClickCount.current += 1;
    if (logoClickCount.current === 3) {
      const password = prompt("Digite a senha de administrador:");
      if (password === "mgs2026") {
        onAdminLogin();
        alert("Modo Administrador Ativado!");
      } else {
        alert("Senha incorreta.");
      }
      logoClickCount.current = 0;
    }
    setTimeout(() => { logoClickCount.current = 0; }, 2000);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${darkMode ? 'bg-solar-dark/90 border-white/10 text-white' : 'bg-white/90 border-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div onClick={handleLogoClick} className="cursor-pointer select-none">
          <img src={LOGO_URL} alt="MgS System Solar" className="h-12 object-contain" />
        </div>
        <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase tracking-wider">
          <a href="#home" className="hover:text-solar-orange transition">Início</a>
          <a href="#quem-somos" className="hover:text-solar-orange transition">Quem Somos</a>
          <a href="#comece-aqui" className="hover:text-solar-orange transition">Comece Aqui</a>
          <a href="#projetos" className="hover:text-solar-orange transition">Projetos</a>
          <a href="#calculadora" className="hover:text-solar-orange transition">Simulador</a>
          <a href="#blog" className="hover:text-solar-orange transition">Blog</a>
          <a href="#conhecimento" className="hover:text-solar-orange transition">Conhecimento</a>
          <a href="#faq" className="hover:text-solar-orange transition">Dúvidas</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode} 
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${darkMode ? 'bg-white/10 hover:bg-white/20 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
            title={darkMode ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <a href="https://wa.me/message/24V75JFH4PNMB1" target="_blank" rel="noopener noreferrer" className="bg-solar-orange text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition hidden sm:block">Orçamento</a>
        </div>
      </div>
    </nav>
  );
}
