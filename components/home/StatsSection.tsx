const stats = [
  { value: "16+", label: "Free Tools" },
  { value: "50K+", label: "Developers" },
  { value: "100%", label: "Free Forever" },
  { value: "0", label: "Account Required" },
];

export function StatsSection() {
  return (
    <section className="border-y border-slate-100 bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-indigo-600">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
