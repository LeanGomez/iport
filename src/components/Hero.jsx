export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            DevOps
          </span>
          <br />
          <span className="text-white">que impulsa tu negocio</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Transformamos tu infraestructura con soluciones cloud-native,
          automatizacion y mejores practicas de la industria.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            Comenzar proyecto
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 rounded-lg border border-slate-600 text-white font-semibold hover:bg-slate-800 transition-all"
          >
            Ver servicios
          </a>
        </div>

        {/* Tech stack icons */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-3xl">☸️</span>
            <span>Kubernetes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl">🐳</span>
            <span>Docker</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl">☁️</span>
            <span>AWS / GCP / Azure</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl">🔄</span>
            <span>CI/CD</span>
          </div>
        </div>
      </div>
    </section>
  )
}
