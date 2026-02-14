import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import linux from "../assets/linux.png";
import docker from "../assets/docker.png";
import postgresql from "../assets/postgresql.png";

type Tech = {
  id: number;
  src: string;
  title: string;
  style: string;
};

const Experience = (): JSX.Element => {
  const techs: Tech[] = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: nextjs, title: "Next JS", style: "shadow-white" },
    { id: 7, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 8, src: python, title: "Python", style: "shadow-blue-200" },
    { id: 9, src: java, title: "Java", style: "shadow-blue-400" },
    { id: 10, src: docker, title: "Docker", style: "shadow-blue-700" },
    { id: 11, src: linux, title: "Linux", style: "shadow-yellow-400" },
    { id: 12, src: postgresql, title: "PostgreSQL", style: "shadow-blue-900" },
  ];

  return (
    <section
      id="experience"
      className="relative w-full py-20 text-white bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-cyan-500/20 -top-20 -left-16" />
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-indigo-500/20 -bottom-20 -right-16" />
      </div>

      <div className="relative max-w-screen-xl px-6 mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="px-4 py-1 text-xs font-semibold tracking-widest text-cyan-300 uppercase border border-cyan-400/40 rounded-full bg-cyan-400/10">
            Toolbox
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Experience</h2>
          <p className="max-w-2xl mt-3 text-gray-300">
            These are the technologies I’ve used to ship production-ready apps.
          </p>
        </div>

        <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {techs.map(({ id, src, title, style }) => (
            <article
              key={id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10" />
              </div>
              <div className="relative flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl bg-black/30 shadow-md ${style}`}
                >
                  <img src={src} alt={title} className="w-8" />
                </div>
                <div>
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="text-sm text-gray-400">Professional use</p>
                </div>
              </div>
              <div className="relative mt-6 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;