import photo from "../assets/photo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import SocialLinks from "./SocialLinks";

const Home = (): JSX.Element => {
  return (
    <header id="home" className="relative h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* decorative diagonal stripe */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute right-0 top-0 transform translate-x-1/4 -translate-y-1/4 opacity-10" width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <circle cx="350" cy="350" r="300" fill="url(#g1)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto h-full px-6 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6 z-10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-300">Hello — I build delightful web experiences</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Crafting pixel-perfect interfaces and robust backends
          </h2>

          <p className="text-gray-300 max-w-xl">
            I design and develop scalable web apps using React, TypeScript,
            Tailwind CSS and .NET Core. I focus on accessibility, performance
            and maintainable architecture.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <Link to="portfolio" smooth duration={500} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold cursor-pointer">
              See Work
              <MdOutlineKeyboardArrowRight />
            </Link>

            <Link to="contact" smooth duration={500} className="inline-flex items-center px-5 py-3 rounded-full border border-white/10 text-gray-200 hover:bg-white/5 transition">
              Get in touch
            </Link>

            <a href="/resume.pdf" className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 text-gray-200 hover:bg-white/7 transition" target="_blank" rel="noreferrer">Resume</a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-xs bg-white/6 text-white px-3 py-1 rounded">React</span>
            <span className="text-xs bg-white/6 text-white px-3 py-1 rounded">TypeScript</span>
            <span className="text-xs bg-white/6 text-white px-3 py-1 rounded">Tailwind</span>
            <span className="text-xs bg-white/6 text-white px-3 py-1 rounded">Node</span>
            <span className="text-xs bg-white/6 text-white px-3 py-1 rounded">.NET</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center z-10">
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-white/5 to-white/2 border border-white/6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-indigo-700/20 via-cyan-600/10 to-transparent transform rotate-6 -translate-y-4 shadow-inner" />
            </div>

            <img src={photo} alt="profile" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-64 md:h-64 object-cover rounded-xl border-4 border-white/6" />

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <div className="px-3 py-1 bg-cyan-500/20 text-xs text-white rounded-full">Open Source</div>
              <div className="px-3 py-1 bg-indigo-500/20 text-xs text-white rounded-full">Mentor</div>
            </div>
          </div>
        </div>

        <aside className="absolute left-6 bottom-6 hidden md:block z-20">
          <SocialLinks />
        </aside>
      </div>
    </header>
  );
};

export default Home;