import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Research from "./components/Research/Research";
import Publications from "./components/Publications/Publications";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Awards from "./components/Awards/Awards";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Research />
      <Publications />
      <Projects />
      <Skills />
      <Awards />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
