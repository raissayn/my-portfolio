import { words } from "../constants/index.js";
// Importando a imagem de fundo corretamente da pasta assets
import heroBg from "../assets/tech/herobg.png";
import Button from "../components/Button.jsx";

const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden h-screen w-full">
            {/* Imagem de fundo corrigida */}
            <div className="absolute top-0 left-0 z-0 w-full h-full">
                <img
                    src={heroBg}
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="hero-layout relative z-10">
                {/*Left: hero content */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 pt-20">
                    <div className="flex flex-col gap-7">
                        <div className="hero-txt">
                            {/*titulo principal *maior foco*/}
                            <h1 className="text-white text-5xl font-bold">Shaping
                                <span className="slide inline-block align-bottom ml-4">
                                <span className="wrapper block">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                          <img
                                              src={word.imgPath}
                                              alt={word.text}
                                              className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white/10"
                                          />
                                          <span className="text-white">
                                              {word.text}
                                          </span>
                                      </span>
                                    ))}
                                </span>
                            </span>
                            </h1>
                            <h1 className="text-white text-5xl font-bold">Into Real Projects</h1>
                            <h1 className="text-white text-5xl font-bold">that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none mt-5">
                            Hi, I'm Raissa, a developer based in MG - Brasil with a passion for code.
                        </p>
                        <Button
                        className="md:w-80 md:h-16 w-60 h12"
                        id="button"
                        text="Veja meu trabalho"
                        />
                    </div>
                </header>
                {/*right: 3d model */}
            </div>
        </section>
    )
}
export default Hero;