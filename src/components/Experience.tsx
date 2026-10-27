const Experience = (): JSX.Element => {
  const capabilities: {
    category: string;
    tools: string;
    context: string;
  }[] = [
    {
      category: "Interfaces",
      tools: "React, TypeScript, JavaScript, Next.js, Tailwind CSS",
      context: "Every web project above; React Native for Cognify; Flutter for Clean Ethiopia and TeleHealth.",
    },
    {
      category: "Services and APIs",
      tools: "Node.js, Express, ASP.NET Core, NestJS, Spring Boot, Python, Django",
      context: "Express services in Cognify; ASP.NET Core behind the HR system; NestJS at EAII; Spring Boot for backend projects.",
    },
    {
      category: "Mobile",
      tools: "React Native, Flutter",
      context: "Cognify's mobile client (React Native); Clean Ethiopia and TeleHealth (Flutter).",
    },
    {
      category: "Data",
      tools: "MongoDB, PostgreSQL, MySQL, SQL Server, ScyllaDB",
      context: "Relational modelling for university units; document models for service data and products.",
    },
    {
      category: "Platform",
      tools: "Docker, Linux, Git, GitHub, GitLab, AWS",
      context: "Docker images for deployment; GitLab CI/CD for automated releases; AWS Chime integration at CodeLinden.",
    },
    {
      category: "Machine Learning",
      tools: "XGBoost, Random Forest, LSTM, Pandas, NumPy, Computer Vision",
      context: "Climate projections with 98K+ records; Football analysis with CV; benchmarked 3 ML models.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full py-24 bg-[#0b0f10] text-white"
    >
      <div className="section-container">
        {/* Section header */}
        <p className="section-label">Engineering</p>
        <h2 className="section-heading">
          Technical capabilities
        </h2>
        <p className="section-subtitle">
          Grouped by what they are for, with the work that uses them.
        </p>

        {/* Skills table — Biniyam's two-column editorial style */}
        <div className="mt-16 space-y-0">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="py-7 border-t border-white/[0.06] first:border-t-0 table-row-hover"
            >
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-8 items-start">
                <h3 className="text-sm font-semibold text-white/70">
                  {cap.category}
                </h3>
                <div>
                  <p className="text-sm font-semibold text-white/90">
                    {cap.tools}
                  </p>
                  <p className="mt-1.5 text-xs text-white/30 leading-relaxed">
                    {cap.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider mt-0" />
    </section>
  );
};

export default Experience;