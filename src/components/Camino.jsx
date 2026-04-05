export default function Camino() {
  const steps = [
    {
      num: '1',
      tag: 'Gratis',
      tagColor: 'text-green-400',
      numBg: 'bg-violet',
      title: 'AWS Health Check',
      desc: 'Revisamos tu cuenta de punta a punta: seguridad, costos y arquitectura. En 2 días tenés un reporte priorizado y una recomendación concreta de qué hacer primero.',
    },
    {
      num: '2',
      tag: 'Proyecto sprint',
      tagColor: 'text-hot-pink',
      numBg: 'bg-hot-pink',
      title: '1 o 2 proyectos de impacto',
      desc: 'Ejecutamos exactamente lo que encontramos — nada más. Alcance fijo, duración definida, entregable real al final.',
    },
    {
      num: '3',
      tag: 'Retainer mensual',
      tagColor: 'text-amber-brand',
      numBg: 'bg-amber-brand',
      title: 'DevOps on Demand',
      desc: 'Capacidad DevOps mensual fija disponible para tu equipo. Horas reservadas, respuesta en 4hs hábiles, reporte mensual incluido.',
    },
  ]

  return (
    <section id="como-trabajamos" className="py-24 bg-soft-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet text-xs font-bold tracking-[0.12em] uppercase mb-3">El proceso</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-void-navy mb-4">El camino clásico</h2>
          <p className="text-slate-brand text-lg max-w-xl mx-auto leading-relaxed">
            Sin onboarding interminable. Empezamos con un diagnóstico gratis y avanzamos desde los hallazgos reales.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-white border border-black/7 rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-md">
              <div className={`w-9 h-9 rounded-full ${step.numBg} flex items-center justify-center text-white text-sm font-bold mb-4`}>
                {step.num}
              </div>
              <p className={`text-[11px] font-bold tracking-[0.08em] uppercase ${step.tagColor} mb-2`}>{step.tag}</p>
              <h3 className="text-void-navy font-bold text-lg leading-snug mb-3">{step.title}</h3>
              <p className="text-slate-brand text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Flow strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          {[
            { label: 'Health Check', color: 'bg-violet/10 text-violet border-violet/25' },
            { label: 'Proyecto sprint', color: 'bg-hot-pink/10 text-hot-pink border-hot-pink/25' },
            { label: 'DevOps on Demand', color: 'bg-amber-brand/10 text-amber-brand border-amber-brand/25' },
          ].map((item, i, arr) => (
            <div key={i} className="flex items-center gap-3">
              <span className={`text-sm font-semibold px-4 py-2 rounded-full border ${item.color}`}>
                {item.label}
              </span>
              {i < arr.length - 1 && (
                <svg className="w-4 h-4 text-slate-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
