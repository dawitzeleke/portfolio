const Contact = (): JSX.Element => {
  return (
    <section
      id="contact"
      className="relative w-full py-24 bg-[#0b0f10] text-white"
    >
      <div className="section-container">
        {/* Section header */}
        <p className="section-label">Contact</p>
        <h2 className="section-heading">
          Get in touch
        </h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? I'll reply within 24–48 hours.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* Left — contact info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {[
                {
                  label: "Email",
                  value: "dawitzeleke92@gmail.com",
                  href: "mailto:dawitzeleke92@gmail.com",
                },
                {
                  label: "Phone",
                  value: "+251 962 235 740",
                  href: "tel:+251962235740",
                },
                {
                  label: "Location",
                  value: "Addis Ababa, Ethiopia",
                },
              ].map((item, i) => (
                <div key={i} className="py-4 border-t border-white/[0.06] first:border-t-0">
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-white/70 hover:text-emerald-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-white/70">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-4">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/dawitzeleke",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/dawit-zeleke/",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/[0.06] bg-white/[0.02] text-white/40 hover:text-white hover:border-white/15 hover:bg-white/[0.04] transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — contact form */}
          <form
            action="https://getform.io/f/bjjjdqdb"
            method="POST"
            className="space-y-5"
          >
            <div>
              <label className="text-xs text-white/30 uppercase tracking-wider" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-white/30 uppercase tracking-wider" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@company.com"
                className="mt-2 w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-white/30 uppercase tracking-wider" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                className="mt-2 w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full justify-center"
            >
              Send message
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="section-container mt-24">
        <div className="py-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © 2026 Dawit Zeleke. Built with React & TypeScript.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/25">
            <a href="https://github.com/dawitzeleke" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/dawit-zeleke/" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:dawitzeleke92@gmail.com" className="hover:text-white/50 transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom subtle gradient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
};

export default Contact;