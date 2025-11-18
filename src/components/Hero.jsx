import { useEffect, useRef } from 'react'

function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Load Spline runtime lazily
    let app
    const load = async () => {
      try {
        const { Application } = await import('@splinetool/runtime')
        app = new Application(canvasRef.current)
        await app.load('https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode')
      } catch (e) {
        // silently ignore in case of network error
      }
    }
    load()
    return () => {
      if (app && app.dispose) app.dispose()
    }
  }, [])

  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(37,99,235,0.25),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/30">Trilp AB</span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Welding + IT, done right.
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-prose">
            I bring hands-on welding expertise together with dependable IT services. From metalwork to digital workflows — one reliable partner for a broad range of work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition shadow-lg shadow-blue-500/25">
              Get a quote
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-blue-400/70">
              See services
            </a>
          </div>
        </div>
        <div className="relative h-[380px] sm:h-[460px] md:h-[520px] lg:h-[560px]">
          <canvas ref={canvasRef} className="w-full h-full rounded-2xl border border-slate-200/50 dark:border-slate-700/60 bg-slate-900" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  )
}

export default Hero
