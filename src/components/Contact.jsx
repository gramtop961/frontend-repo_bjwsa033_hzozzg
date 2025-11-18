function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/70 dark:to-slate-900/50 p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Let’s talk</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Tell me briefly what you need and how I can reach you.</p>
              <div className="mt-6 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <p><span className="font-medium">Email:</span> info@trilp.se</p>
                <p><span className="font-medium">Phone:</span> +46 70-000 00 00</p>
              </div>
            </div>
            <form className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="Your name" className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400" />
              <input type="email" placeholder="Email or phone" className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400" />
              <textarea rows="4" placeholder="How can I help?" className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400" />
              <button type="button" className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition shadow-lg shadow-blue-500/25">
                Send message
              </button>
            </form>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">By sending a message you agree to be contacted about your inquiry.</p>
      </div>
    </section>
  )
}

export default Contact
