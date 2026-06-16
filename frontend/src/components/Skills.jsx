import React, { useState } from 'react';

const SKILL_GROUPS = [
  {
    domain: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "Redux", icon: "redux" },
      { name: "Vite", icon: "vite" },
    ],
  },
  {
    domain: "Mobile",
    skills: [
      { name: "React Native", icon: "react" },
      { name: "Expo", icon: "expo" },
    ],
  },
  {
    domain: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "ASP.NET", icon: "dotnet" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
    ],
  },
  {
    domain: "AI / ML",
    skills: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Keras", icon: "keras" },
      { name: "PyTorch", icon: "pytorch" },
    ],
  },
  {
    domain: "Database",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    domain: "Tools & Cloud",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "AWS", icon: "aws" },
      { name: "Linux", icon: "linux" },
      { name: "VS Code", icon: "vscode" },
      { name: "Docker", icon: "docker" },
    ],
  },
  {
    domain: "Languages",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "C#", icon: "cs" },
      { name: "Java", icon: "java" },
      { name: "C", icon: "c" },
    ],
  },
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(null);

  return (
    <section id="skills" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[#555] font-semibold mb-2">
            Technical Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#e8e8e8] uppercase leading-none">
            SKILLS &amp;{" "}
            <span style={{ WebkitTextStroke: "1.5px #333", color: "transparent" }}>
              STACK
            </span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="space-y-10">
          {SKILL_GROUPS.map((group, gIdx) => (
            <div
              key={gIdx}
              className="group"
              onMouseEnter={() => setActiveGroup(gIdx)}
              onMouseLeave={() => setActiveGroup(null)}
            >
              {/* Domain label */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#444] font-semibold w-24 shrink-0">
                  {group.domain}
                </span>
                <div className="flex-1 h-[1px] bg-[#141414]" />
              </div>

              {/* Icon row */}
              <div className="flex flex-wrap gap-3 pl-28">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex flex-col items-center gap-1.5 group/skill"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-200 ${
                        activeGroup === gIdx
                          ? 'border-[#2a2a2a] bg-[#111]'
                          : 'border-[#141414] bg-[#0d0d0d]'
                      } group-hover/skill:border-[#c8f135]/30 group-hover/skill:bg-[#111]`}
                    >
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        width={28}
                        height={28}
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[10px] text-[#444] group-hover/skill:text-[#888] transition-colors font-mono">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications strip */}
        <div className="mt-16 rounded-2xl border border-[#141414] bg-[#0d0d0d] p-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] font-semibold mb-4">
            Certifications
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Oracle Cloud Infrastructure 2025 AI Foundations",
              "Prompting Essentials — Coursera",
              "AI Essentials — Coursera",
              "IT Automation with Python — Coursera",
              "AI & ML — IBM",
            ].map((cert, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-lg bg-[#111] border border-[#1a1a1a] text-[#555] hover:text-[#c8f135] hover:border-[#c8f135]/20 transition-colors cursor-default"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
