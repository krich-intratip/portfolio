import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Timeline from '@/components/Timeline';
import Achievements from '@/components/Achievements';
import BlogCarousel from '@/components/BlogCarousel';
import Contact from '@/components/Contact';
import ProfileJsonLd from '@/components/ProfileJsonLd';

export const metadata: Metadata = {
  title: 'พลโท ดร.กริช อินทราทิพย์ | Lt.Gen. Krich Intratip, Ph.D.',
  description: 'ผู้บริหารยุทธศาสตร์ด้านความมั่นคง Defense-Tech, AI Governance, ระบบประเมิน และการพัฒนาผู้นำสำหรับองค์กรภาครัฐ การศึกษา และผู้บริหารระดับสูง',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main className="bg-void-navy min-h-screen">
      <ProfileJsonLd />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Services />
      <Achievements />
      <BlogCarousel />
      <Contact />
    </main>
  );
}
