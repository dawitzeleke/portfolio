import { Link } from "react-scroll";

const About = (): JSX.Element => {
  return (
    <section
      id="about"
      className="relative w-full py-24 bg-[#0b0f10] text-white"
    >
      <div className="section-container">
        {/* Section header */}
        <p className="section-label">About Me</p>
        <h2 className="section-heading">
          Passionate about building things that matter
        </h2>

        {/* Two-column: paragraphs left, stat cards right */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
          {/* Left — description paragraphs */}
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed">
              I'm a Software Engineer and Researcher at the Ethiopian Artificial
              Intelligence Institute. I hold a B.S. in Software Engineering from
              Addis Ababa University, and I'm a
              graduate of the A2SV Africa to Silicon Valley program backed by Google.
            </p>

            <p className="text-lg sm:text-xl text-white/60 leading-relaxed">
              I'm currently conducting ML research on climate extremes at EAII,
              building production software in Flutter, NestJS, and Next.js, and
              mentoring 100+ students in programming fundamentals, data structures and algorithms. Open to
              Software Engineering and Data Science roles.
            </p>

            <Link
              to="contact"
              smooth
              duration={500}
              className="inline-flex items-center gap-2 text-base font-medium text-emerald-400/80 hover:text-emerald-400 cursor-pointer transition-colors mt-2"
            >
              Let's work together
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Right — stat cards */}
          <div className="flex flex-row lg:flex-col gap-4 lg:w-56">
            {[
              { value: "5+", label: "Years Coding" },
              { value: "6+", label: "Companies Worked" },
              { value: "20+", label: "Technologies Used" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex-1 lg:flex-none rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 lg:p-6"
              >
                <p className="text-2xl sm:text-3xl font-bold text-white leading-none">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-white/40 mt-1.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="divider mt-0" />
    </section>
  );
};

export default About;