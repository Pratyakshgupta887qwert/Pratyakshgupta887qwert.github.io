import React, { useState } from 'react';

const HISTORY = [
  {
    role: "Internship Trainee — Full Stack Engineer",
    organization: "Esceion Technologies Pvt. Ltd. (DevsLane)",
    period: "Jun 2025 – Nov 2025",
    type: "Internship",
    logo: "devslane_logo.jpg",
    details:
      "Gained foundational knowledge of the full-stack ecosystem including HTML, CSS, JavaScript, Tailwind, React.js, Redux, REST APIs, TypeScript, and backend engineering for developing production-grade frontend and backend software.",
    tags: ["React.js", "Redux", "TypeScript", "Tailwind", "REST API"],
    highlight: true,
  },
  {
    role: "Management Head",
    organization: "Cyberonites Club, GLA University",
    period: "Jul 2025 – Nov 2025",
    type: "Leadership",
    logo: "gla new logo.png",
    details:
      "Directed organizational mechanics, structural deployment layouts, and team delivery milestones for technical initiatives and events.",
    tags: ["Leadership", "Event Management", "Team Coordination"],
    highlight: false,
  },
  {
    role: "Digital Content Head",
    organization: "Cyberonites Club, GLA University",
    period: "Apr 2024 – Jul 2025",
    type: "Leadership",
    logo: "gla new logo.png",
    details:
      "Managed digital media systems, structured content pipelines, and dynamic outreach scaling campaigns across platforms.",
    tags: ["Digital Media", "Content Strategy", "Outreach"],
    highlight: false,
  },
  {
    role: "Technical Team Member",
    organization: "Cyberonites Club, GLA University",
    period: "Oct 2023 – Apr 2024",
    type: "Technical",
    logo: "gla new logo.png",
    details:
      "Contributed to foundational backend structures, local tool builds, and event coordination setups during early club operations.",
    tags: ["Backend", "Tools", "Events"],
    highlight: false,
  },
];

const EDUCATION = [
  {
    degree: "B.Tech Computer Science",
    institution: "GLA University, Mathura",
    period: "Expected Jun 2027",
    logo: "unnamed.webp",
  },
  {
    degree: "Intermediate (12th)",
    institution: "St. Fidelis Sr. Sec. School, Aligarh",
    period: "May 2023",
    logo: "stfidelis.jpg",
  },
  {
    degree: "High School (10th)",
    institution: "St. Fidelis Sr. Sec. School, Aligarh",
    period: "May 2021",
    logo: "stfidelis.jpg",
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="experience" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[#555] font-semibold mb-2">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#e8e8e8] uppercase leading-none">
            EXPERIENCE &amp;{" "}
            <span style={{ WebkitTextStroke: "1.5px #333", color: "transparent" }}>
              JOURNEY
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Experience timeline */}
          <div className="lg:col-span-2 space-y-3">
            {HISTORY.map((item, index) => (
              <div
                key={index}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className={`rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden ${
                  expandedIndex === index
                    ? 'border-[#c8f135]/20 bg-[#0f0f0f]'
                    : 'border-[#141414] bg-[#0d0d0d] hover:border-[#1e1e1e]'
                }`}
              >
                <div className="p-5 flex items-start gap-4">
                  {/* Logo */}
                  <div className="w-10 h-10 rounded-xl bg-[#111] border border-[#1a1a1a] flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                    <img src={item.logo} alt={item.organization} className="w-full h-full object-contain" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span
                        className={`text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-md ${
                          item.highlight
                            ? 'bg-[#c8f135]/10 text-[#c8f135]'
                            : 'bg-[#111] text-[#444]'
                        }`}
                      >
                        {item.type}
                      </span>
                      <span className="text-[10px] font-mono text-[#444]">{item.period}</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#e8e8e8] leading-snug">
                      {item.role}
                    </h3>
                    <p className="text-xs text-[#555] mt-0.5">{item.organization}</p>
                  </div>

                  <span className={`text-[#444] text-sm mt-1 transition-transform duration-200 shrink-0 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </div>

                {expandedIndex === index && (
                  <div className="px-5 pb-5 border-t border-[#141414] pt-4">
                    <p className="text-sm text-[#666] leading-relaxed mb-3">
                      {item.details}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] px-2 py-0.5 rounded bg-[#111] text-[#444] border border-[#1a1a1a] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Education panel */}
          <div className="lg:col-span-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] font-semibold mb-4">
              Education
            </p>
            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#141414] bg-[#0d0d0d] p-5 flex items-start gap-3"
                >
                  {/* Logo */}
                  <div className="w-9 h-9 rounded-xl bg-[#111] border border-[#1a1a1a] flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-sm font-bold text-[#e8e8e8] leading-snug">{edu.degree}</p>
                      <span className="text-sm font-black text-[#c8f135] shrink-0">{edu.score}</span>
                    </div>
                    <p className="text-xs text-[#555]">{edu.institution}</p>
                    <p className="text-[10px] font-mono text-[#333] mt-1">{edu.period}</p>
                  </div>
                </div>
              ))}

              {/* Open source */}
              <div className="rounded-2xl border border-[#c8f135]/10 bg-[#c8f135]/5 p-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#c8f135]/10 border border-[#c8f135]/20 flex items-center justify-center shrink-0">
                  <img src="open source logo.jpg" alt="GitHub" className="w-5 h-5 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#c8f135] mb-0.5">GSSoC 2025–26</p>
                  <p className="text-xs text-[#666]">Open-Source Contributor — GirlScript Summer of Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
