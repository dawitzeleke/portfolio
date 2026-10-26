import { Link } from "react-scroll";
import photo from "../assets/photo.png";

const Home = (): JSX.Element => {
  return (
    <header
      id="home"
      className="relative w-full min-h-screen bg-[#0b0f10] text-white overflow-hidden"
    >
      {/* Subtle gradient glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="section-container flex flex-col justify-center min-h-screen pt-20 pb-16">
        {/* Hero Top: Profile Card + Big Editorial Heading & CTAs */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-14 pt-4 sm:pt-8">
          {/* Avatar Profile Card */}
          <div className="flex flex-col items-center flex-shrink-0 text-center animate-fade-in-up">
            <div className="relative group">
              {/* Outer soft ambient halo */}
              <div className="absolute -inset-1 bg-gradient-to-b from-emerald-500/20 via-white/5 to-transparent blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Photo Frame */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 lg:w-52 lg:h-52 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src={photo}
                  alt="Dawit Zeleke"
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>


            </div>

            {/* Name & Credentials */}
            <div className="mt-5">
              <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Dawit Zeleke
              </h2>
              <p className="text-xs sm:text-sm font-mono text-white/40 mt-1 w-[300px]">
                Researcher and Software Engineer at Ethiopian Artificial Intelligence Institute
              </p>
              <p className="text-xs sm:text-sm font-mono text-white/40 mt-1 w-[300px]">dawitzeleke92@gmail.com</p>
            </div>

          </div>

          {/* Right: Big Editorial Headline + Description + CTAs */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up animate-delay-100">
            {/* Intro label */}
            <p className="text-xs font-mono tracking-widest uppercase text-emerald-400/80 mb-3">
              Full-Stack & Distributed Systems
            </p>

            {/* Big editorial heading */}
            <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.25rem] font-normal leading-[1.08] text-white">
              I engineer software that turns complex problems into practical products.
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-base sm:text-lg text-white/50 mt-6 leading-relaxed">
              I build full-stack web platforms, mobile clients and distributed
              backends — from the interface people touch to the services, data
              model and infrastructure behind it. Some of it is already running
              for client organisations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="btn-primary cursor-pointer"
              >
                Explore selected work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link
                to="contact"
                smooth
                duration={500}
                className="btn-ghost cursor-pointer"
              >
                Get in touch
              </Link>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1.5 ml-2 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Download résumé (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Architecture diagram section — interactive visual like Biniyam */}
        <div className="mt-16 animate-fade-in-up animate-delay-500">
          <div className="card p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-white/30">01</span>
                <span className="font-mono text-xs text-white/40">smartHire / architecture</span>
              </div>
              <span className="font-mono text-xs text-emerald-400/60">● tracing</span>
            </div>

            {/* Architecture boxes */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-4">
              <div className="space-y-3">
                <div className="border border-white/[0.08] rounded-lg p-4">
                  <p className="font-mono text-sm font-medium text-white">Web client</p>
                  <p className="font-mono text-xs text-white/30 mt-0.5">React, TypeScript</p>
                </div>
                <div className="flex items-center gap-2 text-white/20 font-mono text-xs pl-4">
                  <span>↓ HTTPS</span>
                </div>
                <div className="border border-emerald-500/30 bg-emerald-500/[0.04] rounded-lg p-4">
                  <p className="font-mono text-sm font-medium text-emerald-400">API gateway</p>
                  <p className="font-mono text-xs text-emerald-400/40 mt-0.5">JWT, roles, routing</p>
                </div>
                <div className="flex items-center gap-2 text-white/20 font-mono text-xs pl-4">
                  <span>↓ gRPC</span>
                </div>
                <div className="border border-white/[0.08] rounded-lg p-4">
                  <p className="font-mono text-sm font-medium text-white">Microservices ×4+</p>
                  <p className="font-mono text-xs text-white/30 mt-0.5">Node.js, Express</p>
                </div>
                <div className="flex items-center gap-3 text-white/20 font-mono text-xs pl-8 mt-2">
                  <span className="px-2 py-1 border border-white/[0.06] rounded">drivers</span>
                </div>
                <div className="border border-white/[0.08] rounded-lg p-4 mt-2">
                  <p className="font-mono text-sm font-semibold text-white">MongoDB</p>
                  <p className="font-mono text-xs text-white/30 mt-0.5">Service data</p>
                </div>
              </div>

              {/* Side annotations */}
              <div className="hidden md:flex flex-col justify-start gap-4 pt-2">
                <div className="border border-white/[0.08] rounded-lg p-4">
                  <p className="font-mono text-sm font-medium text-white">Consul</p>
                  <p className="font-mono text-xs text-white/30 mt-0.5">Discovery</p>
                </div>
              </div>

              <div className="hidden md:flex flex-col justify-center">
                <div className="writing-mode-vertical text-xs font-mono text-white/20 tracking-widest px-3 py-6 border border-white/[0.06] rounded-lg bg-white/[0.01]"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  Kubernetes
                </div>
              </div>
            </div>

            {/* Annotation */}
            <div className="mt-6 pt-5 border-t border-white/[0.06]">
              <p className="text-sm text-white/50">
                <span className="text-white/30">‣</span>{" "}
                <span className="font-semibold text-white/70">API gateway.</span>{" "}
                The single front door: verifies JWTs, checks roles, and routes each request to the right service.
                <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />
              </p>
            </div>

            {/* Project label */}
            <div className="mt-4 pt-4 border-t border-white/[0.06]">
              <p className="text-sm text-white/40">
                Cognify, an interactive e-learning platform. Select a part to see its job.{" "}
                <span className="font-semibold text-white/60 hover:text-white cursor-pointer transition-colors">
                  Read the case study →
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;