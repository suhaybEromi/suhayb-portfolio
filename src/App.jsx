import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Automation from "./sections/Automation";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-white">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Automation />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
