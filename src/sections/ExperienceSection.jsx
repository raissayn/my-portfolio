import React from 'react'
import TitleHeader from "../components/HeroModels/TitleHeader.jsx";
import {expCards} from "../constants/index.js"
import GlowCard from "../components/GlowCard.jsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    useGSAP(() => {
        // Seleciona todos os wrappers de cards
        gsap.utils.toArray('.exp-card-wrapper').forEach((card) => {

            // 1. Animação do Cartão (aparecendo da esquerda)
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    end: 'bottom 85%',
                    toggleActions: 'play reverse play reverse' // Faz o card sumir/aparecer ao rolar
                }
            })

            // 2. Animação da Linha (Crescendo de CIMA para BAIXO)
            const line = card.querySelector('.gradient-line');

            gsap.fromTo(line,
                { scaleY: 0 }, // Começa com altura 0 (invisível)
                {
                    scaleY: 1,
                    transformOrigin: 'top center', // Fixa o topo, força o crescimento para baixo
                    ease: 'none', // Linear para sincronizar perfeitamente com o scroll
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 75%',
                        end: 'bottom 75%',
                        scrub: true
                    }
                }
            );
        })

    }, []);

    return (
        <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5" >
                <TitleHeader title="Professional Work Experience" sub="My Career Overview" />

                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {expCards.map((card, index) => (
                            <div key={card.title} className="exp-card-wrapper relative flex flex-col xl:flex-row gap-10">
                                <div className="xl:w-2/6">
                                    <GlowCard card={card} index={index}>
                                        <div className="mt-5">
                                            <img src={card.imgPath} alt={card.title} className="rounded-lg" />
                                        </div>
                                    </GlowCard>
                                </div>

                                <div className="xl:w-4/6">
                                    <div className="flex items-start h-full">
                                        <div className="timeline-wrapper flex h-full">
                                            <div className="timeline relative flex h-full">
                                                <div className="gradient-line w-1 h-full bg-gradient-to-b from-white/20 to-transparent absolute left-0 top-0"></div>

                                                <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20 ps-10 pb-10">
                                                    <div className="timeline-logo shrink-0">
                                                        <img src={card.logoPath} alt="logo" className="size-16 object-contain" />
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <h1 className="font-semibold text-3xl text-white">
                                                            {card.title}
                                                        </h1>
                                                        <p className="my-5 text-white/50">
                                                            {card.date}
                                                        </p>
                                                        <p className="text-[#839cb5] italic">
                                                            Responsibilities
                                                        </p>
                                                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white/70">
                                                            {card.responsibilities.map((responsibility, idx) => (
                                                                <li key={idx} className="text-lg leading-relaxed">
                                                                    {responsibility}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection