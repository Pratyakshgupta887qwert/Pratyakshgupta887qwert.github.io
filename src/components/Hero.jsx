import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Soft theme glows */}
      <div
        className="absolute top-1/3 right-1/4 w-[520px] h-[520px] rounded-full opacity-20 blur-[130px]"
        style={{ background: 'var(--accent)' }}
      />
      <div
        className="absolute -left-24 bottom-20 w-[360px] h-[360px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'var(--surface-3)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 w-full">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium text-[var(--text)] mb-8 backdrop-blur-sm shadow-[0_12px_35px_rgba(6,20,27,0.18)]" style={{ background: 'color-mix(in srgb, var(--surface-2) 72%, transparent)', borderColor: 'var(--border)' }}>
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          Available for opportunities
        </div>

        {/* Name — large display like Portavia */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-soft)] font-semibold mb-3">
            Full-Stack Developer (Java & .NET) | AI & Machine Learning Engineer
          </p>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--text)] via-[var(--text-soft)] to-[var(--text)] uppercase">
            PRATYAKSH
          </h1>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-none tracking-tight uppercase" style={{ WebkitTextStroke: '2px var(--muted)', color: 'transparent' }}>
            GUPTA
          </h1>
        </div>

        {/* Tagline + CTA row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10">
          <p className="text-[var(--text-soft)] text-base leading-relaxed max-w-sm">
            Building cross-platform applications with intelligent backends — from React Native to ASP.NET Core to ML pipelines — I craft seamless experiences that blend functionality and innovation & Open-Source Contributor
          </p>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#projects"
              className="h-11 px-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--text-soft)] text-[var(--bg)] font-semibold text-sm shadow-[0_14px_40px_var(--glow)] hover:shadow-[0_16px_46px_var(--glow)] transition-all"
            >
              View My Work →
            </a>
            <a
              href="https://drive.google.com/file/d/1VYwi_UAAt9g6dIrPU2HiKXIIepKiczWH/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="h-11 px-6 inline-flex items-center justify-center rounded-full border bg-[var(--surface)] text-[var(--text-soft)] font-medium text-sm hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors" style={{ borderColor: 'var(--border)' }}
            >
              View My Resume →
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-3 max-w-md">
          <div className="rounded-2xl border bg-[var(--surface)] p-4 shadow-[0_12px_35px_rgba(6,20,27,0.12)]" style={{ borderColor: 'var(--border)' }}>
            <p className="text-2xl font-black text-[var(--accent)]">7+</p>
            <p className="text-xs text-[var(--text-soft)] mt-0.5 uppercase tracking-wider">Projects</p>
          </div>
          <div className="rounded-2xl border bg-[var(--surface-2)] p-4 shadow-[0_12px_35px_rgba(6,20,27,0.12)]" style={{ borderColor: 'var(--border)' }}>
            <p className="text-2xl font-black text-[var(--text)]">10+</p>
            <p className="text-xs text-[var(--text-soft)] mt-0.5 uppercase tracking-wider">Certifications</p>
          </div>
          <div className="rounded-2xl border bg-[var(--surface)] p-4 shadow-[0_12px_35px_rgba(6,20,27,0.12)]" style={{ borderColor: 'var(--border)' }}>
            <p className="text-2xl font-black text-[var(--text)]">1st</p>
            <p className="text-xs text-[var(--text-soft)] mt-0.5 uppercase tracking-wider">Prize Winner</p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted)] text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--muted)] to-transparent" />
      </div>
    </section>
  );
}


