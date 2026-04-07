export default function CtaFinal() {
  return (
    <section className="py-24 bg-soft-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl bg-void-navy px-8 py-16 text-center"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(123,46,238,0.22) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(247,146,11,0.10) 0%, transparent 50%), #0A0828',
          }}
        >
          {/* Badge */}
          <span className="inline-block bg-amber-brand/15 text-amber-brand text-[11px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full mb-5 border border-amber-brand/30">
            100% Gratis · Sin compromiso
          </span>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl mx-auto">
            Empezá con un<br />
            <span className="gradient-text">Health Check gratuito</span>
          </h2>

          {/* Desc */}
          <p className="text-white/55 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            En 2 días te decimos exactamente qué tiene tu cuenta AWS, qué riesgos tiene y qué hacer primero. Sin costo, sin letra chica.
          </p>

          {/* CTA */}
          <a
            href="mailto:contacto@globaliport.com?subject=Health Check Gratuito — Quiero empezar"
            className="inline-flex items-center gap-2 gradient-bg text-white font-bold px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-violet/35 text-[16px]"
          >
            Escribinos ahora
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <p className="text-white/25 text-sm mt-5">
            contacto@globaliport.com · Respondemos en menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  )
}
