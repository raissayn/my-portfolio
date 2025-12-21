import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    // Variável para facilitar a reutilização do estilo do degradê de texto
    const textGradientClass = "bg-gradient-to-r from-[#f4b4c2] to-[#ff0066] bg-clip-text text-transparent font-bold";

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            'service_9kb2kh7',
            'template_1ghp1gn',
            formRef.current,
            'LnaRiwXei9Ms2rx-G'
        )
            .then((result) => {
                alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.log(error.text);
                alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section id="contact" className="py-20 px-5 md:px-12 w-full">
            <div className="max-w-6xl mx-auto">
                {/* 1. Título com Degradê na palavra Contato */}
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
                    Entre em <span className={textGradientClass}>Contato</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 bg-white/5 p-8 rounded-2xl border border-white/10">

                    {/* LADO ESQUERDO: Informações */}
                    <div className="space-y-6 flex flex-col justify-center">
                        <p className="text-white/60 leading-relaxed text-lg">

                            Aberta a novas oportunidades e desafios. Vamos conversar? Envie uma mensagem ou conecte-se comigo pelas redes.

                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                {/* Ícones mantidos com cor sólida (#f4b4c2) pois degradê em stroke SVG é complexo sem hacks */}
                                <Mail className="text-[#f4b4c2] flex-shrink-0" size={24} />
                                <a href="mailto:raissan084@gmail.com" className="text-white/80 hover:text-[#f4b4c2] transition-colors">
                                    raissan084@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center space-x-4">
                                <MapPin className="text-[#f4b4c2] flex-shrink-0" size={24} />
                                <span className="text-white/80">Alfenas MG - Brasil</span>
                            </div>
                        </div>

                        <div className="flex space-x-6 pt-4">
                            <a href="https://github.com/raissayn" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#f4b4c2] transition-colors">
                                <Github size={32} />
                            </a>
                            <a href="https://www.linkedin.com/in/raissa-nunes-179a86294/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#f4b4c2] transition-colors">
                                <Linkedin size={32} />
                            </a>
                        </div>
                    </div>

                    {/* LADO DIREITO: Formulário */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div>
                            {/* 2. Label Nome com Degradê */}
                            <label htmlFor="name" className={`block text-sm mb-2 ${textGradientClass}`}>
                                Nome
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleFormChange}
                                required
                                className="w-full p-3 bg-white/5 border border-white/10 text-white rounded-lg focus:border-[#f4b4c2] focus:ring-1 focus:ring-[#f4b4c2] outline-none transition-colors placeholder:text-white/20"
                                placeholder="Seu nome completo"
                            />
                        </div>
                        <div>
                            {/* 2. Label Email com Degradê */}
                            <label htmlFor="email" className={`block text-sm mb-2 ${textGradientClass}`}>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                required
                                className="w-full p-3 bg-white/5 border border-white/10 text-white rounded-lg focus:border-[#f4b4c2] focus:ring-1 focus:ring-[#f4b4c2] outline-none transition-colors placeholder:text-white/20"
                                placeholder="seu.email@exemplo.com"
                            />
                        </div>
                        <div>
                            {/* 2. Label Mensagem com Degradê */}
                            <label htmlFor="message" className={`block text-sm mb-2 ${textGradientClass}`}>
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleFormChange}
                                required
                                className="w-full p-3 bg-white/5 border border-white/10 text-white rounded-lg focus:border-[#f4b4c2] focus:ring-1 focus:ring-[#f4b4c2] outline-none transition-colors resize-none placeholder:text-white/20"
                                placeholder="Diga-me sobre seu projeto ou oportunidade..."
                            ></textarea>
                        </div>

                        {/* 3. Botão com Fundo Degradê */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#f4b4c2] to-[#ff0066] text-white px-6 py-3 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(255,0,102,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span>Enviando...</span>
                            ) : (
                                <>
                                    <Send size={18} />
                                    <span>Enviar Mensagem</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;