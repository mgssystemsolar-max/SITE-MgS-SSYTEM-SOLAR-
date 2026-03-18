import React from 'react';
import { motion } from 'motion/react';

export default function EquipmentCenter() {
  const reviews = [
    {
      name: "João P.",
      location: "Crato, CE",
      text: "Comprei o inversor off-grid recomendado pelo Márcio e a instalação foi um sucesso. Adeus quedas de energia!",
      rating: 5
    },
    {
      name: "Maria S.",
      location: "Juazeiro do Norte, CE",
      text: "A vitrine da Amazon facilitou muito a compra dos cabos e conectores. Tudo chegou rápido e com qualidade garantida.",
      rating: 5
    },
    {
      name: "Carlos E.",
      location: "Barbalha, CE",
      text: "Atendimento excelente pelo WhatsApp. O catálogo me ajudou a escolher a bateria certa pro meu sistema.",
      rating: 5
    }
  ];

  const equipmentLinks = [
    {
      title: "Sistemas Off-Grid",
      subtitle: "Inversores e Baterias",
      description: "Independência energética total! Inversores e baterias de alta performance para você gerar e armazenar sua própria energia. Diga adeus aos apagões com máxima eficiência.",
      icon: "fas fa-car-battery",
      link: "https://www.amazon.com.br/shop/marciogoncalvesda176/list/39BLN8QUJFRUX",
      buttonText: "Ver Lista na Amazon",
      highlight: true,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Vitrine Completa",
      subtitle: "Nossa Loja Amazon",
      description: "Explore todos os equipamentos, ferramentas e acessórios recomendados pela MgS System Solar para o seu projeto fotovoltaico.",
      icon: "fab fa-amazon",
      link: "https://www.amazon.com.br/shop/marciogoncalvesda176",
      buttonText: "Acessar Vitrine",
      highlight: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Catálogo Direto",
      subtitle: "Compre pelo WhatsApp",
      description: "Fale diretamente com nossa equipe, tire dúvidas técnicas e acesse nosso catálogo exclusivo de serviços e produtos locais.",
      icon: "fab fa-whatsapp",
      link: "https://wa.me/message/24V75JFH4PNMB1", // Substitua pelo link direto do catálogo se preferir
      buttonText: "Acessar Catálogo",
      highlight: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="equipamentos" className="py-24 bg-solar-dark text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-solar-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-solar-orange font-bold tracking-[0.2em] text-sm uppercase">Recomendações do Especialista</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 text-white">
            Central de <span className="text-solar-orange underline decoration-solar-orange/30">Equipamentos</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Compre com segurança. Selecionamos os melhores inversores, baterias e acessórios do mercado com garantia de qualidade MgS System Solar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {equipmentLinks.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                item.highlight 
                  ? 'bg-gradient-to-b from-solar-card to-solar-dark border-2 border-solar-orange shadow-[0_0_30px_rgba(255,107,0,0.15)]' 
                  : 'bg-solar-card border border-white/10 hover:border-white/30 shadow-xl'
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-solar-orange text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                  Mais Vendidos
                </div>
              )}

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${item.color} shadow-lg`}>
                <i className={`${item.icon} text-3xl text-white`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-solar-orange font-semibold text-sm mb-4 uppercase tracking-wide">{item.subtitle}</p>
              
              <p className="text-gray-400 mb-8 text-sm leading-relaxed min-h-[80px]">
                {item.description}
              </p>
              
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 ${
                  item.highlight
                    ? 'bg-solar-orange text-white hover:bg-orange-600 shadow-lg hover:shadow-solar-orange/40'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {item.buttonText}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              O que dizem nossos <span className="text-solar-orange">clientes</span>
            </h3>
            <p className="text-gray-400">Quem comprou com nossas recomendações, aprova e confia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="flex text-yellow-400 text-sm mb-4 gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 text-sm leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-solar-orange/20 flex items-center justify-center text-solar-orange font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{review.name}</p>
                    <p className="text-gray-500 text-xs">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Shopee Teaser */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm font-medium flex items-center justify-center gap-2">
            <i className="fas fa-clock"></i> Em breve: Nossa loja oficial na Shopee!
          </p>
        </div>

        {/* Amazon Affiliate Disclaimer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center max-w-3xl mx-auto">
          <p className="text-gray-500 text-xs leading-relaxed">
            <strong>Aviso Legal de Afiliado:</strong> A MgS System Solar (Márcio Gonçalves) é participante do Programa de Associados da Amazon, um programa de afiliados desenvolvido para proporcionar um meio de sites ganharem taxas de publicidade vinculando e anunciando na Amazon.com.br. Como Associado Amazon, ganhamos com compras qualificadas. Isso não altera o preço final dos produtos para você.
          </p>
        </div>
      </div>
    </section>
  );
}
