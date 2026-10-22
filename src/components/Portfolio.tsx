import Horizon from "../assets/portfolio/horizon2.png";
import Xcel from "../assets/xcel.jpg";
import cognify from "../assets/cognify.png";
import Hotel from "../assets/hotel.png";
import learnify from "../assets/learnify.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import outPut from "../assets/output.png";

type PortfolioItem = {
  id: number;
  src: string;
  subTitle: string;
  description: string;
  tech: string;
  link?: string;
  liveLink?: string;
};

const Portfolio = (): JSX.Element => {
  const portfolios: PortfolioItem[] = [
    {
      id: 1,
      src: cognify,
      subTitle: "Cognify",
      description:
        "Interactive e-learning platform with social media-inspired features and a recommendation system. Top 3 project at AAiT Innovation Center, 2nd-highest among 40 capstone projects.",
      tech: "React Native • ASP.NET Core • MongoDB",
      link: "https://github.com/dawitzeleke/capstoneProject",
    },
    {
      id: 2,
      src: Xcel,
      subTitle: "HR Management System",
      description:
        "Backend services for an HR management system, translating stakeholder requirements into business workflows with RESTful APIs.",
      tech: "ASP.NET Core • SQL Server • Docker",
      link: "https://github.com/amanjnc/XcelTech.HRMS",
    },
    {
      id: 3,
      src: outPut,
      subTitle: "Football Analysis App",
      description:
        "Computer vision-powered football analysis tool for tracking player movements and game statistics.",
      tech: "Python • Computer Vision • ML",
      link: "https://github.com/dawitzeleke/football_analysis",
    },
    {
      id: 4,
      src: learnify,
      subTitle: "Learnify — E-Learning Platform",
      description:
        "A comprehensive e-learning platform focused on clean UI and interactive learning experiences.",
      tech: "React • Node.js • Web App",
      link: "https://github.com/dawitzeleke/learnify",
    },
    {
      id: 5,
      src: Horizon,
      subTitle: "Banking App",
      description:
        "A modern banking application with account management, transactions, and financial dashboards.",
      tech: "Next.js • TypeScript • Plaid",
      link: "https://github.com/dawitzeleke/banking",
    },
    {
      id: 6,
      src: Hotel,
      subTitle: "Booking App",
      description:
        "Full-featured booking system with search, reservation management, and payment integration.",
      tech: "React • Node.js • MongoDB",
      link: "https://github.com/dawitzeleke/booking-app",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative w-full py-20 text-white bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute w-72 h-72 rounded-full blur-3xl bg-cyan-500/30 -top-10 -left-10" />
        <div className="absolute w-72 h-72 rounded-full blur-3xl bg-purple-500/30 -bottom-10 -right-10" />
      </div>

      <div className="relative max-w-screen-xl px-6 mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="px-4 py-1 text-xs font-semibold tracking-widest text-cyan-300 uppercase border border-cyan-400/40 rounded-full bg-cyan-400/10">
            Selected Work
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Portfolio
          </h2>
          <p className="max-w-2xl mt-3 text-gray-300">
            Explore some of my recent projects — from ML-powered apps to
            full-stack platforms and cross-platform mobile solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map(({ id, src, subTitle, description, tech, link, liveLink }) => (
            <article
              key={id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="relative">
                <img
                  src={src}
                  alt={subTitle}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-lg font-semibold tracking-wide">{subTitle}</h3>
                  <p className="mt-1 text-sm text-cyan-300/80">
                    {tech}
                  </p>
                </div>
              </div>

              <div className="px-5 py-3">
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {description}
                </p>
              </div>

              <div className="flex items-center justify-between px-5 py-4 border-t border-white/5">
                <span className="text-sm text-gray-300">View Source</span>
                <div className="flex items-center gap-2">
                  {liveLink && (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/20"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live
                    </a>
                  )}
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>
                  ) : (
                    <span className="text-sm text-gray-500">Private</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;