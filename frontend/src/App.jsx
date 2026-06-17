import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 antialiased selection:bg-zinc-800 selection:text-zinc-100">
      {/* Background Grid Pattern Accent */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
      
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 md:px-12 space-y-32 pt-32 pb-16">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}