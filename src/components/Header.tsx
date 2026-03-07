import React, { useRef, useState, useEffect } from 'react';

interface HeaderProps {
  LOGO_URL: string;
  onAdminLogin: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ LOGO_URL, onAdminLogin, darkMode, toggleDarkMode }: HeaderProps) {
  const logoClickCount = useRef(0);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      // Scroll Progress Logic
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));

      // Active Section Logic
      const sections = [
        'home', 
        'quem-somos', 
        'comece-aqui', 
        'projetos', 
        'calculadora', 
        'blog', 
        'conhecimento', 
        'faq',
        'emergencia'
      ];

      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with some offset for header)
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'quem-somos', label: 'Quem Somos' },
    { id: 'comece-aqui', label: 'Comece Aqui' },
    { id: 'projetos', label: 'Portfólio' },
    { id: 'calculadora', label: 'Simulador' },
    { id: 'blog', label: 'Blog' },
    { id: 'conhecimento', label: 'Conhecimento' },
    { id: 'faq', label: 'Dúvidas' },
    { id: 'emergencia', label: 'Emergência', isEmergency: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 bg-solar-dark/90 border-white/10 text-white`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div onClick={handleLogoClick} className="cursor-pointer select-none">
          <img src={LOGO_URL} alt="MgS System Solar" className="h-12 object-contain" />
        </div>
        <div className="hidden md:flex space-x-6 lg:space-x-8 font-semibold text-xs lg:text-sm uppercase tracking-wider">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`transition-all duration-300 relative py-2 ${
                link.isEmergency 
                  ? 'text-red-600 hover:text-red-700 font-bold animate-pulse' 
                  : activeSection === link.id 
                    ? 'text-solar-orange' 
                    : 'hover:text-solar-orange'
              }`}
            >
              {link.label}
              {activeSection === link.id && !link.isEmergency && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-solar-orange rounded-full animate-fade-in"></span>
              )}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode} 
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white/10 hover:bg-white/20 text-yellow-400`}
            title={darkMode ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <a href="https://wa.me/message/24V75JFH4PNMB1" target="_blank" rel="noopener noreferrer" className="bg-solar-orange text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition hidden sm:block">Orçamento</a>
        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gray-700 w-full">
        <div 
          className="h-full bg-solar-orange transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>
    </nav>
  );
}
