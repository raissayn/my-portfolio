import React, {useEffect} from 'react'
import { navLinks } from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setScrolled] = React.useState(false);

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

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ id, title }) => (
                            <li key={id} className="group">
                                <a href={`#${id}`}>
                                    <span className="text-[#f4b4c2] group-hover:text-white transition-colors duration-300">
                                        {title}
                                    </span>
                                    <span className="underline bg-[#f4b4c2]"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        {/* Apenas o texto fica rosa aqui */}
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