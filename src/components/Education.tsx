const Education = (): JSX.Element => {
  return (
    <section
      id="education"
      className="relative w-full py-24"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <div className="section-container">
        {/* Section header */}
        <p className="section-label">Education</p>
        <h2 className="section-heading">
          Academic background
        </h2>
        <p className="section-subtitle">
          Where I studied and the foundations that shaped my engineering career.
        </p>

        {/* Education entries */}
        <div className="mt-16 space-y-0">
          {/* AAU */}
          <div className="py-8" style={{ borderTop: "1px solid var(--border-default)" }}>
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-8">
              <div>
                <span className="text-xs font-mono" style={{ color: "var(--text-faint)" }}>
                  Jul 2021 – Jun 2025
                </span>
              </div>
              <div>
                <h3
                  className="text-base font-semibold leading-tight"
                  style={{ color: "var(--text-heading)" }}
                >
                  B.S. in Software Engineering and Computing Technology
                </h3>
                <p className="mt-1 text-sm" style={{ color: "var(--text-tertiary)" }}>
                  Addis Ababa University{" "}
                  <a
                    href="https://www.statista.com/chart/28098/top-universities-in-africa-by-the/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400/70 hover:text-emerald-400 transition-colors"
                  >
                    (6th best in Africa in 2022) ↗
                  </a>
                </p>
                <p className="mt-1 text-xs" style={{ color: "var(--text-faint)" }}>
                  Addis Ababa, Ethiopia
                </p>

                <ul className="mt-4 space-y-2">
                  <li className="text-sm leading-relaxed pl-4 relative" style={{ color: "var(--text-muted)" }}>
                    <span className="absolute left-0 top-2.5 w-1 h-1 rounded-full" style={{ backgroundColor: "var(--bullet-dot)" }} />
                    <span className="font-medium" style={{ color: "var(--text-secondary)" }}>GPA</span> — 3.46/4.00 (Distinction)
                  </li>
                  <li className="text-sm leading-relaxed pl-4 relative" style={{ color: "var(--text-muted)" }}>
                    <span className="absolute left-0 top-2.5 w-1 h-1 rounded-full" style={{ backgroundColor: "var(--bullet-dot)" }} />
                    <span className="font-medium" style={{ color: "var(--text-secondary)" }}>Coursework</span> — Fundamentals of Artificial Intelligence, Machine Learning and Big Data, Data Structures and Algorithms, Web &amp; Mobile Application Development, Object-Oriented Programming and Database Systems.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Development — A2SV */}
          <div className="py-8" style={{ borderTop: "1px solid var(--border-default)" }}>
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-8">
              <div>
                <span className="text-xs font-mono" style={{ color: "var(--text-faint)" }}>
                  Sep 2022 – Oct 2023
                </span>
              </div>
              <div>
                <h3
                  className="text-base font-semibold leading-tight"
                  style={{ color: "var(--text-heading)" }}
                >
                  Competitive Programming &amp; Software Development
                </h3>
                <p className="mt-1 text-sm" style={{ color: "var(--text-tertiary)" }}>
                  Africa To Silicon Valley{" "}
                  <a
                    href="https://www.newsfilecorp.com/release/150848/A2SV-Receives-Funding-from-Google-as-Part-of-Their-Support-for-Diverse-African-Tech-Talent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400/70 hover:text-emerald-400 transition-colors"
                  >
                    (Backed by Google) ↗
                  </a>
                </p>
                <p className="mt-1 text-xs" style={{ color: "var(--text-faint)" }}>
                  Addis Ababa, Ethiopia
                </p>

                <ul className="mt-4 space-y-2">
                  <li className="text-sm leading-relaxed pl-4 relative" style={{ color: "var(--text-muted)" }}>
                    <span className="absolute left-0 top-2.5 w-1 h-1 rounded-full" style={{ backgroundColor: "var(--bullet-dot)" }} />
                    Dedicated 1,500+ hours to mastering Data Structures, Algorithms, Software Development, and professional collaboration.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider mt-0" />
    </section>
  );
};

export default Education;
