import React from 'react';

const ACHIEVEMENTS = [
  {
    title: "Aspire Leaders Program 2026 (Global Cohort)",
    org: "Aspire Institute, New York, USA",
    date: "Apr 2026",
    tag: "Global Leadership Initiative",
    tagline: "Supported by Harvard Business School faculty",
    logo: "Harvard_University_coat_of_arms.svg",
    logoAlt: "Aspire Institute",
  },
  {
    title: "1st Prize — Quantathon, TechNavya 2025",
    org: "GLA University · ₹10,000 Cash Award",
    date: "Feb 2025",
    tag: "Competition Winner",
    tagline: "Analytical, strategic thinking & problem-solving",
    logo: "unnamed.webp",
    logoAlt: "Quantathon Trophy",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#555] font-semibold mb-2">
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#e8e8e8] uppercase leading-none">
            ACHIEVEMENTS &amp;{" "}
            <span style={{ WebkitTextStroke: "1.5px #333", color: "transparent" }}>
              HONORS
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {ACHIEVEMENTS.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#1a1a1a] bg-[#c8f135]/5 hover:bg-[#c8f135]/[0.07] hover:border-[#c8f135]/20 transition-all duration-300 p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                {/* Left — logo + text */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#1e1e1e] flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                    <img
                      src={item.logo}
                      alt={item.logoAlt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-black text-[#e8e8e8] text-sm leading-snug">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#555] mt-0.5">
                      {item.org} · <span className="font-mono">{item.date}</span>
                    </p>
                    <p className="text-[11px] text-[#444] mt-1 italic">
                      {item.tagline}
                    </p>
                  </div>
                </div>

                {/* Right — tag pill */}
                <span className="shrink-0 text-[10px] text-[#c8f135] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-[#c8f135]/20 bg-[#c8f135]/10 self-start sm:self-center whitespace-nowrap">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
