import React from 'react';

const Button = ({ text, className, id = 'counter' }) => {

    const handleScroll = (e) => {
        e.preventDefault();
        const target = document.getElementById(id);

        if (target) {
            const offset = window.innerHeight * 0.15;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <a
            href={`#${id}`}
            onClick={handleScroll}
            className={`
                group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full 
                border border-[#f4b4c2] px-8 py-3 
                cursor-pointer transition-all duration-300 
                hover:shadow-[0_0_20px_rgba(244,180,194,0.4)] 
                ${className ?? ''}
            `}
        >
            {/* 1. Background Animado: absolute inset-0 garante que cubra TUDO, sem deixar partes vagas */}
            <div className="absolute inset-0 -z-10 h-full w-full translate-y-full bg-[#f4b4c2] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />

            {/* 2. Texto: leading-none e pt-[2px] para ajuste fino óptico vertical */}
            <span className="relative z-10 text-sm font-bold uppercase tracking-widest leading-none text-[#f4b4c2] transition-colors duration-500 group-hover:text-black pt-[2px]">
                {text}
            </span>

            {/* 3. Ícone */}
            <div className="relative z-10 flex items-center justify-center transition-transform duration-500 group-hover:translate-y-1">
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-[#f4b4c2] transition-colors duration-500 group-hover:stroke-black"
                >
                    <path
                        d="M12 4V20M12 20L18 14M12 20L6 14"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </a>
    );
};

export default Button;