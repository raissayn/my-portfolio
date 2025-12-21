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
            ".tech-item",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section id="skills" className="section-padding py-24">
            <div className="container mx-auto px-5">

                <div className="mb-16">
                    <TitleHeader
                        title="Habilidades técnicas"
                        sub="Ferramentas e tecnologias que possuo conhecimento"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {techStackIcons.map((tech) => (
                        <div
                            key={tech.name}
                            className="tech-item flex flex-col justify-center p-5
                                     w-full bg-white/5 border border-white/10
                                     rounded-2xl backdrop-blur-sm transition-all duration-500
                                     hover:bg-white/10 hover:border-white/30
                                     shadow-lg hover:shadow-purple-500/10 cursor-default group"
                        >
                            <div className="flex items-center gap-4 mb-4">

                                <div className="shrink-0 size-14 rounded-full bg-white/5 border border-white/5 group-hover:border-white/20 transition-colors overflow-hidden">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                <div className="flex flex-1 justify-between items-center">
                                    <span className="text-white text-xl font-bold tracking-wide">
                                        {tech.name}
                                    </span>
                                    <span className="text-white/40 text-sm font-mono">
                                        {tech.percentage || 50}%
                                    </span>
                                </div>
                            </div>

                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[#f4b4c2] rounded-full transition-all duration-1000 ease-out group-hover:brightness-125"
                                    style={{ width: `${tech.percentage || 50}%` }}
                                ></div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TechStack;