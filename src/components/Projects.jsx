import React, { useState } from 'react';

const PROJECTS = [
  {
    title: "SmartSpend AI",
    category: "Full-Stack · AI",
    year: "2026",
    description:
      "Intelligent multi-platform expense management utility featuring automated receipt data extraction via Gemini API and conversational insight streams. Built with React web + React Native mobile sharing a single ASP.NET Core backend.",
    tags: ["React", "React Native", "ASP.NET Core", "Gemini API", "Expo"],
    color: "#c8f135",
    size: "large",
    link: "https://github.com/Pratyakshgupta887qwert/SmartSpend.git",
  },
  {
    title: "SyncSphere",
    category: "Backend · Full-Stack",
    year: "2026",
    description:
      "Global meeting scheduler with accurate UTC normalization, real-time timezone conversion via Luxon, and a scalable REST API architecture. Built with React, C# .NET 8, and MongoDB.",
    tags: ["React", "C# .NET 8", "MongoDB", "REST API", "Luxon"],
    color: "#e8e8e8",
    size: "small",
    link: "https://github.com/Pratyakshgupta887qwert/SyncSphere.git",
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
    link: "https://github.com/Pratyakshgupta887qwert/Deep-learning-AI-ML.git",
  },
  {
    title: "TechVerse",
    category: "Full-Stack · Community",
    year: "2026",
    description:
      "A community-driven platform curating and sharing the coolest tech trends, news, and innovations in a modern, clean UI. TechVerse bridges the gap between content consumption and community building. It allows tech enthusiasts and developers to submit deep-dive articles while actively shaping the platform through open-source GitHub contributions. The project focuses on scaling engagement by integrating a dedicated community space (like Discord), leveraging author networks for organic growth, and transitioning passive readers into active contributors through peer reviews, upvoting systems, and collaborative development.",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Community"],
    color: "#c8f135",
    size: "large",
    link: "https://github.com/Pratyakshgupta887qwert/TechVerse.git",
  },
  {
    title: "WhatsApp Bulk Message Sender",
    category: "Automation · Scripting",
    year: "2025",
    description:
      "A Python automation tool to send WhatsApp messages in bulk using Selenium and Excel. Safely message up to 100-120 contacts at a time, with automatic delays to avoid account blocking. Perfect for event organizers, businesses, and teams managing large contact lists.",
    tags: ["Python", "Selenium", "Excel", "Automation", "WhatsApp"],
    color: "#888",
    size: "small",
    link: "https://github.com/Pratyakshgupta887qwert/Whatsapp-bulk-messenger.git",
  },
  {
    title: "Loftune",
    category: "Full-Stack · API",
    year: "2025",
    description:
      "🎧 Mood-based playlist + aesthetic generator. Pick a vibe, get a Spotify playlist, color palette, GIFs, and a quote. Built with React, Tailwind, and public APIs.",
    tags: ["React", "Tailwind", "Spotify API", "Giphy API", "Quotes API"],
    color: "#888",
    size: "small",
    link: "https://github.com/Pratyakshgupta887qwert/Loftune.git",
  },
  {
    title: "Hauntly",
    category: "Full-Stack · API",
    year: "2025",
    description:
      "A full-stack anonymous confession platform where users can post, react, and comment — no accounts, no identities. Built with React, Tailwind, and public APIs.",
    tags: ["React", "Tailwind", "Express", "MongoDB", "REST API"],
    color: "#888",
    size: "small",
    link: "https://github.com/Pratyakshgupta887qwert/Hauntly-confessionsWall.git",
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
              FEATURED &amp;{" "}
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
                <p className="text-sm text-gray-500 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-[#111] text-sky-500 border border-sky-800 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
