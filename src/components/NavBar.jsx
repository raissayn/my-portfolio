import React, { useEffect, useState } from 'react'
import { navLinks } from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 10;
            setScrolled(isScrolling);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a className="logo text-[#f4b4c2]" href="#hero">
                    RN
                </a>

                {/* visível apenas no mobile */}
                <button
                    className="md:hidden text-[#f4b4c2] text-3xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Navegação: No mobile vira um menu suspenso, no desktop é horizontal */}
                <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-[#0a0a0a] md:bg-transparent flex-col md:flex-row p-8 md:p-0 border-b border-[#f4b4c2]/10 md:border-none`}>
                    <ul className="flex flex-col md:flex-row gap-8 md:gap-6 items-center">
                        {navLinks.map(({ id, title }) => (
                            <li key={id} className="group">
                                <a href={`#${id}`} onClick={() => setIsOpen(false)}>
                                    <span className="text-[#f4b4c2] group-hover:text-white transition-colors duration-300 text-lg md:text-base">
                                        {title}
                                    </span>
                                    <span className="underline bg-[#f4b4c2]"></span>
                                </a>
                            </li>
                        ))}

                        <li className="md:hidden mt-4">
                            <a
                                href="#contact"
                                className="px-8 py-3 border border-[#f4b4c2] text-[#f4b4c2] rounded-full"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group hidden md:flex">
                    <div className="inner">
                        <span className="icon text-[#f4b4c2]">
                            Contact Me
                        </span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default NavBar