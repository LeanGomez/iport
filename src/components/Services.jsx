const services = [
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    description: 'Diseño e implementacion de infraestructura en AWS, GCP y Azure. Arquitecturas escalables, seguras y optimizadas en costos.'
  },
  {
    icon: '☸️',
    title: 'Kubernetes & Containers',
    description: 'Orquestacion de contenedores con Kubernetes. Migracion, configuracion y gestion de clusters en produccion.'
  },
  {
    icon: '🔄',
    title: 'CI/CD Pipelines',
    description: 'Automatizacion de deployments con GitHub Actions, GitLab CI, Jenkins y ArgoCD. Entrega continua confiable.'
  },
  {
    icon: '📊',
    title: 'Observabilidad',
    description: 'Monitoreo, logging y alertas con Prometheus, Grafana, Datadog y ELK Stack. Visibilidad total de tu infraestructura.'
  },
  {
    icon: '🔐',
    title: 'Seguridad & Compliance',
    description: 'Implementacion de mejores practicas de seguridad, gestion de secretos con Vault, y cumplimiento de estandares.'
  },
  {
    icon: '🏗️',
    title: 'Infrastructure as Code',
    description: 'Infraestructura reproducible con Terraform, Terragrunt, Pulumi y CloudFormation. GitOps para gestion de configuracion.'
  }
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones DevOps end-to-end para acelerar tu desarrollo y optimizar tu operacion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-cyan-500/50 transition-all group hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
