import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import TitleHeader from "../components/HeroModels/TitleHeader.jsx";
import { techStackIcons } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {

    useGSAP(() => {
        gsap.fromTo(
            ".tech-pill",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top 75%",
                },
            }
        );
    }, []);

    return (
        <section id="skills" className="section-padding py-24">
            <div className="container mx-auto px-5">

                {/* Cabeçalho */}
                <div className="mb-16">
                    <TitleHeader
                        title="My Key Skills"
                        sub="🛠️ Technologies I use properly"
                    />
                </div>

                {/* Container FLEX para centralização perfeita */}
                {/* 'flex-wrap' permite quebrar linha */}
                {/* 'justify-center' garante que tudo fique no meio */}
                <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
                    {techStackIcons.map((tech) => (
                        <div
                            key={tech.name}
                            className="tech-pill flex flex-col justify-center items-center gap-5
                                     w-36 h-64 sm:w-44 sm:h-80 /* Ajustei levemente para ficarem mais elegantes */
                                     bg-white/5 border border-white/10
                                     rounded-full
                                     backdrop-blur-sm transition-all duration-500
                                     hover:bg-white/10 hover:-translate-y-3 hover:border-white/30
                                     shadow-lg hover:shadow-purple-500/20 cursor-default group"
                        >
                            {/* Círculo do ícone */}
                            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/5 group-hover:border-white/20">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Nome da Tecnologia */}
                            <span className="text-white text-xl font-semibold tracking-wide text-center">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TechStack;