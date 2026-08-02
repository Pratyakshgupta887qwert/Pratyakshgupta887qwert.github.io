import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Achievements from './components/Achivements';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] antialiased selection:bg-[var(--accent)] selection:text-[var(--bg)]">
      {/* System-aware layered palette background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_16%_10%,var(--glow),transparent_24rem),radial-gradient(circle_at_82%_4%,var(--accent-soft),transparent_28rem),linear-gradient(135deg,var(--bg)_0%,var(--bg-soft)_46%,var(--surface-2)_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_22%,transparent_100%)] opacity-45" />
      
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 md:px-12 space-y-32 pt-32 pb-16">
        <Hero />
        <Projects />
        <Achievements />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
        <Footer />
      
    </div>
  );
}

