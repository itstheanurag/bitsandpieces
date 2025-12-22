export function CTA() {
  return (
    <section className="relative isolate overflow-hidden py-32 px-6 w-full bg-white dark:bg-neutral-950 max-w-7xl mx-auto">
      {/* Background grid */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:24px_24px]
          z-0
        "
      />

      {/* CTA card */}
      <div className="relative z-10 max-w-5xl mx-auto rounded-lg bg-zinc-900 text-white p-12 md:p-24 text-center overflow-hidden">
        {/* Soft glow */}
        <div
          aria-hidden
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.18),transparent_60%)]
            opacity-40
          "
        />

        <h2 className="text-4xl md:text-6xl font-bold mb-8 relative">
          Start building <br />
          your legacy today.
        </h2>

        <p className="text-zinc-400 text-lg mb-12 max-w-lg mx-auto relative">
          Join 10,000+ developers building high-quality interfaces with the
          Nexus UI Toolkit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
          <button className="px-10 py-2 bg-white text-zinc-900 rounded-lg font-bold hover:bg-zinc-100 transition-colors">
            Get Free Access
          </button>
          <button className="px-10 py-2 border border-zinc-700 text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
            Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
