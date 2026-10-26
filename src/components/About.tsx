const About = (): JSX.Element => {
  return (
    <section
      id="about"
      className="relative w-full py-24 bg-[#0b0f10] text-white"
    >
      <div className="section-container">
        {/* Section header */}
        <p className="section-label">About</p>
        <h2 className="section-heading">
          How I approach engineering
        </h2>
        <p className="section-subtitle">
          Habits that run through my projects, each linked to the work where you can check it.
        </p>

        {/* Engineering principles */}
        <div className="mt-16 space-y-0">
          {[
            {
              title: "Build for production, not demos",
              body: "Every project I ship is built to handle real users. Clean Ethiopia has 1,000+ downloads on Google Play. The CRM dashboard at Zulu handles 20K+ contacts. I optimise for reliability — exponential backoff, API caching, and CI/CD pipelines that cut release time from 15 minutes to under 2.",
              seen: "Clean Ethiopia, Zulu CRM",
            },
            {
              title: "Turn records into decisions",
              body: "Data is only useful once someone can act on it. I processed 98K+ historical climate records and 315K+ daily CMIP6 records to produce actionable projections through 2100. XGBoost achieved 0.82 KGE and 0.75 NSE across Ethiopia's climate extremes.",
              seen: "Ethiopian AI Institute, Climate ML Research",
            },
            {
              title: "Ship it so others can run it",
              body: "Software is finished when someone relies on it. I automated backend deployments via GitLab CI/CD, re-architected chat from HTTP polling to WebSocket (eliminating ~20 redundant requests/min/user), and built cross-platform apps that work across Android and iOS.",
              seen: "TeleHealth, Clean Ethiopia",
            },
            {
              title: "Design for the people who use it",
              body: "The best code is invisible to users — they just see something that works. I build keyboard-first UIs with custom hooks, social-media-inspired e-learning features, and recommendation systems based on student performance. The interface should feel natural.",
              seen: "Cognify, Zulu CRM",
            },
          ].map((principle, i) => (
            <div
              key={i}
              className="py-10 border-t border-white/[0.06] first:border-t-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-12">
                <h3 className="font-display text-xl md:text-2xl text-white/90 leading-tight">
                  {principle.title}
                </h3>
                <div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {principle.body}
                  </p>
                  <p className="mt-3 text-xs text-white/30">
                    Seen in{" "}
                    <span className="text-white/50 font-medium">
                      {principle.seen}
                    </span>
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

export default About;