import { useState } from "react";

type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  type: string;
  duration: string;
  period: string;
  location: string;
  mode: string;
  bullets: string[];
  skills: string[];
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Data Science Engineer & ML Researcher / Software Engineer",
    company: "Ethiopian Artificial Intelligence Institute",
    type: "Full-time",
    duration: "1 yr+",
    period: "Aug 2025 – Present",
    location: "Addis Ababa, Ethiopia",
    mode: "On-site",
    bullets: [
      "Conducted research on ML-driven climate projections, processing 98K+ historical records across 196 locations and 315K+ daily CMIP6 records to model climate extremes across Ethiopia.",
      "Developed and benchmarked 3 ML models (XGBoost, Random Forest, LSTM) using 14 engineered spatiotemporal features, with XGBoost achieving 0.82 KGE and 0.75 NSE.",
      "Generated climate projections through 2100 under SSP2-4.5 and SSP5-8.5 scenarios, producing 1,033 future monthly projections.",
      "Developed and deployed the Clean Ethiopia environmental violation reporting app, achieving 1,000+ downloads on Google Play Store.",
      "Improved network reliability with exponential backoff and API caching, reducing redundant calls by 60%.",
      "Implemented the TeleHealth cross-platform app in Flutter with real-time video consultations (Livekit), appointment booking, and role-based dashboards.",
      "Re-architected backend chat infrastructure from HTTP polling to persistent WebSocket connection, eliminating ~20 redundant API requests per minute per user.",
      "Automated backend deployments via GitLab CI/CD pipeline, reducing release time from ~15 minutes to under 2 minutes.",
    ],
    skills: ["Flutter", "NestJS", "Python", "XGBoost", "LSTM", "Machine Learning", "CI/CD"],
  },
  {
    id: 2,
    role: "Front-End Developer",
    company: "Zulu Technologies",
    type: "Full-time",
    duration: "5 mos",
    period: "Nov 2025 – Mar 2026",
    location: "Remote",
    mode: "Remote",
    bullets: [
      "Delivered scalable software solutions for global clients across 3 continents, managing end-to-end development cycles in an enterprise outsourcing environment.",
      "Built a Next.js CRM dashboard handling 20K+ contacts across 15+ modules, enabling scalable loan operations.",
      "Engineered an AI-assisted document pipeline (5 APIs, versioning, workflows) accelerating loan processing.",
      "Designed a keyboard-first UI with 26 custom hooks, unifying 6 data entities and reducing context switching.",
      "Pioneered rapid prototyping initiatives for localized projects, decreasing MVP delivery time from 6 weeks to 20 days.",
    ],
    skills: ["Next.js", "React", "TypeScript"],
  },
  {
    id: 3,
    role: "Software Development Team Lead",
    company: "AAiT Innovation Center",
    type: "Full-time",
    duration: "6 mos",
    period: "Jan 2025 – Jun 2025",
    location: "Addis Ababa, Ethiopia",
    mode: "On-site",
    bullets: [
      "Project selected as one of the top 3 from 20+ applicants for a spot at the AAiT Innovation Center.",
      "Led a team of 4 developers in building Cognify, an interactive e-learning platform using React Native, ASP.NET Core, and MongoDB.",
      "Adapted 4+ social media-inspired features to create a more interactive e-learning experience.",
      "Created a recommendation system to suggest content based on students' past performance.",
      "Achieved the 2nd-highest score among 40 capstone projects.",
    ],
    skills: ["React Native", "ASP.NET Core", "MongoDB", "Team Leadership"],
  },
  {
    id: 4,
    role: "Software Engineer Intern",
    company: "Xceltech Solution",
    type: "Internship",
    duration: "4 mos",
    period: "Mar 2024 – Jun 2024",
    location: "Addis Ababa, Ethiopia",
    mode: "On-site",
    bullets: [
      "Developed an HR management system using ASP.NET Core, translating stakeholder requirements into backend services and business workflows.",
      "Validated RESTful API endpoints and resolved critical defects, improving backend reliability and integration testing.",
      "Added pagination and enhanced functionality for improved user experience and performance.",
    ],
    skills: ["ASP.NET Core", "REST APIs", "SQL Server", "Git"],
  },
  {
    id: 5,
    role: "Competitive Programming & Software Dev",
    company: "A2SV | Africa to Silicon Valley (Backed by Google)",
    type: "Program",
    duration: "1 yr 2 mos",
    period: "Sep 2022 – Oct 2023",
    location: "Addis Ababa, Ethiopia",
    mode: "On-site",
    bullets: [
      "Dedicated 1,500+ hours to mastering Data Structures, Algorithms, Software Development, and professional collaboration.",
      "A2SV placed 100+ students at top-tech companies such as Google, Bloomberg, Databricks, Amazon, and LinkedIn.",
    ],
    skills: ["DSA", "Flutter", "Competitive Programming"],
  },
];

const WorkExperience = (): JSX.Element => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section
      id="work"
      className="relative w-full py-24"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <div className="section-container">
        {/* Section header */}
        <p className="section-label">Career</p>
        <h2 className="section-heading">
          Work experience
        </h2>
        <p className="section-subtitle">
          A timeline of my professional journey — from competitive programming
          to building production systems and conducting ML research at scale.
        </p>

        {/* Experience list — clean editorial style */}
        <div className="mt-16 space-y-0">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                style={{ borderTop: "1px solid var(--border-default)" }}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className="w-full text-left py-6 group cursor-pointer"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 items-start">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3
                          className="text-base font-semibold group-hover:text-emerald-400 transition-colors leading-tight"
                          style={{ color: "var(--text-heading)" }}
                        >
                          {exp.role}
                        </h3>
                        <span
                          className="hidden md:inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full"
                          style={{
                            backgroundColor: "var(--badge-bg)",
                            color: "var(--badge-text)",
                            border: "1px solid var(--badge-border)",
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono whitespace-nowrap" style={{ color: "var(--text-faint)" }}>
                        {exp.period}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        style={{ color: "var(--text-dimest)" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs" style={{ color: "var(--text-ghost)" }}>
                    <span>{exp.location}</span>
                    <span>·</span>
                    <span>{exp.mode}</span>
                    <span>·</span>
                    <span>{exp.duration}</span>
                  </div>
                </button>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded
                      ? "max-h-[800px] opacity-100 pb-8"
                      : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <ul className="space-y-3 pl-4" style={{ borderLeft: "1px solid var(--border-default)" }}>
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed pl-4 relative"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--bullet-dot)" }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-5 pl-4">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="divider mt-0" />
    </section>
  );
};

export default WorkExperience;
