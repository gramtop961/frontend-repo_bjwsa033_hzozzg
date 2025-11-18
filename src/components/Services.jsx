function Services() {
  const items = [
    {
      title: 'Welding & Fabrication',
      desc: 'Mobile and on-site welding, repair, and custom fabrication with attention to safety and durability.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M3 6a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H9v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm12 0a3 3 0 0 1 3-3h.5a2.5 2.5 0 0 1 0 5H18a3 3 0 0 1-3-3Zm0 12a3 3 0 0 1 3-3h.5a2.5 2.5 0 1 1 0 5H18a3 3 0 0 1-3-3Z"/>
        </svg>
      ),
    },
    {
      title: 'IT Support & Consulting',
      desc: 'Small business IT, troubleshooting, setup, and hands-on help to keep your systems running smoothly.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5A2.25 2.25 0 0 1 19.5 6.75v10.5A2.25 2.25 0 0 1 17.25 19.5H6.75A2.25 2.25 0 0 1 4.5 17.25V6.75ZM7.5 7.5v9h9v-9h-9Z"/>
        </svg>
      ),
    },
    {
      title: 'Automation & Scripting',
      desc: 'Lightweight tools and scripts to automate repetitive tasks and improve everyday workflows.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h7.5A2.25 2.25 0 0 1 15 6.75v10.5A2.25 2.25 0 0 1 12.75 19.5h-7.5A2.25 2.25 0 0 1 3 17.25V6.75Zm12-2.25h3.75A2.25 2.25 0 0 1 21 6.75V15a3 3 0 0 1-3 3h-3V4.5Z"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Services</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Straightforward, dependable help across metalwork and IT.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 p-6 hover:border-blue-400/70 transition shadow-sm hover:shadow-lg">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white inline-flex items-center justify-center shadow-lg shadow-blue-600/20">
                {it.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
