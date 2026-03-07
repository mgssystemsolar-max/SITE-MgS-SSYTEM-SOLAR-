import React, { useState } from 'react';

interface FooterProps {
  LOGO_URL: string;
}

export default function Footer({ LOGO_URL }: FooterProps) {
  const [showJesus, setShowJesus] = useState(false);

  return (
    <footer className="bg-solar-dark text-white pt-20 pb-10 transition-colors duration-300 relative">
      <div className="container mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src={LOGO_URL} alt="MgS System Solar" className="h-16 mb-6 mx-auto md:mx-0 object-contain bg-white/10 rounded-lg p-2 shadow-sm" />
          <p className="text-gray-400 text-sm">Especialistas em energia limpa e redução de custos. Atendemos residências e empresas com excelência.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 border-l-4 border-solar-orange pl-4 uppercase text-white">Redes Sociais</h4>
          <div className="flex justify-center md:justify-start space-x-6 text-2xl text-solar-orange">
            <a href="https://www.instagram.com/marciogoncalvesda176/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61577300515359&locale=pt_BR" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><i className="fab fa-facebook"></i></a>
            <a href="https://www.youtube.com/channel/UCQGzIxvn_I1uqved_psc9oQ" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><i className="fab fa-youtube"></i></a>
            <a href="https://wa.me/message/24V75JFH4PNMB1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 border-l-4 border-solar-orange pl-4 uppercase text-white">Contato & Endereço</h4>
          <div className="text-gray-400 text-sm space-y-4">
            <p>
              <a href="mailto:mgssystemsolarclientes@gmail.com" className="hover:text-solar-orange transition flex items-center justify-center md:justify-start gap-2">
                <i className="fas fa-envelope text-solar-orange"></i>
                mgssystemsolarclientes@gmail.com
              </a>
            </p>
            <p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=R.+DR.+MOZART+CARDOSO+DE+ALENCAR+95+BAIRRO+NOVO+JUAZEIRO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-solar-orange transition flex items-start justify-center md:justify-start gap-2"
              >
                <i className="fas fa-map-marker-alt text-solar-orange mt-1"></i>
                <span>
                  R. Dr. Mozart Cardoso de Alencar, 95<br/>
                  Bairro Novo Juazeiro<br/>
                  Juazeiro do Norte - CE
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Mensagem Inspiradora */}
      <div className="container mx-auto px-6 mt-12 flex justify-center">
        <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full shadow-sm border border-white/5 max-w-2xl">
          <div className="relative group cursor-pointer" onClick={() => setShowJesus(true)}>
            <img 
              src="https://images.unsplash.com/photo-1541103554737-fe33e243b45c?auto=format&fit=crop&q=80&w=100&h=100" 
              alt="Sol - Luz e Esperança" 
              className="w-10 h-10 rounded-full object-cover border-2 border-solar-orange shrink-0 transition-transform transform group-hover:scale-110"
              loading="lazy"
            />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-solar-orange text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Clique aqui
            </span>
          </div>
          <p className="text-sm font-medium text-gray-300 italic text-center md:text-left">
            "E a porta que Deus abre, ninguém fecha; e a que Ele fecha, é livramento."
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
        <p>© 2026 MgS System Solar - Todos os direitos reservados.</p>
        <p className="mt-2 text-gray-700">CNPJ: 62.612.258/0001-04</p>
      </div>

      {/* Modal Jesus */}
      {showJesus && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl max-w-lg w-full text-center relative animate-scale-up">
            <h3 className="text-2xl font-bold text-solar-orange mb-4">Luz do Mundo</h3>
            <div className="rounded-xl overflow-hidden mb-6 border-4 border-solar-orange/20 bg-gray-800 min-h-[300px] flex items-center justify-center">
              <img 
                src="https://lh3.googleusercontent.com/d/1mIm35e8EVRHeIj_5HXMjHJpxZTJrl3Ex" 
                alt="Jesus Cristo - Luz do Mundo" 
                className="w-full h-auto max-h-[60vh] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-300 italic mb-6">
              "Eu sou a luz do mundo; quem me segue não andará em trevas, mas terá a luz da vida."
            </p>
            <button 
              onClick={() => setShowJesus(false)}
              className="bg-solar-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Voltar ao Normal
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
