type LeadershipItem = {
  id: number;
  role: string;
  organization: string;
  period: string;
  location: string;
  bullets: string[];
  accentFrom: string;
  accentTo: string;
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
    accentFrom: "from-cyan-500",
    accentTo: "to-blue-600",
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
    accentFrom: "from-violet-500",
    accentTo: "to-purple-600",
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
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-600",
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
    accentFrom: "from-amber-500",
    accentTo: "to-orange-600",
  },
];

const Leadership = (): JSX.Element => {
  return (
    <section
      id="leadership"
      className="relative w-full py-24 text-white bg-gradient-to-b from-gray-800 via-black to-gray-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[120px] bg-violet-500/8 -top-32 right-1/4" />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[120px] bg-cyan-500/8 bottom-0 left-1/4" />
      </div>

      <div className="relative max-w-screen-xl px-6 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-4 py-1 text-xs font-semibold tracking-widest text-cyan-300 uppercase border border-cyan-400/40 rounded-full bg-cyan-400/10">
            Beyond Code
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Leadership &amp; Volunteering
          </h2>
          <p className="max-w-2xl mt-3 text-gray-300">
            Mentoring the next generation of engineers, leading teams, and
            giving back to the community.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {leadershipData.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Top accent bar */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${item.accentFrom} ${item.accentTo}`}
              />

              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.accentFrom}/5 via-transparent ${item.accentTo}/5`}
                />
              </div>

              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gray-300">
                      {item.organization}
                    </p>
                  </div>
                  <span
                    className={`flex-shrink-0 px-3 py-1 text-[10px] font-semibold uppercase rounded-full bg-gradient-to-r ${item.accentFrom}/20 ${item.accentTo}/20 text-white tracking-wider`}
                  >
                    {item.period.includes("Present") ? "Active" : "Completed"}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.location}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="mt-5 space-y-2.5">
                  {item.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed"
                    >
                      <span
                        className={`mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.accentFrom} ${item.accentTo}`}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
