import React, {useEffect} from 'react'
import { navLinks } from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setSrolled] = React.useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 10;
            setSrolled(true);
        }
    }, [])
    return (
        <header className="navbar">
            <div className="inner">
                <a className="logo" href="#hero">
                    RaissaDev
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ id, title }) => (
                            <li key={id} className="group">
                                <a href={`#${id}`}>
                                    <span>
                                        {title}
                                    </span>
                                    <span className="underline"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span className="icon">Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}
export default NavBar