import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Opens default mail client with prefilled content
    const mailto = `mailto:pratyakshgupta887@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;

    setTimeout(() => setStatus('sent'), 1000);
  };

  return (
    <section id="contact" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-soft)] font-semibold mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text)] uppercase leading-none">
            SEND ME
            <br />
            <span style={{ WebkitTextStroke: '1.5px var(--muted)', color: 'transparent' }}>
              A MESSAGE
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left — info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <p className="text-sm text-[var(--text-soft)] leading-relaxed">
              Have a project in mind, want to collaborate, or just want to say hi? Fill out the form and I'll get back to you as soon as possible.
            </p>

            {/* Contact cards */}
            <div className="space-y-3 mt-2">
              <a
                href="mailto:pratyakshgupta887@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 hover:border-[var(--accent)]/20 hover:bg-[var(--accent)]/5 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)]/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-soft)" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-semibold">Email</p>
                  <p className="text-xs text-[var(--text-soft)] truncate group-hover:text-[var(--accent)] transition-colors">pratyakshgupta887@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/pratyaksh-gupta"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 hover:border-[var(--accent)]/20 hover:bg-[var(--accent)]/5 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)]/20 transition-colors overflow-hidden p-1.5">
                  <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-semibold">LinkedIn</p>
                  <p className="text-xs text-[var(--text-soft)] group-hover:text-[var(--accent)] transition-colors">Pratyaksh Gupta</p>
                </div>
              </a>

              <a
                href="https://github.com/Pratyakshgupta887qwert"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 hover:border-[var(--accent)]/20 hover:bg-[var(--accent)]/5 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)]/20 transition-colors overflow-hidden p-1.5">
                  <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-semibold">GitHub</p>
                  <p className="text-xs text-[var(--text-soft)] group-hover:text-[var(--accent)] transition-colors">Pratyakshgupta887qwert</p>
                </div>
              </a>

              <a
                href="tel:+919927230076"
                className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 hover:border-[var(--accent)]/20 hover:bg-[var(--accent)]/5 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)]/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-soft)" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.19-1.19a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-semibold">Phone</p>
                  <p className="text-xs text-[var(--text-soft)] group-hover:text-[var(--accent)] transition-colors">+91 99272 30076</p>
                </div>
              </a>
            </div>

            {/* Availability badge */}
            <div className="mt-2 rounded-2xl border border-[var(--accent)]/10 bg-[var(--accent)]/5 p-4 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
              <p className="text-xs text-[var(--text-soft)]">
                Currently <span className="text-[var(--accent)] font-bold">available</span> for full-time roles and freelance projects.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="w-14 h-14 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p className="text-base font-black text-[var(--text)]">Message sent!</p>
                  <p className="text-xs text-[var(--text-soft)] text-center">Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => { setStatus(null); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="mt-2 text-xs text-[var(--accent)] font-semibold hover:underline"
                  >
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-semibold">
                        Name <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Pratyaksh Gupta"
                        className="w-full h-11 px-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-sm text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)]/30 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-semibold">
                        Email <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full h-11 px-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-sm text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)]/30 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-semibold">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration / Job opportunity / Just saying hi"
                      className="w-full h-11 px-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-sm text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)]/30 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-semibold">
                      Message <span className="text-[var(--accent)]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Hello Pratyaksh, I'd like to talk about..."
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-sm text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)]/30 transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full h-12 rounded-xl bg-[var(--accent)] text-[var(--bg)] font-black text-sm hover:bg-[var(--text-soft)] active:scale-[0.98] transition-all duration-150 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--bg)" strokeWidth="2.5">
                          <path d="M21 12a9 9 0 11-6.219-8.56"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--bg)" strokeWidth="2.5">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-[var(--muted)] text-center">
                    Clicking send will open your mail client · or email directly at{' '}
                    <a href="mailto:pratyakshgupta887@gmail.com" className="text-[var(--text-soft)] hover:text-[var(--accent)] transition-colors">
                      pratyakshgupta887@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


