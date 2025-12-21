import React from 'react';

const TitleHeader = ({ title, sub }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center mb-10">
            {/* 1. Título Principal */}
            <h2 className="text-[#f4b4c2] text-5xl md:text-6xl font-bold tracking-tighter italic mb-8">
                {title}
            </h2>

            {/* 2. Subtítulo (Borda Degradê + Texto Degradê) */}
            {sub && (
                // DIV EXTERNA: Define o gradiente da borda através do padding (p-[1px])
                <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-[#f4b4c2] to-[#ff0066]">

                    {/* DIV INTERNA: O "Miolo" da pílula.
                        IMPORTANTE: O 'bg-black' aqui deve ser a cor de fundo da sua página
                        para simular a transparência da borda. */}
                    <div className="rounded-full px-6 py-2 bg-black bg-opacity-90">
                        <p className="bg-gradient-to-r from-[#f4b4c2] to-[#ff0066] bg-clip-text text-transparent text-sm md:text-base font-medium tracking-widest uppercase">
                            {sub}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TitleHeader;