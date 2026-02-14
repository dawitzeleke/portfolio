const About = (): JSX.Element => {
  return (
    <section
      id="about"
      className="relative w-full py-20 text-white bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute w-80 h-80 rounded-full blur-3xl bg-cyan-500/20 -top-16 -left-10" />
        <div className="absolute w-80 h-80 rounded-full blur-3xl bg-indigo-500/20 -bottom-16 -right-10" />
      </div>

      <div className="relative max-w-screen-xl px-6 mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="px-4 py-1 text-xs font-semibold tracking-widest text-cyan-300 uppercase border border-cyan-400/40 rounded-full bg-cyan-400/10">
            About Me
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Building reliable, scalable systems
          </h2>
          <p className="max-w-3xl mt-4 text-lg text-gray-300">
            I am Dawit Zeleke, a Software Engineer from Addis Ababa, Ethiopia,
            skilled in backend development with tools like .NET Core and Docker.
          </p>
        </div>

        <div className="grid gap-10 mt-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="p-6 border shadow-2xl rounded-2xl bg-white/5 border-white/10 backdrop-blur-xl">
              <p className="text-lg leading-relaxed text-gray-200">
                I interned as a Backend Developer at Xceltech Solution,
                contributing to backend services for an HR Management System.
                Through the Africa to Silicon Valley program, I honed my skills
                in Flutter and teamwork. Additionally, I’ve solved 600+ problems
                on LeetCode and Codeforces, enhancing my problem-solving and
                algorithm expertise.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                ".NET Core",
                "Docker",
                "FastAPI",
                "Flutter",
                "Algorithms",
                "System Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium text-gray-200 border rounded-full bg-white/5 border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-6 border shadow-2xl rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-400/20">
              <p className="text-3xl font-bold text-white">600+</p>
              <p className="mt-2 text-sm text-gray-300">
                Problems solved on competitive platforms
              </p>
            </div>
            <div className="p-6 border shadow-2xl rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-400/20">
              <p className="text-3xl font-bold text-white">2+ yrs</p>
              <p className="mt-2 text-sm text-gray-300">
                Building backend services and APIs
              </p>
            </div>
            <div className="p-6 border shadow-2xl rounded-2xl bg-white/5 border-white/10 backdrop-blur-xl sm:col-span-2">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Focus
              </p>
              <p className="mt-2 text-lg font-semibold text-gray-100">
                Performance, reliability, and developer experience
              </p>
              <p className="mt-2 text-sm text-gray-300">
                I love crafting clean architectures, optimizing APIs, and building
                products that scale with clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;