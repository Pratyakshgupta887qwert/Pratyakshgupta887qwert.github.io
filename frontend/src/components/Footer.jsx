import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-24">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-[#555] font-semibold mb-4">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-[#e8e8e8] uppercase leading-none mb-10">
          LET'S BUILD
          <br />
          <span style={{ WebkitTextStroke: '1.5px #333', color: 'transparent' }}>
            TOGETHER
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 mb-16">
          <a
            href="mailto:pratyakshgupta887@gmail.com"
            className="h-12 px-7 inline-flex items-center justify-center rounded-full bg-[#c8f135] text-[#0a0a0a] font-bold text-sm hover:bg-[#d4f550] transition-colors"
          >
            pratyakshgupta887@gmail.com
          </a>
          <a
            href="mailto:pratyaksh.gupta_cs23@gla.ac.in"
            className="h-12 px-7 inline-flex items-center justify-center rounded-full border border-[#1e1e1e] text-[#666] font-medium text-sm hover:text-[#e8e8e8] hover:border-[#333] transition-colors"
          >
            pratyaksh.gupta_cs23@gla.ac.in
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6 text-sm">
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
            href="tel:+919927230076"
            className="text-[#555] hover:text-[#c8f135] transition-colors font-medium"
          >
            +91 99272 30076
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#0f0f0f] bg-[#c8f135]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-xs font-bold text-[#0a0a0a] tracking-wider uppercase">
            Pratyaksh Gupta · Full-Stack Developer
          </span>
          <span className="text-xs font-mono text-[#3a4a00]">
            © {new Date().getFullYear()} · Built with React &amp; Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}
