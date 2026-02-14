const Contact = (): JSX.Element => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-20 text-white bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute w-80 h-80 rounded-full blur-3xl bg-cyan-500/20 -top-16 -left-10" />
        <div className="absolute w-80 h-80 rounded-full blur-3xl bg-indigo-500/20 -bottom-16 -right-10" />
      </div>

      <div className="relative max-w-screen-xl px-6 mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="px-4 py-1 text-xs font-semibold tracking-widest text-cyan-300 uppercase border border-cyan-400/40 rounded-full bg-cyan-400/10">
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Contact</h2>
          <p className="max-w-2xl mt-3 text-gray-300">
            Have a project in mind or want to collaborate? Send me a message.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="p-6 border shadow-2xl rounded-2xl bg-white/5 border-white/10 backdrop-blur-xl">
              <p className="text-lg leading-relaxed text-gray-200">
                I’m always open to discussing new opportunities, partnerships, or
                freelance work. I’ll reply within 24–48 hours.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-sm text-gray-400">Email</p>
                <p className="mt-1 font-semibold">dawitzeleke92@gmail.com</p>
              </div>
              <div className="p-5 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-sm text-gray-400">Location</p>
                <p className="mt-1 font-semibold">Addis Ababa, ET</p>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/bjjjdqdb"
            method="POST"
            className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div>
              <label className="text-sm text-gray-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-gray-500 focus:border-cyan-400/60 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Enter your email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-gray-500 focus:border-cyan-400/60 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-gray-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={8}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-gray-500 focus:border-cyan-400/60 focus:outline-none"
              ></textarea>
            </div>

            <button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 font-semibold text-white transition hover:opacity-90">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;