import { useEffect, useState } from 'react'

function Navbar({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-slate-900/40 border-b border-slate-200/60 dark:border-slate-700/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 ring-2 ring-blue-400/30 shadow-lg shadow-blue-500/20" />
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Trilp AB</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Welding • IT Services</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Services</a>
          <a href="#about" className="text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
          <a href="#contact" className="text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
          <button aria-label="Toggle theme" onClick={onToggleTheme} className="relative inline-flex items-center justify-center h-9 w-9 rounded-xl border border-slate-300/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 hover:shadow-md hover:border-blue-400/70 hover:text-blue-600 dark:hover:text-blue-400 transition">
            {theme === 'dark' ? (
              // Sun icon
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1.25a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1Zm0-19a1 1 0 0 1 1-1h.25a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1ZM3 12a1 1 0 0 1 1-1H5.25a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm14.95-6.364a1 1 0 0 1 1.414 0l.177.177a1 1 0 0 1-1.414 1.414l-.177-.177a1 1 0 0 1 0-1.414ZM4.459 18.126a1 1 0 0 1 1.414 0l.885.885a1 1 0 1 1-1.414 1.414l-.885-.885a1 1 0 0 1 0-1.414Zm14.178 0a1 1 0 0 1 0 1.414l-.885.885a1 1 0 1 1-1.414-1.414l.885-.885a1 1 0 0 1 1.414 0ZM5.873 4.459a1 1 0 0 1 0 1.414l-.885.885A1 1 0 1 1 3.574 5.344l.885-.885a1 1 0 0 1 1.414 0Z"/>
              </svg>
            ) : (
              // Moon icon
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"/>
              </svg>
            )}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-xl border border-slate-300/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200/60 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/70 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
            <a onClick={() => setOpen(false)} href="#services" className="block text-slate-800 dark:text-slate-200">Services</a>
            <a onClick={() => setOpen(false)} href="#about" className="block text-slate-800 dark:text-slate-200">About</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block text-slate-800 dark:text-slate-200">Contact</a>
            <button onClick={() => { onToggleTheme(); setOpen(false) }} className="mt-2 inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-slate-300/70 dark:border-slate-700/70 text-slate-800 dark:text-slate-100">
              Toggle theme
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
