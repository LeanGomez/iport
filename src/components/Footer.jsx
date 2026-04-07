import logoIcon from '../assets/logo-icon.png'

const serviceLinks = [
  'AWS Health Check (Gratis)',
  'Security Hardening Sprint',
  'Cost Cleanup Sprint',
  'Observability Starter',
  'Terraform Foundation',
  'Deploy Automation',
  'DevOps on Demand',
]

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[#060419] border-t border-white/5 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logoIcon} alt="Global Iport" className="h-8 w-auto" />
              <span className="text-white font-bold text-[15px]">Global <span style={{ background:'linear-gradient(135deg,#7B2EEE,#F84568,#F7920B)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>I</span>port</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed mb-4 max-w-[240px]">
              DevOps & Cloud Consulting para pymes. Ordenamos, aseguramos y optimizamos tu infraestructura AWS.
            </p>
            <a
              href="mailto:contacto@globaliport.com"
              className="text-purple-300 text-sm font-medium flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              contacto@globaliport.com
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="text-white/30 text-[11px] font-bold tracking-[0.1em] uppercase mb-4">Servicios</p>
            <ul className="space-y-2.5">
              {serviceLinks.map((name) => (
                <li key={name}>
                  <a href="#servicios" className="text-white/50 hover:text-white text-sm transition-colors duration-200">{name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white/30 text-[11px] font-bold tracking-[0.1em] uppercase mb-4">Empresa</p>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: 'Cómo trabajamos', href: '#como-trabajamos' },
                { label: 'Nosotros',         href: '#nosotros' },
                { label: 'FAQ',              href: '#faq' },
                { label: 'Contacto',         href: '#contacto' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/50 hover:text-white text-sm transition-colors duration-200">{l.label}</a>
                </li>
              ))}
            </ul>

            {/* Founders LinkedIn */}
            <p className="text-white/30 text-[11px] font-bold tracking-[0.1em] uppercase mb-3">Founders</p>
            <div className="space-y-3">
              <div>
                <a href="https://www.linkedin.com/in/leandro-d-gomez/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 hover:text-purple-300 text-sm transition-colors duration-200">
                  <LinkedInIcon /> Leandro Gomez
                </a>
                <a href="mailto:leandro.gomez@globaliport.com"
                  className="text-white/25 hover:text-white/60 text-xs transition-colors duration-200 ml-6">
                  leandro.gomez@globaliport.com
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/maria-victoria-scagliotti/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 hover:text-purple-300 text-sm transition-colors duration-200">
                  <LinkedInIcon /> Victoria Scagliotti
                </a>
                <a href="mailto:victoria.scagliotti@globaliport.com"
                  className="text-white/25 hover:text-white/60 text-xs transition-colors duration-200 ml-6">
                  victoria.scagliotti@globaliport.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-white/5">
          <p className="text-white/25 text-sm">© {new Date().getFullYear()} Global Iport. Todos los derechos reservados.</p>
          <p className="text-white/20 text-sm">Fundada por <span className="text-white/35">Leandro Gomez</span> & <span className="text-white/35">Victoria Scagliotti</span></p>
        </div>

      </div>
    </footer>
  )
}
