const testimonials = [
  {
    quote:
      "PixolAI's JSON formatter is the first thing I open every morning. It's replaced 3 browser extensions for me.",
    name: "Sarah K.",
    role: "Senior Backend Engineer",
    avatar: "SK",
  },
  {
    quote:
      "The regex tester with live highlighting is insane. I used to dread writing regex — not anymore.",
    name: "Marcus T.",
    role: "Full-Stack Developer",
    avatar: "MT",
  },
  {
    quote:
      "Finally a password generator I trust. Open-source logic, runs in the browser. Exactly what I needed.",
    name: "Priya S.",
    role: "Security Engineer",
    avatar: "PS",
  },
  {
    quote:
      "The tutorials are genuinely high-quality. Not just 'hello world' fluff — real-world patterns.",
    name: "James O.",
    role: "CS Student",
    avatar: "JO",
  },
  {
    quote:
      "I shared PixolAI with my whole team. The Base64 tool alone saved us 30 minutes of back-and-forth.",
    name: "Chen W.",
    role: "DevOps Engineer",
    avatar: "CW",
  },
  {
    quote:
      "No ads shoved in my face, no 'please sign up' popups. Just works. Bookmarked and shared.",
    name: "Ana R.",
    role: "Frontend Developer",
    avatar: "AR",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
            Loved by Developers
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            What people are saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-700">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
