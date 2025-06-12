import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NavBar activeSection={activeSection} onNavClick={scrollToSection} />
      <main className="pt-20 font-sans snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <section id="home" className="min-h-screen flex items-center justify-center bg-white">
          <Home />
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50">
          <About />
        </section>
        <section id="skills" className="min-h-screen flex items-center justify-center bg-white">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-50">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
          <Contact />
        </section>
      </main>
      <footer className="text-center text-sm text-gray-400 py-10 bg-gray-100">
        &copy; 2025 ManiacMemories. All rights reserved.
      </footer>
    </>
  );
}
