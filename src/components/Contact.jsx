import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
    alert('Gracias por contactarnos! Te responderemos pronto.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contacto" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Contactanos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Contanos sobre tu proyecto y te ayudamos a encontrar la mejor solucion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Empresa (opcional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Tu empresa"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Contanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Trabajemos juntos
              </h3>
              <p className="text-gray-400 text-lg">
                Ya sea que estes comenzando tu journey DevOps o buscando optimizar
                tu infraestructura existente, estamos aca para ayudarte.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">contacto@iport.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Ubicacion</p>
                  <p className="text-white">Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Modalidad</p>
                  <p className="text-white">100% Remoto - Clientes globales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
