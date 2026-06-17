import React, { useState } from 'react';

const PROJECTS = [
  {
    title: "SmartSpend AI",
    category: "Full-Stack · AI",
    year: "2025",
    description:
      "Intelligent multi-platform expense management utility featuring automated receipt data extraction via Gemini API and conversational insight streams. Built with React web + React Native mobile sharing a single ASP.NET Core backend.",
    tags: ["React", "React Native", "ASP.NET Core", "Gemini API", "Expo"],
    color: "#c8f135",
    size: "large",
    link: "#",
  },
  {
    title: "SyncSphere",
    category: "Backend · Full-Stack",
    year: "2024",
    description:
      "Global meeting scheduler with accurate UTC normalization, real-time timezone conversion via Luxon, and a scalable REST API architecture. Built with React, C# .NET 8, and MongoDB.",
    tags: ["React", "C# .NET 8", "MongoDB", "REST API", "Luxon"],
    color: "#e8e8e8",
    size: "small",
    link: "https://github.com/Pratyakshgupta887qwert",
  },
  {
    title: "Dental Caries Detection",
    category: "Deep Learning · CV",
    year: "2024",
    description:
      "CNN model using TensorFlow & Keras for binary classification of dental caries. Trained for 100 epochs with data augmentation. Evaluated with confusion matrix, ROC curve, accuracy, sensitivity, and specificity.",
    tags: ["Python", "TensorFlow", "Keras", "CNN", "Google Colab"],
    color: "#888",
    size: "small",
    link: "https://github.com/Pratyakshgupta887qwert",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#555] font-semibold mb-2">
              Selected Work
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-[#e8e8e8] uppercase leading-none"
            >
              FEATURED<br />
              <span style={{ WebkitTextStroke: '1.5px #333', color: 'transparent' }}>
                PROJECTS
              </span>
            </h2>
          </div>
          <a
            href="https://github.com/Pratyakshgupta887qwert"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#c8f135] transition-colors font-medium"
          >
            All on GitHub <span>→</span>
          </a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative rounded-2xl border bg-[#0d0d0d] p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                project.size === 'large' ? 'md:col-span-2 min-h-[360px]' : 'md:col-span-1 min-h-[360px]'
              } ${
                hovered === index
                  ? 'border-[#2a2a2a] bg-[#111]'
                  : 'border-[#141414]'
              }`}
            >
              {/* Top row */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#444] block mb-1">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#333]">{project.year}</span>
                  </div>
                  {/* Arrow icon */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hovered === index ? 'bg-[#c8f135] text-[#0a0a0a]' : 'bg-[#161616] text-[#444]'
                    }`}
                  >
                    <span className="text-sm">↗</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-[#e8e8e8] tracking-tight leading-tight mb-4">
                  {project.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-[#111] text-[#555] border border-[#1a1a1a] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 1st Prize callout */}

<div className="mt-6 rounded-2xl border border-[#1a1a1a] bg-[#c8f135]/5 p-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <img
  src="Harvard_University_coat_of_arms.svg"
  alt="Trophy"
  className="w-8 h-8 object-contain"
/>
            <div>
              <p className="font-bold text-[#e8e8e8] text-sm"> Aspire Leaders Program 2026 (Global Cohort)</p>
              <p className="text-xs text-[#555] mt-0.5">Aspire Institute , New York, USA · Apr 2026</p>
            </div>
          </div>
          <span className="text-xs text-[#c8f135] font-semibold tracking-wider uppercase">Global leadership initiative supported by Harvard Business School faculty</span>
        </div>

        <div className="mt-6 rounded-2xl border border-[#1a1a1a] bg-[#c8f135]/5 p-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <img
  src="unnamed.webp"
  alt="Trophy"
  className="w-8 h-8 object-contain"
/>
            <div>
              <p className="font-bold text-[#e8e8e8] text-sm">1st Prize — Quantathon, TechNavya 2025</p>
              <p className="text-xs text-[#555] mt-0.5">GLA University · ₹10,000 Cash Award · Feb 2025</p>
            </div>
          </div>
          <span className="text-xs text-[#c8f135] font-semibold tracking-wider uppercase">Competition Winner</span>
        </div>
      </div>
    </section>
  );
}
