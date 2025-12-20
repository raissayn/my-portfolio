import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import heroBg from "../assets/tech/herobg.png";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";

const Hero = () => {
    const containerRef = useRef();

    useGSAP(() => {
        gsap.fromTo('.hero-text-anim',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 1,
                ease: 'power3.out'
            }
        )
    }, { scope: containerRef });

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center bg-black">

            {/* IMAGEM DE FUNDO */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <img
                    src={heroBg}
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* CONTAINER PRINCIPAL */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">

                {/* COLUNA ESQUERDA: Texto */}
                <div className="flex flex-col justify-center items-start gap-5" ref={containerRef}>

                    <p className="hero-text-anim text-[#f4b4c2] text-xl md:text-2xl font-medium tracking-wide">
                        Olá, eu sou
                    </p>

                    <h1 className="hero-text-anim text-white text-6xl md:text-8xl font-bold leading-tight">
                        Raissa <br />
                        <span className="text-[#f4b4c2]">Nunes Peret</span>
                    </h1>

                    {/* ALTERAÇÃO AQUI: Degradê de rosa claro para o novo rosa forte */}
                    <h2 className="hero-text-anim text-2xl md:text-4xl font-semibold text-gray-200">
                        Desenvolvedora <span className="bg-gradient-to-r from-[#f4b4c2] to-[#ff0066] bg-clip-text text-transparent">Backend</span>
                    </h2>

                    <p className="hero-text-anim text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mt-2">
                        Especializada em <strong>Java</strong> e <strong>C++</strong>. Desenvolvo soluções backend focadas em performance, escalabilidade e boas práticas.
                    </p>

                    {/* BOTÃO ÚNICO */}
                    <a href="#work" className="hero-text-anim mt-6 inline-block">
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12 text-lg font-bold"
                            id="button"
                            text="Veja meu trabalho"
                        />
                    </a>
                </div>

                {/* COLUNA DIREITA: Holograma */}
                <div className="w-full h-full flex items-center justify-center relative cursor-grab active:cursor-grabbing">
                    <div className="w-full h-[50vh] md:h-[75%]">
                        <HeroExperience />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero;