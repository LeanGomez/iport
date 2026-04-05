const faqs = [
  {
    q: '¿En qué moneda cotizan?',
    a: 'Todo en USD. Precios fijos, sin variaciones por tipo de cambio. Lo que dice la propuesta es lo que pagás.',
  },
  {
    q: '¿Qué accesos necesitan a nuestra cuenta?',
    a: 'Siempre con principio de menor privilegio — solo lo necesario para el trabajo acordado. Para el Health Check, solo acceso de lectura.',
  },
  {
    q: '¿Nuestros datos están seguros?',
    a: 'Firmamos NDA antes de cualquier proyecto. No guardamos credenciales ni información sensible fuera del alcance del trabajo.',
  },
  {
    q: '¿Cómo es el proceso de pago?',
    a: '50% al iniciar, 50% al entregar. Para retainer mensual: pago adelantado cada mes.',
  },
  {
    q: '¿Qué pasa si no estamos satisfechos?',
    a: 'Revisamos hasta que el entregable cumpla con el scope acordado. Nuestro compromiso es con el resultado, no con cerrar el ticket.',
  },
  {
    q: '¿Trabajan con GCP o Azure?',
    a: 'Nuestro foco actual es AWS. Si tenés otra nube, escribinos y evaluamos caso por caso según la tecnología involucrada.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-void-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber-brand text-xs font-bold tracking-[0.12em] uppercase mb-3">Preguntas frecuentes</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Todo lo que necesitás saber</h2>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            Si no está acá, escribinos y respondemos en menos de 24 horas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/4 border border-white/7 rounded-2xl p-6 hover:border-violet/30 transition-colors duration-200"
            >
              <h3 className="text-white font-bold text-[15px] mb-2.5 leading-snug">{faq.q}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
