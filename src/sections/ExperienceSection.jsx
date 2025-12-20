import React, { useRef } from 'react'
import TitleHeader from "../components/HeroModels/TitleHeader.jsx";
import {expCards} from "../constants/index.js"
import GlowCard from "../components/GlowCard.jsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        if (!expCards || expCards.length === 0) return;
        ScrollTrigger.refresh();

        const cards = gsap.utils.toArray('.exp-card-wrapper', containerRef.current);

        cards.forEach((card) => {
            gsap.fromTo(card,
                { opacity: 0, xPercent: -100 },
                {
                    opacity: 1,
                    xPercent: 0,
                    duration: 1,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play reverse play reverse'
                    }
                }
            );

            const line = card.querySelector('.gradient-line');
            if (line) {
                gsap.fromTo(line,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        transformOrigin: 'top center',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 75%',
                            end: 'bottom 75%',
                            scrub: true
                        }
                    }
                );
            }
        });

    }, { scope: containerRef, dependencies: [expCards] });

    return (
        <section id="experience" ref={containerRef} className="w-full md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5" >
                <TitleHeader title="Professional Work Experience" sub="My Career Overview" />

                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {expCards && expCards.length > 0 ? expCards.map((card, index) => (
                            <div key={index} className="exp-card-wrapper relative flex flex-col xl:flex-row gap-10">
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
                                            <div className="timeline relative flex h-full min-h-[200px]">
                                                {/* MUDANÇA 1: left-0 -> left-8 (Centraliza a linha no meio do logo de size-16) */}
                                                <div className="gradient-line w-1 h-full bg-gradient-to-b from-white/20 to-transparent absolute left-8 top-0 origin-top -translate-x-1/2"></div>

                                                {/* MUDANÇA 2: Removi 'ps-10' para que o logo comece alinhado com a linha */}
                                                <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20 pb-10">
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
                        )) : (
                            <p className="text-white text-center">Loading experience...</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection