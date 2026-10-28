import cognify from "../assets/cognify.png";
import Xcel from "../assets/xcel.jpg";
import outPut from "../assets/output.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  id: number;
  category: string;
  title: string;
  description: string;
  status: string;
  statusColor: string;
  techs: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
};

const Portfolio = (): JSX.Element => {
  const featuredProjects: Project[] = [
    {
      id: 1,
      category: "Interactive e-learning platform",
      title: "Cognify",
      description:
        "An interactive e-learning platform with social media-inspired features and a recommendation system. Top 3 project at AAiT Innovation Center, 2nd-highest among 40 capstone projects.",
      status: "Completed, no public demo",
      statusColor: "text-amber-400",
      techs: ["React Native", "ASP.NET Core", "MongoDB"],
      githubLink: "https://github.com/dawitzeleke/capstoneProject",
      image: cognify,
    },
    {
      id: 2,
      category: "Computer vision analysis",
      title: "Football Analysis",
      description:
        "Computer vision-powered football analysis tool for tracking player movements, ball possession, and game statistics using ML models.",
      status: "Completed",
      statusColor: "text-emerald-400",
      techs: ["Python", "Computer Vision", "ML"],
      githubLink: "https://github.com/dawitzeleke/football_analysis",
      image: outPut,
    },
    {
      id: 3,
      category: "HR management system",
      title: "HR Management System",
      description:
        "Backend services for an HR management system, translating stakeholder requirements into business workflows with RESTful APIs.",
      status: "Completed",
      statusColor: "text-emerald-400",
      techs: ["ASP.NET Core", "SQL Server", "Docker"],
      githubLink: "https://github.com/amanjnc/XcelTech.HRMS",
      image: Xcel,
    },
  ];

  const moreProjects: { title: string; description: string; techs: string; link?: string }[] = [
    {
      title: "Learnify",
      description: "A comprehensive e-learning platform focused on clean UI and interactive learning experiences.",
      techs: "React, Node.js",
      link: "https://github.com/dawitzeleke/learnify",
    },
    {
      title: "Banking App",
      description: "A modern banking application with account management, transactions, and financial dashboards.",
      techs: "Next.js, TypeScript, Plaid",
      link: "https://github.com/dawitzeleke/banking",
    },
    {
      title: "Booking App",
      description: "Full-featured booking system with search, reservation management, and payment integration.",
      techs: "React, Node.js, MongoDB",
      link: "https://github.com/dawitzeleke/booking-app",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative w-full py-24"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <div className="section-container">
        {/* Section header */}
        <p className="section-label">Projects</p>
        <h2 className="section-heading">
          Case studies
        </h2>
        <p className="section-subtitle">
          Full-stack systems I've designed, built, and shipped. Each one links
          to a case study that is clear about what is finished and what is still in progress.
        </p>

        {/* Featured project cards */}
        <div className="mt-16 space-y-20">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Text side */}
                <div className="space-y-4">
                  <p className="text-xs font-mono uppercase tracking-wider" style={{ color: "var(--text-faint)" }}>
                    {project.category}
                  </p>
                  <h3
                    className="font-display text-3xl md:text-4xl leading-tight"
                    style={{ color: "var(--text-heading)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-md" style={{ color: "var(--text-tertiary)" }}>
                    {project.description}
                  </p>

                  {/* Status */}
                  <div className="flex items-center gap-2 pt-1">
                    <span className={`inline-block w-2 h-2 rounded-full ${
                      project.status.includes("no public") ? "bg-amber-400" : "bg-emerald-400"
                    }`}
                      style={{
                        boxShadow: project.status.includes("no public")
                          ? "0 0 6px rgba(251,191,36,0.5)"
                          : "0 0 6px rgba(74,222,128,0.5)",
                      }}
                    />
                    <span className={`text-xs ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techs.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-3">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm transition-colors"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <FaGithub size={16} />
                        View source →
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-emerald-400/80 hover:text-emerald-400 transition-colors"
                      >
                        <FaExternalLinkAlt size={12} />
                        Live demo ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Image side */}
                {project.image && (
                  <div
                    className="relative overflow-hidden rounded-xl"
                    style={{
                      border: "1px solid var(--border-default)",
                      backgroundColor: "var(--bg-card)",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
              </div>

              {/* Divider between projects */}
              <div className="divider mt-16" />
            </article>
          ))}
        </div>

        {/* More projects — table style */}
        <div className="mt-20">
          <h3
            className="font-display text-2xl md:text-3xl mb-8"
            style={{ color: "var(--text-heading)" }}
          >
            More projects
          </h3>
          <div className="space-y-0">
            {moreProjects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="table-row-hover group grid grid-cols-1 md:grid-cols-[200px_1fr_auto_auto] gap-3 md:gap-6 items-center py-5 cursor-pointer"
                style={{ borderTop: "1px solid var(--border-default)" }}
              >
                <h4
                  className="text-sm font-semibold group-hover:text-emerald-400 transition-colors"
                  style={{ color: "var(--text-heading)" }}
                >
                  {project.title}
                </h4>
                <p className="text-sm line-clamp-1" style={{ color: "var(--text-muted)" }}>
                  {project.description}
                </p>
                <span className="font-mono text-xs hidden md:block whitespace-nowrap" style={{ color: "var(--text-ghost)" }}>
                  {project.techs}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="group-hover:text-emerald-400 transition-colors hidden md:block"
                  style={{ color: "var(--text-dimest)" }}
                >
                  <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="divider mt-8" />
    </section>
  );
};

export default Portfolio;