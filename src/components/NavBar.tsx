import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

type NavLink = {
  id: number;
  link: string;
  label: string;
};

const NavBar = (): JSX.Element => {
  const [nav, setNav] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: NavLink[] = [
    { id: 1, link: "home", label: "Products" },
    { id: 2, link: "portfolio", label: "Projects" },
    { id: 3, link: "experience", label: "Engineering" },
    { id: 4, link: "about", label: "About" },
    { id: 5, link: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f10]/95 backdrop-blur-md nav-glow"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-14">
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-sm font-semibold text-white group-hover:bg-white/15 transition-colors">
            DZ
          </div>
          <span className="text-sm font-semibold text-white tracking-wide">
            Dawit Zeleke
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ id, link, label }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              className="px-3 py-1.5 text-sm text-white/50 hover:text-white cursor-pointer transition-colors duration-200 rounded-md hover:bg-white/[0.04]"
            >
              {label}
            </Link>
          ))}
          {/* Resume button */}
          <a
            href="/resume.pdf"
            download
            className="ml-3 inline-flex items-center gap-1.5 rounded-[8px] bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-[#0b0f10] transition-all duration-200 hover:bg-emerald-400"
          >
            Résumé
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="mt-px">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setNav(!nav)}
          className="z-10 text-white/60 cursor-pointer md:hidden hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {nav && (
        <div className="fixed inset-0 bg-[#0b0f10]/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center z-40">
          <ul className="space-y-1 text-center">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                  className="block px-8 py-4 text-2xl font-display text-white/70 hover:text-white cursor-pointer transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            download
            className="mt-8 btn-primary"
          >
            Download Résumé
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;