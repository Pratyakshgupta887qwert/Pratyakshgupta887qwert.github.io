import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        {/* <a href="#" className="group flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-[#c8f135] flex items-center justify-center text-[#0a0a0a] font-black text-sm">
            PG
          </span>
          <span className="font-semibold tracking-tight text-[#e8e8e8] group-hover:text-white transition-colors">
            Pratyaksh<span className="text-[#c8f135]">.</span>
          </span>
        </a> */}

        

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-[#888]">
          <a href="#projects" className="hover:text-[#e8e8e8] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[#e8e8e8] transition-colors">Skills</a>
          <a href="#experience" className="hover:text-[#e8e8e8] transition-colors">Experience</a>
          <a
            href="https://www.linkedin.com/in/pratyaksh-gupta"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#555] hover:text-[#c8f135] transition-colors font-medium group"
          >
            <img
              src="https://skillicons.dev/icons?i=linkedin"
              alt="LinkedIn"
              width={20}
              height={20}
              className="opacity-50 group-hover:opacity-100 transition-opacity"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/Pratyakshgupta887qwert"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#555] hover:text-[#c8f135] transition-colors font-medium group"
          >
            <img
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub"
              width={20}
              height={20}
              className="opacity-50 group-hover:opacity-100 transition-opacity"
            />
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/Pratyaksh_Gupta_04/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#555] hover:text-[#c8f135] transition-colors font-medium group"
          >
            <img
              src="2944960.webp"
              alt="LeetCode"
              width={20}
              height={20}
              className="opacity-50 group-hover:opacity-100 transition-opacity"
            />
            LeetCode
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full bg-[#c8f135] text-[#0a0a0a] font-semibold text-xs hover:bg-[#d4f550] transition-colors"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href="#contact"
          className="md:hidden px-4 py-1.5 rounded-full bg-[#c8f135] text-[#0a0a0a] font-semibold text-xs"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
