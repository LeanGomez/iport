import leandroImg from '../assets/leandro.jpg'
import victoriaImg from '../assets/victoria.jpg'

const founders = [
  {
    name: 'Leandro Gomez',
    role: 'Co-Founder & DevOps Engineer',
    bio: 'Especialista en infraestructura cloud con experiencia en arquitecturas AWS escalables, IaC con Terraform y automatización de plataformas.',
    image: leandroImg,
    linkedin: 'https://www.linkedin.com/in/leandro-d-gomez/',
  },
  {
    name: 'Victoria Scagliotti',
    role: 'Co-Founder & DevOps Engineer',
    bio: 'Experta en CI/CD, observabilidad y SRE. Apasionada por hacer que los sistemas sean confiables, rápidos y fáciles de operar.',
    image: victoriaImg,
    linkedin: 'https://www.linkedin.com/in/maria-victoria-scagliotti/',
  },
]

const values = [
  { icon: '💰', title: 'Precio fijo, sin sorpresas',    desc: 'Cotizamos en USD con scope cerrado. Lo que acordamos es lo que pagás.' },
  { icon: '⚡', title: 'Impacto en días, no en meses',  desc: 'Proyectos sprint de 3–5 días o 1–2 semanas. Sin onboardings eternos.' },
  { icon: '🔒', title: 'Mínimo privilegio siempre',     desc: 'Solo los accesos necesarios. NDA antes de cualquier proyecto.' },
  { icon: '📄', title: 'Todo documentado',               desc: 'Cada entrega incluye informe y runbooks. Tu equipo puede operar solo después.' },
]

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-soft-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-violet text-xs font-bold tracking-[0.12em] uppercase mb-3">El equipo</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-void-navy mb-4">
            Técnicos que hablan el idioma del negocio
          </h2>
          <p className="text-slate-brand text-lg max-w-xl mx-auto leading-relaxed">
            Somos Leandro y Victoria. Dos ingenieros que construyeron Global Iport para darle a las pymes acceso a expertise DevOps real.
          </p>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {founders.map((founder, i) => (
            <div
              key={i}
              className="bg-white border border-black/7 rounded-2xl p-8 text-center hover:shadow-md transition-shadow duration-200"
            >
              {/* Avatar with gradient border */}
              <div className="relative w-28 h-28 mx-auto mb-5">
                <div className="absolute inset-0 rounded-full gradient-bg p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-void-navy text-xl font-bold mb-1">{founder.name}</h3>
              <p className="text-violet text-sm font-semibold mb-3">{founder.role}</p>
              <p className="text-slate-brand text-sm leading-relaxed mb-5">{founder.bio}</p>

              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-brand hover:text-violet transition-colors text-sm font-medium"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <div key={i} className="bg-white border border-black/7 rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-200">
              <div className="text-2xl mb-3">{v.icon}</div>
              <h4 className="text-void-navy font-bold text-[15px] mb-2 leading-snug">{v.title}</h4>
              <p className="text-slate-brand text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
