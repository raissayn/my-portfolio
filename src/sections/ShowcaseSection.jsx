import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import TitleHeader from "../components/HeroModels/TitleHeader.jsx";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    { id: 1, title: "Projeto fictício!", desc: "Plataforma de caronas com React Native.", img: "/images/project1.png", link: "https://github.com/raissayn/FAT-simulador-SO" },
    { id: 2, title: "Projeto fictício!", desc: "Gestão de livros e usuários.", img: "/images/project2.png" },
    { id: 3, title: "Projeto fictício!", desc: "Showcase de Startups modernas.", img: "/images/project3.png" },
    { id: 4, title: "Em andamento", desc: "Loja virtual com Next.js.", img: "/images/project4.png" },
    { id: 5, title: "Em andamento", desc: "Painel de controle com análise de dados.", img: "/images/project5.png" },
    { id: 6, title: "Em andamento", desc: "Rede social focada em desenvolvedores.", img: "/images/project6.png" },
];

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useGSAP(() => {
        cardsRef.current.forEach((card, index) => {
            if (!card) return;
            gsap.fromTo(card,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: (index % 3) * 0.15,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=80',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }, { scope: sectionRef });

    return (
        <section id="work" ref={sectionRef} className="w-full bg-black py-20 overflow-hidden">
            <div className="w-full px-6 md:px-12">
                <TitleHeader
                    title="Meus Projetos"
                    sub="Destaques da minha recente jornada de desenvolvimento"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="group w-full flex flex-col"
                        >
                            <div className="relative overflow-hidden rounded-xl border border-[#f4b4c2]/30 bg-[#111] transition-all duration-500 group-hover:border-[#f4b4c2] group-hover:shadow-[0_0_20px_rgba(244,180,194,0.15)]">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                {/* Ajustado: Opacidade total no mobile, hover no desktop */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8 text-center md:text-left">
                                    <div className="transform translate-y-0 md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-[#f4b4c2] font-bold text-xl md:text-2xl mb-2">{project.title}</h3>
                                        <p className="text-white/90 text-sm mb-5 line-clamp-2">{project.desc}</p>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-6 py-2 border border-[#f4b4c2] text-[#f4b4c2] font-semibold rounded-full text-xs hover:bg-[#f4b4c2] hover:text-black transition-all inline-block"
                                        >
                                            VIEW PROJECT
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between items-center px-1">
                                <h3 className="text-white text-lg font-light tracking-wide uppercase">{project.title}</h3>
                                <span className="text-[#f4b4c2]/40 font-mono text-sm">0{index + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;