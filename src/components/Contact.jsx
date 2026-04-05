import { useState } from 'react'

const WEB3FORMS_KEY = '9bc36c42-2ff7-403b-ad84-d2b977f42666'

const inputClass = 'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-violet/60 transition-colors duration-200 text-sm'
const labelClass = 'block text-white/60 text-sm font-medium mb-2'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nuevo contacto de ${formData.name} — Global Iport`,
          from_name: 'Global Iport Website',
          ...formData
        }),
      })
      const result = await response.json()
      if (result.success) {
        setStatus({ type: 'success', message: '¡Mensaje enviado! Te respondemos en menos de 24 horas.' })
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus({ type: 'error', message: 'Error al enviar. Probá de nuevo o escribinos directamente.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Error al enviar. Probá de nuevo o escribinos directamente.' })
    }
    setIsSubmitting(false)
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <section id="contacto" className="py-24 bg-carbon">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-purple-300 text-xs font-bold tracking-[0.12em] uppercase mb-3">Contacto</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Trabajemos juntos</h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto leading-relaxed">
            Contanos sobre tu cuenta AWS y te decimos qué encontraríamos en un Health Check.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">

          {/* Form */}
          <div className="lg:col-span-3 bg-white/4 border border-white/8 rounded-2xl p-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelClass}>Nombre</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="tu@empresa.com" />
                </div>
              </div>

              <div>
                <label htmlFor="company" className={labelClass}>Empresa (opcional)</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Tu empresa" />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Mensaje</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} required rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Contanos sobre tu infraestructura o el problema que querés resolver..."
                />
              </div>

              {status.message && (
                <div className={`px-4 py-3 rounded-xl text-sm ${status.type === 'success' ? 'bg-green-500/15 text-green-400 border border-green-500/20' : 'bg-red-500/15 text-red-400 border border-red-500/20'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-bg text-white font-bold py-3.5 rounded-xl hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-violet/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 text-sm"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col justify-center gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-3">¿Preferís escribir directo?</h3>
              <a
                href="mailto:globaliport@gmail.com"
                className="text-purple-300 font-semibold hover:text-white transition-colors flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                globaliport@gmail.com
              </a>
            </div>

            <div className="space-y-4">
              {[
                { icon: '📍', label: 'Ubicación', value: 'Buenos Aires, Argentina' },
                { icon: '🌐', label: 'Modalidad', value: '100% Remoto · Clientes globales' },
                { icon: '⏱️', label: 'Respuesta',  value: 'En menos de 24 horas' },
                { icon: '💳', label: 'Pago',       value: '50% inicio · 50% entrega' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-violet/12 flex items-center justify-center flex-shrink-0 text-lg">{item.icon}</div>
                  <div>
                    <p className="text-white/40 text-xs">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
