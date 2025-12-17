import { words } from "../constants/index.js";
import heroBg from "../assets/tech/herobg.png";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";

const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden h-screen w-full">
            <div className="absolute top-0 left-0 z-0 w-full h-full">
                <img
                    src={heroBg}
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="hero-layout relative z-10">
                {/* posição
                */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 pb-40">
                    <div className="flex flex-col gap-8">
                        <div className="hero-txt">
                            <h1 className="text-white text-6xl md:text-7xl font-bold leading-tight">
                                Shaping

                                <span className="slide inline-block align-bottom ml-4 h-[80px] overflow-hidden">
                                    <span className="wrapper block">
                                        {words.map((word) => (
                                            /* Os Passageiros: Altura deve ser IGUAL a da janela (80px) */
                                            <span key={word.text} className="flex items-center md:gap-4 gap-2 h-[80px]">
                                              <img
                                                  src={word.imgPath}
                                                  alt={word.text}
                                                  className="xl:size-16 md:size-14 size-10 md:p-2 p-1 rounded-full bg-white/10"
                                              />
                                              <span className="text-white">
                                                  {word.text}
                                              </span>
                                          </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>

                            <h1 className="text-white text-6xl md:text-7xl font-bold leading-tight">Into Real Projects</h1>
                            <h1 className="text-white text-6xl md:text-7xl font-bold leading-tight">that Deliver Results</h1>
                        </div>

                        <p className="text-white-50 text-lg md:text-2xl relative z-10 pointer-events-none mt-2 max-w-2xl">
                            Hi, I'm Raissa, a developer based in MG - Brasil with a passion for code.
                        </p>

                        <Button
                            className="md:w-80 md:h-16 w-60 h-12 text-lg" // Aumentei um pouco o texto do botão
                            id="button"
                            text="Veja meu trabalho"
                        />
                    </div>
                </header>

                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    )
}
export default Hero;