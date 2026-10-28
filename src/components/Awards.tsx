const Awards = (): JSX.Element => {
  return (
    <section
      id="awards"
      className="relative w-full py-24"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <div className="section-container">
        {/* Section header */}
        <p className="section-label">Recognition</p>
        <h2 className="section-heading">
          Awards
        </h2>
        <p className="section-subtitle">
          Achievements and recognitions I've earned along the way.
        </p>

        {/* Awards list */}
        <div className="mt-16 space-y-0">
          <div className="py-8" style={{ borderTop: "1px solid var(--border-default)" }}>
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-8">
              <div>
                <span className="text-xs font-mono" style={{ color: "var(--text-faint)" }}>
                  Apr 2021
                </span>
              </div>
              <div>
                <h3
                  className="text-base font-semibold leading-tight"
                  style={{ color: "var(--text-heading)" }}
                >
                  Certificate of Excellence — Outstanding Performance on National Examination{" "}
                  <a
                    href="https://drive.google.com/file/d/13NNrj9Xv2Rj8Uc_SUNemu6athCnUWHLy/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400/70 hover:text-emerald-400 transition-colors"
                  >
                    ↗
                  </a>
                </h3>

                <ul className="mt-4 space-y-2">
                  <li className="text-sm leading-relaxed pl-4 relative" style={{ color: "var(--text-muted)" }}>
                    <span className="absolute left-0 top-2.5 w-1 h-1 rounded-full" style={{ backgroundColor: "var(--bullet-dot)" }} />
                    Recognized as a <span className="font-medium" style={{ color: "var(--text-secondary)" }}>top 0.01%</span> performer out of over <span className="font-medium" style={{ color: "var(--text-secondary)" }}>338,528</span> students in 2021.
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

export default Awards;
