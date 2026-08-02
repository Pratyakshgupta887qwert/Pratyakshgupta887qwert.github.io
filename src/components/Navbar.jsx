import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
      return;
    }

    document.documentElement.removeAttribute('data-theme');
  }, []);

  const setThemeMode = (mode) => {
    setTheme(mode);

    if (mode === 'system') {
      localStorage.removeItem('theme');
      document.documentElement.removeAttribute('data-theme');
      return;
    }

    localStorage.setItem('theme', mode);
    document.documentElement.dataset.theme = mode;
  };

  const toggleTheme = () => {
    setThemeMode(theme === 'dark' ? 'light' : 'dark');
  };

  const isDark = theme === 'dark';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-[0_10px_35px_rgba(6,20,27,0.14)]' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">


        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
  <img
    src="phto.jpg"
    alt="Profile"
    className="w-10 h-10 rounded-lg object-cover"
  />
</a>

        

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-soft)]">
          <a href="#projects" className="hover:text-[var(--text)] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[var(--text)] transition-colors">Skills</a>
          <a href="#experience" className="hover:text-[var(--text)] transition-colors">Experience</a>

          <a
            href="mailto:pratyakshgupta887@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[var(--text-soft)] hover:text-[var(--text)] transition-colors font-medium group"
          >
            <img
              src="https://skillicons.dev/icons?i=gmail"
              alt="Gmail"
              width={20}
              height={20}
              className="opacity-500 group-hover:opacity-100 transition-opacity"
            />
            Gmail
          </a>

          
          <a
            href="https://www.linkedin.com/in/pratyaksh-gupta-348556299/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[var(--text-soft)] hover:text-[var(--text)] transition-colors font-medium group"
          >
            <img
              src="https://skillicons.dev/icons?i=linkedin"
              alt="LinkedIn"
              width={20}
              height={20}
              className="opacity-500 group-hover:opacity-100 transition-opacity"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/Pratyakshgupta887qwert"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[var(--text-soft)] hover:text-[var(--text)] transition-colors font-medium group"
          >
            <img
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub"
              width={20}
              height={20}
              className="opacity-500 group-hover:opacity-100 transition-opacity"
            />
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/Pratyaksh_Gupta_04/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[var(--text-soft)] hover:text-[var(--text)] transition-colors font-medium group"
          >
            <img
              src="2944960.webp"
              alt="LeetCode"
              width={20}
              height={20}
              className="opacity-500 group-hover:opacity-100 transition-opacity"
            />
            LeetCode
          </a>
          <a
            href="#contact"
            className="px-10 py-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--text-soft)] text-[var(--bg)] font-semibold text-xs shadow-[0_10px_28px_var(--glow)] hover:opacity-90 transition-opacity"
          >
            Contact me
          </a>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
              className="group relative h-10 w-[132px] overflow-hidden rounded-full border bg-[var(--surface)] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_12px_32px_rgba(6,20,27,0.14)] transition-all hover:-translate-y-0.5"
              style={{ borderColor: 'var(--border)' }}
            >
              <span
                className={`absolute inset-y-1 left-1 w-[62px] rounded-full bg-[var(--accent)] shadow-[0_10px_26px_var(--glow)] transition-transform duration-300 ease-out ${
                  isDark ? 'translate-x-[62px]' : 'translate-x-0'
                }`}
              />
              <span className="relative z-10 grid h-full grid-cols-2 items-center text-[11px] font-bold">
                <span className={`inline-flex items-center justify-center gap-1 transition-colors ${isDark ? 'text-[var(--text-soft)]' : 'text-[var(--bg)]'}`}>
                  <span className="text-sm leading-none">☀</span>
                  Light
                </span>
                <span className={`inline-flex items-center justify-center gap-1 transition-colors ${isDark ? 'text-[var(--bg)]' : 'text-[var(--text-soft)]'}`}>
                  <span className="text-sm leading-none">☾</span>
                  Dark
                </span>
              </span>
            </button>
            {theme !== 'system' && (
              <button
                type="button"
                onClick={() => setThemeMode('system')}
                className="text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              >
                System
              </button>
            )}
          </div>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            className="relative h-9 w-[86px] overflow-hidden rounded-full border bg-[var(--surface)] p-1 shadow-[0_8px_24px_rgba(6,20,27,0.12)]"
            style={{ borderColor: 'var(--border)' }}
          >
            <span
              className={`absolute inset-y-1 left-1 w-[39px] rounded-full bg-[var(--accent)] transition-transform duration-300 ease-out ${
                isDark ? 'translate-x-[39px]' : 'translate-x-0'
              }`}
            />
            <span className="relative z-10 grid h-full grid-cols-2 items-center text-sm font-black">
              <span className={isDark ? 'text-[var(--text-soft)]' : 'text-[var(--bg)]'}>☀</span>
              <span className={isDark ? 'text-[var(--bg)]' : 'text-[var(--text-soft)]'}>☾</span>
            </span>
          </button>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--text-soft)] text-[var(--bg)] font-semibold text-xs"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}


