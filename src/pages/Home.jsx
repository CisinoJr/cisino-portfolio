import Hero from "../components/Hero";
import About from "../components/About";
import SocialProof from "../components/SocialProof";
import ExperienceTree from "../components/ExperienceTree";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeaderTools from "../components/HeaderTools";
import Seo from "../seo/Seo";

export default function Home() {
  return (
    <>
      <Seo />
      <HeaderTools />
      <Hero />
      <SocialProof />
      <About />
      <ExperienceTree />
      <Services />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}
