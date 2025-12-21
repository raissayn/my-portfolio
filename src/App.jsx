import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import ContactSection from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = ( ) => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <ExperienceSection />
            <TechStack />
            {/*} <FeatureCards /> */}
            <ContactSection />
            <Footer />
        </>
    )
}
export default App