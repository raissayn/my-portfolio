import React, { useRef } from 'react';

const GlowCard = ({ card, children }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        // 1. Coordenadas para o .glow (radial-gradient)
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 2. Cálculo do ângulo para a borda (conic-gradient no ::before)
        // Calculamos o centro do card
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculamos a distância do mouse em relação ao centro
        const radians = Math.atan2(y - centerY, x - centerX);
        // Convertemos para graus (0 a 360)
        let angle = radians * (180 / Math.PI);

        // Ajuste para alinhar o início do gradiente (o CSS usa 0deg no topo)
        angle = (angle + 90) % 360;

        // 3. Aplicamos as variáveis ao elemento
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
        card.style.setProperty("--start", angle);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="card timeline-card rounded-xl p-10 relative group"
        >
            {/* O brilho radial interno */}
            <div className="glow" />

            <div className="relative z-10">
                <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: 5 }, (_, i) => (
                        <img src="/images/star.png" key={i} alt="star" className="size-5"
                             style={{ filter: 'brightness(0) invert(1)' }} />
                    ))}
                </div>
                <div className="mb-5">
                    <p className="text-white/50 text-lg">
                        {card.review}
                    </p>
                </div>
                {children}
            </div>
        </div>
    );
};

export default GlowCard;