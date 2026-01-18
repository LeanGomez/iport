import leandroImg from '../assets/leandro.jpg'
import victoriaImg from '../assets/victoria.jpg'

const founders = [
  {
    name: 'Leandro Gomez',
    role: 'Co-Founder & DevOps Engineer',
    bio: 'Especialista en infraestructura cloud y Kubernetes con amplia experiencia en arquitecturas escalables y automatizacion.',
    image: leandroImg,
    linkedin: 'https://www.linkedin.com/in/leandro-d-gomez/'
  },
  {
    name: 'Victoria Scagliotti',
    role: 'Co-Founder & DevOps Engineer',
    bio: 'Experta en CI/CD, observabilidad y practicas de Site Reliability Engineering para sistemas de alta disponibilidad.',
    image: victoriaImg,
    linkedin: 'https://www.linkedin.com/in/maria-victoria-scagliotti/'
  }
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quienes <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Somos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Somos una consultora DevOps fundada por profesionales apasionados por la tecnologia
            y comprometidos con la excelencia operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700"
            >
              {/* Avatar */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-2">
                {founder.name}
              </h3>
              <p className="text-cyan-400 font-medium mb-4">
                {founder.role}
              </p>
              <p className="text-gray-400">
                {founder.bio}
              </p>

              {/* LinkedIn */}
              <div className="mt-6 flex justify-center">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Values section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-xl font-semibold text-white mb-2">Enfoque en resultados</h4>
            <p className="text-gray-400">Soluciones practicas que generan valor inmediato para tu negocio.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🤝</div>
            <h4 className="text-xl font-semibold text-white mb-2">Partnership</h4>
            <p className="text-gray-400">Trabajamos codo a codo con tu equipo, transfiriendo conocimiento.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-xl font-semibold text-white mb-2">Innovacion continua</h4>
            <p className="text-gray-400">Siempre actualizados con las ultimas tecnologias y mejores practicas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
