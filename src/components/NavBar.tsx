import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";

type NavLink = {
  id: number;
  link: string;
  label: string;
};

const NavBar = (): JSX.Element => {
  const [nav, setNav] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: NavLink[] = [
    { id: 1, link: "about", label: "About" },
    { id: 2, link: "education", label: "Education" },
    { id: 3, link: "work", label: "Experience" },
    { id: 4, link: "leadership", label: "Leadership" },
    { id: 5, link: "experience", label: "Skills" },
    { id: 6, link: "awards", label: "Awards" },
    { id: 7, link: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md nav-glow"
          : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "var(--overlay-bg)" } : undefined}
    >
      <div className="section-container flex items-center justify-between h-14">
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center text-sm font-semibold transition-colors"
            style={{
              backgroundColor: "var(--logo-bg)",
              color: "var(--text-heading)",
            }}
          >
            DZ
          </div>
          <span
            className="text-sm font-semibold tracking-wide"
            style={{ color: "var(--text-heading)" }}
          >
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
              className="px-3 py-1.5 text-sm cursor-pointer transition-colors duration-200 rounded-md"
              style={{ color: "var(--text-tertiary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-heading)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
            >
              {label}
            </Link>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle ml-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              /* Sun icon for switching to light */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              /* Moon icon for switching to dark */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Resume button */}
          <a
            href="/resume.pdf"
            download
            className="ml-3 inline-flex items-center gap-1.5 rounded-[8px] bg-emerald-500 px-4 py-1.5 text-sm font-semibold transition-all duration-200 hover:bg-emerald-400"
            style={{ color: "var(--btn-primary-text)" }}
          >
            Résumé
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="mt-px">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile theme toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setNav(!nav)}
            className="z-10 cursor-pointer transition-colors"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Toggle menu"
          >
            {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {nav && (
        <div
          className="fixed inset-0 backdrop-blur-xl md:hidden flex flex-col items-center justify-center z-40"
          style={{ backgroundColor: "var(--overlay-bg)" }}
        >
          <ul className="space-y-1 text-center">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                  className="block px-8 py-4 text-2xl font-display cursor-pointer transition-colors"
                  style={{ color: "var(--text-secondary)" }}
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