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
          {/* <p className="max-w-3xl mt-4 text-lg text-gray-300">
            I am Dawit Zeleke, a Software Engineer and Machine Learning
            Researcher from Addis Ababa, Ethiopia, with a B.S. in Software
            Engineering from Addis Ababa University.
          </p> */}
        </div>

        <div className="grid gap-10 mt-12 lg:grid-cols-1">
          <div className="space-y-6">
            <div className="p-6 border shadow-2xl rounded-2xl bg-white/5 border-white/10 backdrop-blur-xl">
              <p className="text-lg leading-relaxed text-gray-200">
                I work as a Data Science Engineer &amp; Software Engineer at the
                Ethiopian Artificial Intelligence Institute, where I build
                production apps like Clean Ethiopia (1,000+ downloads) and
                conduct ML research on climate projections. Previously, I
                delivered scalable CRM dashboards at Zulu Technologies, led a
                top-3 capstone project at AAiT Innovation Center, and dedicated
                1,500+ hours to Data Structures and Algorithms through A2SV
                (backed by Google).
              </p>
            </div>

            {/* <div className="flex flex-wrap gap-3">
              {[
                "Flutter",
                "Next.js",
                "ASP.NET Core",
                "Python",
                "Machine Learning",
                "React",
                "Spring Boot",
                "Docker",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium text-gray-200 border rounded-full bg-white/5 border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div> */}
          </div>

          {/* <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-6 border shadow-2xl rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-400/20">
              <p className="text-3xl font-bold text-white">1,500+</p>
              <p className="mt-2 text-sm text-gray-300">
                Hours dedicated to DSA &amp; software development at A2SV
              </p>
            </div>
            <div className="p-6 border shadow-2xl rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-400/20">
              <p className="text-3xl font-bold text-white">1,000+</p>
              <p className="mt-2 text-sm text-gray-300">
                Downloads on Clean Ethiopia app (Google Play)
              </p>
            </div>
            <div className="p-6 border shadow-2xl rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border-violet-400/20">
              <p className="text-3xl font-bold text-white">Top 0.01%</p>
              <p className="mt-2 text-sm text-gray-300">
                National exam performer out of 338,528 students
              </p>
            </div>
            <div className="p-6 border shadow-2xl rounded-2xl bg-white/5 border-white/10 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Focus
              </p>
              <p className="mt-2 text-lg font-semibold text-gray-100">
                Full-stack, ML research &amp; leadership
              </p>
              <p className="mt-2 text-sm text-gray-300">
                From leading 140 students at A2SV to deploying production ML
                models and cross-platform apps.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;