import { Link } from "react-scroll";
import photo from "../assets/photo.png";

const Home = (): JSX.Element => {
  return (
    <>
      <header
        id="home"
        className="relative w-full min-h-screen overflow-hidden"
        style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        {/* Subtle gradient glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

        <div className="section-container flex flex-col justify-center min-h-screen pt-20 pb-16">
          {/* Hero: Text left + Photo right */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 pt-4 sm:pt-8">
            {/* Left: Status badge, Heading, Description, CTAs, Links */}
            <div className="flex-1 text-center lg:text-left animate-fade-in-up">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/[0.06] px-4 py-1.5 mb-6">
                <span className="status-dot" />
                <span className="text-xs font-mono text-emerald-400/90">Open to opportunities</span>
              </div>

              {/* Big editorial heading */}
              <h1
                className="font-display text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.25rem] font-normal leading-[1.08]"
                style={{ color: "var(--text-heading)" }}
              >
                Hi, I'm{" "}
                <span className="text-emerald-400">Dawit</span>{" "}
                <span className="text-emerald-400">Zeleke</span>
              </h1>

              {/* Description */}
              <p
                className="max-w-lg text-base sm:text-lg mt-6 leading-relaxed"
                style={{ color: "var(--text-tertiary)" }}
              >
                Researcher and Software Engineer. I build full-stack web platforms,
                mobile clients and distributed backends — from the interface people
                touch to the services, data model and infrastructure behind it.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
                <Link
                  to="work"
                  smooth
                  duration={500}
                  className="btn-primary cursor-pointer"
                >
                  View My Work
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <Link
                  to="contact"
                  smooth
                  duration={500}
                  className="btn-ghost cursor-pointer"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Social & contact links row */}
              <div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mt-8 pt-6"
                style={{ borderTop: "1px solid var(--border-default)" }}
              >
                <a
                  href="https://github.com/dawitzeleke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm transition-colors"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/dawit-zeleke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm transition-colors"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 text-sm transition-colors"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                  Résumé
                </a>
              </div>

              <a href="mailto:dawitzeleke92@gmail.com">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mt-3 ">
                <span
                  className="inline-flex items-center gap-1.5 text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" /></svg>
                  dawitzeleke92@gmail.com
                </span>
              </div>
              </a>
            </div>

            {/* Right: Large circular profile photo */}
            <div className="flex-shrink-0 flex flex-col items-center animate-fade-in-up animate-delay-100">
              <div className="relative group">
                {/* Outer ambient glow ring */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-b from-emerald-500/20 via-white/5 to-transparent blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Circular photo */}
                <div
                  className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ border: "2px solid var(--photo-border)" }}
                >
                  <img
                    src={photo}
                    alt="Dawit Zeleke"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Location badge */}
              <div
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg px-3 py-1"
                style={{
                  border: "1px solid var(--loc-badge-border)",
                  backgroundColor: "var(--loc-badge-bg)",
                }}
              >
                <span className="w-2 h-2 rounded-lg bg-emerald-400" />
                <span className="text-xs font-mono" style={{ color: "var(--text-tertiary)" }}>
                  Addis Ababa, ET
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col  gap-4 mt-10 ">
            <h1 style={{ color: "var(--text-heading)" }}>Research Interests</h1>
            <p style={{ color: "var(--text-primary)" }}>- Machine Learning | Data Science | Computer Vision | Deep Learning</p>
          </div>
        </div>
      </header>

      
    </>
  );
};

export default Home;