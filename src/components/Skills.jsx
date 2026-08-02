import React, { useState } from 'react';

const SKILL_GROUPS = [
  {
    domain: "Frontend",
    skills: [
      { name: "Html", icon: "html" },
      { name: "React", icon: "react" },
      // { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "CSS", icon: "css" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Redux", icon: "redux" },
      { name: "Vite", icon: "vite" },
      { name: "Vue", icon: "vue" },
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
      { name: "SpringBoot", icon: "spring" },
      // { name: "Node.js", icon: "nodejs" },
      { name: "ASP.NET", icon: "dotnet" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Postman", icon: "postman" },
      { name: "Power", icon: "powershell" },
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
      { name: "PostgreSQL", icon: "postgres" },
    ],
  },
  {
    domain: "Cloud",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "Google Cloud", icon: "gcp" },
      { name: "Azure", icon: "azure" },
      { name: "Linux", icon: "linux" },
      { name: "Ubuntu", icon: "ubuntu" },
    ],
  },

   {
    domain: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "npm", icon: "npm" },
      { name: "VS Code", icon: "vscode" },
      { name: "Notion", icon: "notion" },
      { name: "Obsidian", icon: "obsidian" },
      { name: "Vercel", icon: "vercel" },
      { name: "VisualStudio", icon: "visualstudio" },
      { name: "VSCode", icon: "vscode" },
    ],
  },

  {
    domain: "Languages",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "C#", icon: "cs" },
      { name: "Java", icon: "java" },
      { name: "C", icon: "c" },
      { name: "Python", icon: "python" },
      { name: "Rust", icon: "rust" },
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
                <span className="text-[13px] uppercase tracking-[0.3em] text-[#555] font-bold w-24 shrink-0">
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
                        width={35}
                        height={28}
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[12px] text-[#555] group-hover/skill:text-[#888] transition-colors font-mono">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
