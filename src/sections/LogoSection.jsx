import React from 'react'
import { abilities } from '../constants/index.js'

const FeatureCards = () => {
    return (
        <div className="w-full py-20 px-5 md:px-12">

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">

                {abilities.map(({imgPath, title, desc}) => (

                    <div
                        key={title}
                        // MUDANÇA 1: Borda Sólida (#f4b4c2 puro)
                        className="rounded-2xl p-8 md:p-10 flex flex-col gap-6 border border-[#f4b4c2] bg-white/5 hover:bg-white/10 transition-colors h-full justify-center"
                    >

                        {/* MUDANÇA 2: Fundo da bolinha Sólido (bg-[#f4b4c2]) sem transparência */}
                        <div className="size-20 flex items-center justify-center rounded-full bg-[#f4b4c2] mb-4">
                            <img src={imgPath} alt={title} className="w-1/2 h-1/2 object-contain" />
                        </div>

                        <h3 className="text-white text-3xl font-bold">{title}</h3>

                        <p className="text-white/60 text-lg leading-relaxed">{desc}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default FeatureCards