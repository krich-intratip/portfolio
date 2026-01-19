import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Timeline from '@/components/Timeline';
import Testimonials from '@/components/Testimonials';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen selection:bg-sky-500/30">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Achievements />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}
