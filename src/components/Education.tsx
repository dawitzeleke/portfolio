const Education = (): JSX.Element => {
  return (
    <section
      id="education"
      className="relative w-full py-24 bg-[#0b0f10] text-white"
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
          <div className="py-8 border-t border-white/[0.06]">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-8">
              <div>
                <span className="text-xs text-white/30 font-mono">
                  Jul 2021 – Jun 2025
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight">
                  B.S. in Software Engineering and Computing Technology
                </h3>
                <p className="mt-1 text-sm text-white/50">
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
                <p className="mt-1 text-xs text-white/30">
                  Addis Ababa, Ethiopia
                </p>

                <ul className="mt-4 space-y-2">
                  <li className="text-sm text-white/40 leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2.5 w-1 h-1 rounded-full bg-white/15" />
                    <span className="text-white/60 font-medium">GPA</span> — 3.46/4.00 (Distinction)
                  </li>
                  <li className="text-sm text-white/40 leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2.5 w-1 h-1 rounded-full bg-white/15" />
                    <span className="text-white/60 font-medium">Coursework</span> — Fundamentals of Artificial Intelligence, Machine Learning and Big Data, Data Structures and Algorithms, Web &amp; Mobile Application Development, Object-Oriented Programming and Database Systems.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Development — A2SV */}
          <div className="py-8 border-t border-white/[0.06]">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-8">
              <div>
                <span className="text-xs text-white/30 font-mono">
                  Sep 2022 – Oct 2023
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight">
                  Competitive Programming &amp; Software Development
                </h3>
                <p className="mt-1 text-sm text-white/50">
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
                <p className="mt-1 text-xs text-white/30">
                  Addis Ababa, Ethiopia
                </p>

                <ul className="mt-4 space-y-2">
                  <li className="text-sm text-white/40 leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2.5 w-1 h-1 rounded-full bg-white/15" />
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
