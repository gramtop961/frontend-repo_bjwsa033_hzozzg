function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2>About Trilp AB</h2>
          <p>
            I run a small Swedish company combining practical welding with flexible IT work. The mix keeps me versatile: one day repairing or fabricating metal parts, the next day improving a small office setup, networks, or software tools.
          </p>
          <p>
            The goal is simple: do solid work, communicate clearly, and finish on time. I keep a friendly approach and focus on solutions that make everyday work easier.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 p-6">
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-center justify-between"><span>Based in</span><span className="font-medium">Sweden</span></li>
            <li className="flex items-center justify-between"><span>Core areas</span><span className="font-medium">Welding, IT</span></li>
            <li className="flex items-center justify-between"><span>Work style</span><span className="font-medium">Practical, reliable, clear</span></li>
            <li className="flex items-center justify-between"><span>Availability</span><span className="font-medium">Project or hourly</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
