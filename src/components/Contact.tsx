import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    city: '',
    concessionaria: '',
    billValue: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    whatsapp: '',
    city: '',
    billValue: ''
  });

  const validateField = (name: string, value: string) => {
    if (name === 'name') {
      if (!value.trim()) return 'Nome é obrigatório';
      if (value.trim().length < 3) return 'Nome muito curto';
    }
    if (name === 'whatsapp') {
      if (!value.trim()) return 'WhatsApp é obrigatório';
      const cleanPhone = value.replace(/\D/g, '');
      if (cleanPhone.length < 10) return 'Número inválido (mínimo 10 dígitos)';
    }
    if (name === 'city') {
      if (!value.trim()) return 'Cidade/UF é obrigatório';
    }
    if (name === 'billValue') {
      if (!value.trim()) return 'Valor da conta é obrigatório';
    }
    return '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error immediately when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      whatsapp: validateField('whatsapp', formData.whatsapp),
      city: validateField('city', formData.city),
      billValue: validateField('billValue', formData.billValue)
    };

    setFormErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const message = `Olá, meu nome é ${formData.name}. Sou de ${formData.city}. Minha conta de luz é R$ ${formData.billValue} (${formData.concessionaria}). Gostaria de um orçamento.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/message/24V75JFH4PNMB1?text=${encodedMessage}`, "_blank");
    }
  };

  return (
    <section id="contato" className="py-24 bg-solar-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-solar-orange/10 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-solar-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl transition-colors duration-300">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Solicite seu <span className="text-solar-orange">Orçamento Gratuito</span></h2>
            <p className="text-gray-400">Preencha os dados abaixo e receba uma proposta personalizada para sua casa ou empresa.</p>
          </div>
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 ml-1">Nome Completo <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Seu nome" 
                  className={`w-full bg-solar-dark border ${formErrors.name ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange focus:ring-1 focus:ring-solar-orange transition text-white`} 
                />
                {formErrors.name && <p className="text-red-500 text-xs ml-1">{formErrors.name}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 ml-1">WhatsApp <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="(88) 99999-9999" 
                  className={`w-full bg-solar-dark border ${formErrors.whatsapp ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange focus:ring-1 focus:ring-solar-orange transition text-white`} 
                />
                {formErrors.whatsapp && <p className="text-red-500 text-xs ml-1">{formErrors.whatsapp}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 ml-1">Cidade/UF <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Ex: Juazeiro do Norte, CE" 
                  className={`w-full bg-solar-dark border ${formErrors.city ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange focus:ring-1 focus:ring-solar-orange transition text-white`} 
                />
                {formErrors.city && <p className="text-red-500 text-xs ml-1">{formErrors.city}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 ml-1">Concessionária</label>
                <select 
                  name="concessionaria"
                  value={formData.concessionaria}
                  onChange={handleInputChange}
                  className="w-full bg-solar-dark border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange focus:ring-1 focus:ring-solar-orange transition text-gray-300"
                >
                  <option value="">Selecione...</option>
                  <option value="Enel">Enel</option>
                  <option value="Outra">Outra</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300 ml-1">Valor Médio da Conta de Luz (R$) <span className="text-red-500">*</span></label>
              <input 
                type="number" 
                name="billValue"
                value={formData.billValue}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Ex: 500,00" 
                className={`w-full bg-solar-dark border ${formErrors.billValue ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange focus:ring-1 focus:ring-solar-orange transition text-white`} 
              />
              {formErrors.billValue && <p className="text-red-500 text-xs ml-1">{formErrors.billValue}</p>}
            </div>
            <button className="w-full bg-solar-orange text-white font-bold text-lg py-4 rounded-xl hover:bg-orange-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Enviar Solicitação
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
              <i className="fas fa-lock mr-1"></i> Seus dados estão seguros. Entraremos em contato em até 24h.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
