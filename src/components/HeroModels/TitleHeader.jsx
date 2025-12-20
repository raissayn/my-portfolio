import React from 'react';

const TitleHeader = ({ title, sub }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center mb-10">
            {/* 1. Título Principal (Rosa, Itálico, Sem Capslock forçado) */}
            <h2 className="text-[#f4b4c2] text-5xl md:text-6xl font-bold tracking-tighter italic mb-8">
                {title}
            </h2>

            {/* 2. Subtítulo (Estilo Badge/Pílula com Borda) */}
            {sub && (
                <div className="inline-block border border-[#f4b4c2] rounded-full px-6 py-2 bg-[#f4b4c2]/5">
                    <p className="text-[#f4b4c2] text-sm md:text-base font-medium tracking-widest uppercase">
                        {sub}
                    </p>
                </div>
            )}
        </div>
    );
};

export default TitleHeader;