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
  accentFrom: string;
  accentTo: string;
  borderAccent: string;
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Research Assistant & Software Engineer",
    company: "Ethiopian Artificial Intelligence Institute",
    type: "Full-time",
    duration: "9 mos",
    period: "Aug 2025 – Present",
    location: "Addis Ababa, Ethiopia",
    mode: "On-site",
    bullets: [
      "Conducting machine learning research and delivering research outputs as Research Assistant.",
      "Delivered a cross-platform environmental pollution reporting app (Clean Ethiopia) with 16 modules and OTP-verified guest submissions (Flutter, GetX).",
      "Improved network reliability with exponential backoff and 5-min API caching, reducing redundant calls by ~60%.",
    ],
    skills: ["Flutter", "NestJS", "Machine Learning", "Research"],
    accentFrom: "from-cyan-500",
    accentTo: "to-blue-600",
    borderAccent: "border-cyan-400/30",
  },
  {
    id: 2,
    role: "Front-End Developer",
    company: "Zulu Tech",
    type: "Full-time",
    duration: "5 mos",
    period: "Nov 2025 – Mar 2026",
    location: "Remote",
    mode: "Remote",
    bullets: [
      "Built a Next.js CRM dashboard handling 2K+ contacts across 15+ modules, enabling scalable loan operations.",
      "Engineered an AI-assisted document pipeline (5 APIs, versioning, workflows) accelerating loan processing.",
      "Designed a keyboard-first UI with 26 custom hooks, unifying 6 data entities and reducing context switching.",
    ],
    skills: ["Next.js", "React", "TypeScript"],
    accentFrom: "from-violet-500",
    accentTo: "to-purple-600",
    borderAccent: "border-violet-400/30",
  },
  {
    id: 3,
    role: "Full Stack Developer | PM & QA",
    company: "CodeLinden",
    type: "Full-time",
    duration: "5 mos",
    period: "May 2025 – Sep 2025",
    location: "Brisbane, Australia",
    mode: "Remote",
    bullets: [
      "Developed booking system with PHP, JavaScript, Jest, and ScyllaDB focusing on migration and testing.",
      "Migrated 3,000+ lines of PHP to JavaScript, preserving complex booking logic and functionality.",
      "Implemented Jest with 25+ unit tests to improve reliability and testing.",
      "Migrated from SQL to ScyllaDB by designing optimized tables and queries.",
    ],
    skills: ["JavaScript", "PHP", "Jest", "ScyllaDB"],
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-600",
    borderAccent: "border-emerald-400/30",
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
      "Developed backend services for a Human Resource Management System using .NET Core.",
      "Integrated Docker for containerization, enabling consistent environments and simplified deployment.",
      "Worked with SQL Server for database management, optimizing queries for better performance.",
    ],
    skills: [".NET Core", "Docker", "SQL Server", "Git"],
    accentFrom: "from-amber-500",
    accentTo: "to-orange-600",
    borderAccent: "border-amber-400/30",
  },
  {
    id: 5,
    role: "Competitive Programming & Software Dev",
    company: "A2SV | Africa to Silicon Valley",
    type: "Program",
    duration: "1 yr 2 mos",
    period: "Sep 2022 – Oct 2023",
    location: "Addis Ababa, Ethiopia",
    mode: "On-site",
    bullets: [
      "Gained a comprehensive understanding of Data Structures and Algorithms, and Mobile development with Flutter.",
      "Learned 18 Data Structures and Algorithms topics and solved 600+ problems on Leetcode and Codeforces.",
      "100+ students were placed in top tech companies such as Google, Bloomberg, Palantir in the last 4 years.",
    ],
    skills: ["DSA", "Flutter", "Competitive Programming"],
    accentFrom: "from-rose-500",
    accentTo: "to-pink-600",
    borderAccent: "border-rose-400/30",
  },
];

const WorkExperience = (): JSX.Element => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="work"
      className="relative w-full py-24 text-white bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Decorative background blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] bg-cyan-500/8 -top-40 left-1/4" />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] bg-violet-500/8 bottom-0 right-1/4" />
        <div className="absolute w-[300px] h-[300px] rounded-full blur-[100px] bg-emerald-500/6 top-1/2 -left-20" />
      </div>

      <div className="relative max-w-screen-xl px-6 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-4 py-1 text-xs font-semibold tracking-widest text-cyan-300 uppercase border border-cyan-400/40 rounded-full bg-cyan-400/10">
            Career
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Work Experience
          </h2>
          <p className="max-w-2xl mt-3 text-gray-300">
            A timeline of my professional journey — from competitive programming
            to building production systems at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/40 via-violet-500/40 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isExpanded = expandedId === exp.id;

              return (
                <div
                  key={exp.id}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.accentFrom} ${exp.accentTo} ring-4 ring-gray-900 shadow-lg shadow-cyan-500/20`}
                    />
                  </div>

                  {/* Date label — visible on md+ on the opposite side */}
                  <div
                    className={`hidden md:flex w-1/2 ${
                      isLeft
                        ? "justify-end pr-12"
                        : "justify-start pl-12"
                    } items-start pt-1`}
                  >
                    <span className="text-sm font-medium text-gray-400 tracking-wide">
                      {exp.period}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pl-12" : "md:pr-12"
                    }`}
                  >
                    <div
                      onClick={() => toggleExpand(exp.id)}
                      className={`group relative overflow-hidden rounded-2xl border ${exp.borderAccent} bg-white/[0.03] backdrop-blur-xl shadow-2xl cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-3xl ${
                        isExpanded
                          ? "ring-1 ring-white/10"
                          : ""
                      }`}
                    >
                      {/* Gradient shimmer on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${exp.accentFrom}/5 via-transparent ${exp.accentTo}/5`}
                        />
                      </div>

                      {/* Top accent bar */}
                      <div
                        className={`h-1 w-full bg-gradient-to-r ${exp.accentFrom} ${exp.accentTo}`}
                      />

                      <div className="relative p-6">
                        {/* Header row */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white leading-tight">
                              {exp.role}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-gray-300">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1 flex-shrink-0">
                            <span
                              className={`px-2.5 py-0.5 text-[10px] font-semibold uppercase rounded-full bg-gradient-to-r ${exp.accentFrom}/20 ${exp.accentTo}/20 text-white tracking-wider`}
                            >
                              {exp.type}
                            </span>
                            <span className="text-xs text-gray-500">
                              {exp.duration}
                            </span>
                          </div>
                        </div>

                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-gray-400">
                          <span className="md:hidden">{exp.period}</span>
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
                            {exp.location}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-white/5 text-gray-400">
                            {exp.mode}
                          </span>
                        </div>

                        {/* Expandable bullets */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isExpanded
                              ? "max-h-96 opacity-100 mt-5"
                              : "max-h-0 opacity-0 mt-0"
                          }`}
                        >
                          <ul className="space-y-2.5">
                            {exp.bullets.map((bullet, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed"
                              >
                                <span
                                  className={`mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.accentFrom} ${exp.accentTo}`}
                                />
                                {bullet}
                              </li>
                            ))}
                          </ul>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 text-[11px] font-medium text-gray-300 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Expand indicator */}
                        <div className="flex items-center justify-center mt-3">
                          <svg
                            className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline end dot */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 -bottom-2">
            <div className="w-3 h-3 rounded-full bg-gray-700 ring-4 ring-gray-900" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
