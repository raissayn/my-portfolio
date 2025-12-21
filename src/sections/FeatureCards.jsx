import React from 'react'
import { abilities } from '../constants/index.js'

const FeatureCards = () => {
    // utilizei somente 1
    const ability = abilities[0];

    return (
        <div className="w-full py-20 px-5 md:px-12">

            <div className="w-full flex justify-center">

                {/* Card Único */}
                <div
                    key={ability.title}
                    className="w-full max-w-2xl rounded-2xl p-8 md:p-10 flex flex-col gap-6 border border-[#f4b4c2] bg-white/5 hover:bg-white/10 transition-colors justify-center items-center text-center"
                >
                    {/* Ícone */}
                    <div className="size-20 flex items-center justify-center rounded-full bg-[#f4b4c2] mb-4">
                        <img src={ability.imgPath} alt={ability.title} className="w-1/2 h-1/2 object-contain" />
                    </div>

                    {/* Título */}
                    <h3 className="text-white text-3xl font-bold">{ability.title}</h3>

                    {/* Descrição */}
                    <p className="text-white/60 text-lg leading-relaxed">{ability.desc}</p>
                </div>

            </div>
        </div>
    )
}

export default FeatureCards