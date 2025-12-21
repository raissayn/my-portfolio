import React, { useRef } from 'react'
import TitleHeader from "../components/HeroModels/TitleHeader.jsx";
import {expCards} from "../constants/index.js"
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        if (!expCards || expCards.length === 0) return;

        // Garante que o ScrollTrigger recalcule as posições após o render
        ScrollTrigger.refresh();

        const cards = gsap.utils.toArray('.exp-card-wrapper', containerRef.current);

        cards.forEach((card) => {
            // 1. Animação do Card Inteiro (Texto + Logo)
            gsap.fromTo(card,
                {
                    opacity: 0,
                    x: -50 // Começa deslocado 50px para a esquerda
                },
                {
                    opacity: 1,
                    x: 0, // Vai para a posição original
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%', // Começa a animar quando o topo do card estiver em 85% da tela
                        end: 'bottom 15%',
                        toggleActions: 'play reverse play reverse' // Garante que a animação vai e volta
                    }
                }
            );

            // 2. Animação da Linha Colorida (Crescendo para baixo)
            const line = card.querySelector('.gradient-line');
            if (line) {
                gsap.fromTo(line,
                    { scaleY: 0 }, // Começa com tamanho 0
                    {
                        scaleY: 1, // Cresce até o tamanho total
                        transformOrigin: 'top center', // Cresce de cima para baixo
                        ease: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 70%',
                            end: 'bottom 70%',
                            scrub: true // A animação segue a velocidade do scroll (efeito de preenchimento)
                        }
                    }
                );
            }
        });

    }, { scope: containerRef, dependencies: [expCards] });

    return (
        <section id="experience" ref={containerRef} className="w-full md:mt-40 mt-20 section-padding">
            <div className="w-full max-w-7xl mx-auto px-5 md:px-10">

                <TitleHeader
                    title="Sobre mim"
                    sub="Experiências acâdemicas e estudos"
                />

                <div className="mt-20 flex flex-col gap-10 md:gap-20">
                    {expCards && expCards.length > 0 ? expCards.map((card, index) => (
                        <div key={index} className="exp-card-wrapper grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10 opacity-0">
                            {/* Adicionei 'opacity-0' inicial para evitar 'flicker' antes da animação começar */}

                            {/* --- COLUNA DA ESQUERDA (Logo + Linha) --- */}
                            <div className="relative flex flex-col items-center h-full">
                                {/* Logo */}
                                <div className="z-20 bg-black/50 rounded-full p-2 mb-4 border border-white/10 shrink-0">
                                    <img
                                        src={card.logoPath}
                                        alt="logo"
                                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                                    />
                                </div>

                                {/* Linha Vertical */}
                                <div className="flex-1 w-full flex justify-center relative min-h-[100px]">
                                    {/* A linha precisa ter altura definida pelo pai flex, o scaleY do GSAP fará o resto */}
                                    <div className="gradient-line w-[2px] md:w-[3px] bg-gradient-to-b from-[#f4b4c2] to-[#ff0066] absolute top-0 bottom-0 origin-top"></div>
                                </div>
                            </div>

                            {/* --- COLUNA DA DIREITA (Texto) --- */}
                            <div className="pb-10 pt-2">
                                <h1 className="font-bold text-3xl md:text-4xl text-white leading-tight">
                                    {card.title}
                                </h1>
                                <p className="mt-2 mb-6 text-white/50 text-sm md:text-base font-medium uppercase tracking-wide">
                                    {card.date}
                                </p>

                                <div>
                                    <p className="text-[#f4b4c2] italic mb-4 text-lg">
                                        Responsibilities
                                    </p>
                                    <ul className="list-disc ml-5 space-y-4 text-white/80">
                                        {card.responsibilities.map((responsibility, idx) => (
                                            <li key={idx} className="text-base md:text-lg leading-relaxed">
                                                {responsibility}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <p className="text-white text-center">Loading experience...</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection