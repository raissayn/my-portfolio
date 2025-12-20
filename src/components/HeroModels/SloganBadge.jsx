import React, { useState, useRef } from 'react';

const SloganBadge = () => {
    // Estado para a posição do mouse e opacidade
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        // Calcula a posição exata do mouse dentro do elemento em %
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setMousePosition({ x, y });
    };

    return (
        // CONTAINER PRINCIPAL:
        // py-32 e my-20 garantem que ele empurre os elementos de cima e de baixo
        // w-full garante que ocupe a largura da tela
        <div className="w-full py-32 my-20 flex justify-center items-center bg-transparent relative z-10">

            <div
                className="relative cursor-default inline-block"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setOpacity(1)}
                onMouseLeave={() => setOpacity(0)}
            >
                {/* CAMADA 1: Texto Base (Apagado/Escuro) */}
                {/* Minimalista: Fonte mais fina (font-light) e espaçada (tracking-widest) */}
                <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-zinc-800 uppercase text-center whitespace-nowrap">
                    Backend Developer
                </h2>

                {/* CAMADA 2: Texto Iluminado (Brilho) */}
                {/* Fica exatamente sobre o outro, mas só aparece onde o "spotlight" passa */}
                <h2
                    className="absolute top-0 left-0 w-full h-full text-4xl md:text-5xl font-light tracking-[0.2em] text-white uppercase text-center whitespace-nowrap pointer-events-none"
                    style={{
                        // A máscara cria o círculo de luz
                        maskImage: `radial-gradient(circle 120px at ${mousePosition.x}% ${mousePosition.y}%, black, transparent)`,
                        WebkitMaskImage: `radial-gradient(circle 120px at ${mousePosition.x}% ${mousePosition.y}%, black, transparent)`,
                        opacity: opacity,
                        transition: 'opacity 0.5s ease', // Suaviza a entrada/saída do mouse
                    }}
                >
                    Backend Developer
                </h2>
            </div>
        </div>
    )
}

export default SloganBadge;