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

      {/* Lime glow blob */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px]"
        style={{ background: '#c8f135' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 w-full">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-[#111]/60 text-xs font-medium text-[#888] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#c8f135] animate-pulse" />
          Available for opportunities
        </div>

        {/* Name — large display like Portavia */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold mb-3">
            Full-Stack & .NET Developer & ML Engineer
          </p>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-none tracking-tight text-[#e8e8e8] uppercase">
            PRATYAKSH
          </h1>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-none tracking-tight uppercase" style={{ WebkitTextStroke: '2px #333', color: 'transparent' }}>
            GUPTA
          </h1>
        </div>

        {/* Tagline + CTA row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10">
          <p className="text-gray-500 text-base leading-relaxed max-w-sm">
            Building cross-platform applications with intelligent backends — from React Native to ASP.NET Core to ML pipelines — I craft seamless experiences that blend functionality and innovation & Open-Source Contributor
          </p>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#projects"
              className="h-11 px-6 inline-flex items-center justify-center rounded-full bg-[#c8f135] text-[#0a0a0a] font-semibold text-sm hover:bg-[#d4f550] transition-colors"
            >
              View My Work
            </a>
            <a
              href="https://github.com/Pratyakshgupta887qwert"
              target="_blank"
              rel="noreferrer"
              className="h-11 px-6 inline-flex items-center justify-center rounded-full border border-[#1e1e1e] text-[#888] font-medium text-sm hover:text-[#e8e8e8] hover:border-[#333] transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 pt-8 border-t border-[#111] grid grid-cols-3 gap-6 max-w-md">
          <div>
            <p className="text-2xl font-black text-[#c8f135]">6+</p>
            <p className="text-xs text-[#555] mt-0.5 uppercase tracking-wider">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-black text-[#e8e8e8]">10+</p>
            <p className="text-xs text-[#555] mt-0.5 uppercase tracking-wider">Certifications</p>
          </div>
          <div>
            <p className="text-2xl font-black text-[#e8e8e8]">1st</p>
            <p className="text-xs text-[#555] mt-0.5 uppercase tracking-wider">Prize Winner</p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444] text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#444] to-transparent" />
      </div>
    </section>
  );
}
