// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden 
      bg-[radial-gradient(60%_40%_at_80%_0%,#e0e7ff_0%,transparent_60%),radial-gradient(50%_35%_at_0%_100%,#c7d2fe_0%,transparent_55%)] 
      from-slate-50 to-indigo-50">
      
      {/* subtle glow accents */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl bg-indigo-200/40" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-violet-200/40" />

      <section className="relative mx-4 w-full max-w-2xl rounded-3xl bg-white/80 p-10 shadow-xl ring-1 ring-black/5 backdrop-blur">
        <div className="text-center space-y-4">
          <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            New project • Build in public
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              SplitWiz
            </span>{" "}
            — it’s alive 🎉
          </h1>

          <p className="text-gray-600">
            Next.js + TypeScript + Tailwind are ready to roll.
          </p>

          {/* quick value prop */}
          <p className="text-sm text-gray-500">
            💡 AI-powered receipt parsing that auto-assigns shared items, tax & tips — no manual entry.
          </p>

          {/* feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">OCR + item mapping</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">Fair split logic</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">Clean UI</span>
          </div>

          {/* CTAs */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <Link
              href="#"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow hover:opacity-95 focus:outline-none"
            >
              Follow the build
            </Link>
            <Link
              href="#"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-indigo-700 bg-indigo-50 ring-1 ring-inset ring-indigo-200 hover:bg-indigo-100"
            >
              View repo
            </Link>
          </div>
        </div>

        {/* tiny footer line for polish */}
        <div className="mt-8 text-center text-xs text-gray-400">
          v0.1 • Day 1 progress
        </div>
      </section>
    </main>
  );
}
