import React, { useState } from 'react';

const CERTIFICATIONS = [
  {
    id: 1,
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    issuerLogo: "oracle.png",
    detail:
      "Validates foundational knowledge of AI/ML services on Oracle Cloud Infrastructure including AI services, data science, and machine learning concepts.",
    issued: "18 Oct 2025",
    expires: "18 Oct 2027",
    credentialId: "102925541OCI25AICFA",
    color: "var(--accent)",
    category: "Cloud & AI",
    image: "certificatea.png",
  },
  {
    id: 2,
    name: "Google Prompting Essentials Specialization",
    issuer: "Coursera / Google",
    issuerLogo: "coursera.png",
    detail:
      "Covers effective prompt engineering techniques, chain-of-thought prompting, few-shot learning, and best practices for working with large language models.",
    issued: "Dec 2024",
    expires: "No Expiry",
    credentialId: "COURSERA-PROMPT-2024",
    color: "#4285f4",
    category: "AI / LLM",
    image: "12.png",
  },
  {
    id: 3,
    name: "Google AI Essentials",
    issuer: "Coursera / Google",
    issuerLogo: "coursera.png",
    detail:
      "Introduces core AI concepts, machine learning fundamentals, responsible AI practices, and how to apply AI tools effectively in everyday workflows.",
    issued: "Nov 2024",
    expires: "No Expiry",
    credentialId: "COURSERA-AI-ESS-2024",
    color: "#4285f4",
    category: "AI / ML",
    image: "13.png",
  },
  {
    id: 4,
    name: "Google IT Automation with Python",
    issuer: "Coursera / Google",
    issuerLogo: "coursera.png",
    detail:
      "Professional certificate covering Python scripting, automating OS tasks, managing files & processes, using Git, and basic IT automation workflows.",
    issued: "Oct 2024",
    expires: "No Expiry",
    credentialId: "COURSERA-PY-AUTO-2024",
    color: "#3776ab",
    category: "Python / Automation",
    image: "14.jpg",
  },
  {
    id: 5,
    name: "AI & Machine Learning",
    issuer: "IBM Skills Build",
    issuerLogo: "ibm.png",
    detail:
      "Covers supervised & unsupervised learning, neural networks, deep learning, model evaluation, and end-to-end ML pipeline construction using Python.",
    issued: "Sep 2024",
    expires: "No Expiry",
    credentialId: "IBM-AI-ML-2024",
    color: "#1f70c1",
    category: "ML / Deep Learning",
    image: "15.jpg",
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState(null);
  const [imageModal, setImageModal] = useState(false);

  const active = CERTIFICATIONS.find((c) => c.id === selected) || null;

  return (
    <section id="certifications" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-soft)] font-semibold mb-2">
            Verified Credentials
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text)] uppercase leading-none">
            CERTIFICATIONS &amp;{" "}
            <span style={{ WebkitTextStroke: "1.5px var(--muted)", color: "transparent" }}>
            LICENSES
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          {/* Left — cert list */}
          <div className="lg:col-span-2 space-y-2">
            {CERTIFICATIONS.map((cert) => (
              <button
                key={cert.id}
                onClick={() => setSelected(selected === cert.id ? null : cert.id)}
                className={`w-full text-left rounded-2xl border p-4 flex items-center gap-4 transition-all duration-200 group ${
                  selected === cert.id
                    ? "border-[var(--accent)]/25 bg-[var(--accent)]/5"
                    : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] hover:bg-[var(--surface)]"
                }`}
              >
                {/* Logo */}
                <div className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={cert.issuerLogo}
                    alt={cert.issuer}
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                </div>

                {/* Name + issuer */}
                <div className="min-w-0 flex-1">
                  <p className={`text-xs font-bold leading-snug truncate transition-colors ${
                    selected === cert.id ? "text-[var(--text)]" : "text-[var(--text)] group-hover:text-[var(--text)]"
                  }`}>
                    {cert.name}
                  </p>
                  <p className="text-[10px] text-[var(--muted)] mt-0.5">{cert.issuer}</p>
                </div>

                {/* Arrow */}
                <span className={`text-xs transition-all duration-200 shrink-0 ${
                  selected === cert.id ? "text-[var(--accent)] rotate-90" : "text-[var(--muted)]"
                }`}>
                  →
                </span>
              </button>
            ))}
          </div>

          {/* Right — detail panel */}
          <div className="lg:col-span-3">
            {active ? (
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 h-full flex flex-col gap-6">

                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--surface)] border border-[var(--border-strong)] flex items-center justify-center shrink-0">
                    <img
                      src={active.issuerLogo}
                      alt={active.issuer}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <span
                      className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-0.5 rounded-md mb-2 inline-block"
                      style={{ background: `${active.color}15`, color: active.color }}
                    >
                      {active.category}
                    </span>
                    <h3 className="text-base font-black text-[var(--text)] leading-snug">
                      {active.name}
                    </h3>
                    <p className="text-xs text-[var(--text-soft)] mt-1">{active.issuer}</p>
                  </div>
                </div>

                {/* Detail */}
                <p className="text-sm text-[var(--text-soft)] leading-relaxed border-t border-[var(--border)] pt-5">
                  {active.detail}
                </p>

                {/* Meta grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-[var(--surface)] border border-[var(--border)] p-3">
                    <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] font-semibold mb-1">
                      Issued
                    </p>
                    <p className="text-sm font-black text-[var(--text)]">{active.issued}</p>
                  </div>
                  <div className="rounded-xl bg-[var(--surface)] border border-[var(--border)] p-3">
                    <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] font-semibold mb-1">
                      Expires
                    </p>
                    <p
                      className="text-sm font-black"
                      style={{ color: active.expires === "No Expiry" ? "var(--accent)" : "var(--text)" }}
                    >
                      {active.expires}
                    </p>
                  </div>
                  <div className="rounded-xl bg-[var(--surface)] border border-[var(--border)] p-3">
                    <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] font-semibold mb-1">
                      Credential ID
                    </p>
                    <p className="text-[10px] font-mono text-[var(--text-soft)] leading-tight break-all">
                      {active.credentialId}
                    </p>
                  </div>
                </div>

                {/* Certificate image area */}
                <div
                  className="rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--bg)] flex flex-col items-center justify-center gap-2 p-8 cursor-pointer hover:border-[var(--accent)]/30 transition-colors group/img"
                  onClick={() => setImageModal(true)}
                >
                  {active.image ? (
                    <img
                      src={active.image}
                      alt={`${active.name} certificate`}
                      className="max-w-full rounded-lg"
                    />
                  ) : (
                    <>
                      <div className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center group-hover/img:border-[var(--accent)]/20 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M3 9h18M9 21V9" />
                        </svg>
                      </div>
                      <p className="text-xs text-[var(--muted)] group-hover/img:text-[var(--text-soft)] transition-colors text-center">
                        Drop certificate image here
                        <br />
                        <span className="text-[10px] text-[var(--muted)]">or click to upload</span>
                      </p>
                    </>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-1">
                  <a
                    href="#"
                    className="flex-1 h-9 rounded-xl bg-[var(--accent)] text-[var(--bg)] text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[var(--text-soft)] transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                    Verify Credential
                  </a>
                  <a
                    href="#"
                    className="flex-1 h-9 rounded-xl border border-[var(--border-strong)] text-[var(--text-soft)] text-xs font-medium flex items-center justify-center gap-1.5 hover:border-[var(--muted)] hover:text-[var(--text)] transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            ) : (
              /* Empty state */
              <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--bg)] h-full min-h-[340px] flex flex-col items-center justify-center gap-3 p-8">
                <div className="w-14 h-14 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="15" y2="17" />
                    <polyline points="9 9 9 9" />
                  </svg>
                </div>
                <p className="text-sm text-[var(--muted)] text-center">
                  Select a certification
                  <br />
                  <span className="text-[11px] text-[var(--muted)]">to view full details</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom summary strip */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="text-2xl font-black text-[var(--accent)]">5+</p>
            <p className="text-xs text-[var(--muted)] mt-0.5 uppercase tracking-wider">Certificates</p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="text-2xl font-black text-[var(--text)]">3+</p>
            <p className="text-xs text-[var(--muted)] mt-0.5 uppercase tracking-wider">Platforms</p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="text-2xl font-black text-[var(--text)]">Emerging technologies</p>
            <p className="text-xs text-[var(--muted)] mt-0.5 uppercase tracking-wider">Focus Area</p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="text-2xl font-black text-[var(--accent)]">2026</p>
            <p className="text-xs text-[var(--muted)] mt-0.5 uppercase tracking-wider">Latest</p>
          </div>
        </div>
      </div>
    </section>
  );
}


