import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen selection:bg-sky-500/30">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </main>
  );
}
