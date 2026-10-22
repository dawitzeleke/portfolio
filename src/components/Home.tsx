import photo from "../assets/photo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = (): JSX.Element => {
  return (
    <header
      id="home"
      className="relative w-full overflow-hidden bg-[#050816] text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-[-6rem] h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-[-5rem] h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl space-y-7">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                Dawit Zeleke
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Software Engineer
              </h1>
              {/* <p className="max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
                I build scalable full-stack applications and conduct ML research
          from Flutter apps with 1,000+ downloads to climate projections
                processing 98K+ records. Based in Addis Ababa, Ethiopia.
              </p> */}
            </div>

            {/* <div className="flex flex-wrap gap-3">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100 cursor-pointer"
              >
                View Work
                <MdOutlineKeyboardArrowRight size={20} />
              </Link>

              <Link
                to="contact"
                smooth
                duration={500}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10 cursor-pointer"
              >
                Contact Me
              </Link>
            </div> */}

            {/* <div className="flex flex-wrap gap-2 pt-1 text-sm text-gray-300">
              {['Flutter', 'Next.js', 'ASP.NET Core', 'Python', 'React', 'Machine Learning'].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  {skill}
                </span>
              ))}
            </div> */}
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-cyan-400/10" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b1020]">
                <img
                  src={photo}
                  alt="Dawit Zeleke"
                  className="h-[28rem] w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;