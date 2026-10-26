type LeadershipItem = {
  id: number;
  role: string;
  organization: string;
  period: string;
  location: string;
  bullets: string[];
};

const leadershipData: LeadershipItem[] = [
  {
    id: 1,
    role: "Head of Academy",
    organization: "Africa to Silicon Valley (A2SV)",
    period: "Nov 2023 – Mar 2025",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Led a team of 25 Heads of Education to deliver training to 140 students, and managed recruitment of top candidates from over 4,100+ applicants across 49 countries for A2SV's 5th and 6th Generation cohorts.",
      "Oversaw the education of 210 students in A2SV's 6th Generation, focusing on Data Structures and Algorithms.",
    ],
  },
  {
    id: 2,
    role: "Student Managing Member",
    organization: "AAiT Innovation Center",
    period: "Jan 2025 – Jun 2025",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Served as a managing member overseeing daily operations of the innovation center, coordinating logistics and administrative routines.",
      "Provided technical mentorship and guidance to student teams working on diverse research-oriented and innovative projects.",
      "Voluntarily guided 10+ students on their journey into top tech companies.",
    ],
  },
  {
    id: 3,
    role: "Volunteer CS Instructor & Mentor",
    organization: "Lideta Catholic Cathedral School",
    period: "Oct 2026 – Present",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Assisted 100+ high school students in learning programming fundamentals, data structures, and algorithms.",
      "Delivered lectures and provided hands-on support during laboratory sessions to strengthen students' understanding of programming concepts.",
    ],
  },
  {
    id: 4,
    role: "Full Stack Developer / PM & QA",
    organization: "CodeLinden",
    period: "May 2025 – Sep 2025",
    location: "Brisbane, Australia (Remote)",
    bullets: [
      "Developed a booking system using PHP, JavaScript, Jest, and ScyllaDB, focusing on migration, testing, and reliability.",
      "Migrated 3,000+ lines of PHP to JavaScript while preserving complex booking logic and functionality.",
      "Implemented 25+ unit tests and exposed 20+ booking methods via HTML for structured testing.",
      "Led a team of 4 engineers to deliver an AWS Chime integration server, coordinating development, QA sessions, and technical guidance.",
      "Orchestrated end-to-end testing of ChatManager across 30+ chat and messaging features.",
    ],
  },
];

const Leadership = (): JSX.Element => {
  return (
    <section
      id="leadership"
      className="relative w-full py-24 bg-[#0b0f10] text-white"
    >
      <div className="section-container">
        {/* Section header */}
        <p className="section-label">Communities</p>
        <h2 className="section-heading">
          Leadership &amp; Volunteering
        </h2>
        <p className="section-subtitle">
          Mentoring the next generation of engineers, leading teams, and
          giving back to the community.
        </p>

        {/* Leadership rows — editorial table style */}
        <div className="mt-16 space-y-0">
          {leadershipData.map((item) => (
            <article
              key={item.id}
              className="py-8 border-t border-white/[0.06] first:border-t-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-8">
                {/* Left column — role & period */}
                <div>
                  <h3 className="text-sm font-semibold text-white leading-tight">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-xs text-white/30 font-mono">
                    {item.period}
                  </p>
                </div>

                {/* Right column — org, location, bullets */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <p className="text-sm font-medium text-white/60">
                      {item.organization}
                    </p>
                    <span className="text-xs text-white/20">·</span>
                    <p className="text-xs text-white/25">{item.location}</p>
                    {item.period.includes("Present") && (
                      <>
                        <span className="text-xs text-white/20">·</span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400/70">
                          <span className="status-dot" style={{ width: 6, height: 6 }} />
                          Active
                        </span>
                      </>
                    )}
                  </div>

                  <ul className="space-y-2">
                    {item.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sm text-white/40 leading-relaxed pl-4 relative"
                      >
                        <span className="absolute left-0 top-2.5 w-1 h-1 rounded-full bg-white/15" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="divider mt-0" />
    </section>
  );
};

export default Leadership;
