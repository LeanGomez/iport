const MAIL = 'globaliport@gmail.com'

const services = [
  {
    tag: 'Seguridad',
    tagClass: 'bg-hot-pink/15 text-hot-pink',
    title: 'AWS Security Hardening Sprint',
    hook: 'Cerrá las puertas abiertas antes de que alguien las encuentre.',
    includes: [
      'MFA en root y todos los usuarios IAM',
      'Políticas IAM revisadas y corregidas',
      'Security groups: puertos críticos cerrados',
      'CloudTrail y GuardDuty en todas las regiones',
      'Access keys rotadas + alertas de billing',
      'Informe de cierre completo',
    ],
    duration: '3–5 días',
    subject: 'Security Hardening Sprint',
  },
  {
    tag: 'Optimización de costos',
    tagClass: 'bg-amber-brand/15 text-amber-brand',
    title: 'AWS Cost Cleanup Sprint',
    hook: 'El ahorro suele cubrir la inversión en el primer mes.',
    includes: [
      'Análisis completo de costos (últimos 3 meses)',
      'Eliminación de recursos ociosos (EBS, EIPs, snapshots, LBs)',
      'Rightsizing de EC2 con baja utilización',
      'Budget Alerts + tagging strategy aplicada',
      'Informe con ahorro mensual estimado vs real',
    ],
    duration: '3–5 días',
    subject: 'Cost Cleanup Sprint',
  },
  {
    tag: 'Observabilidad',
    tagClass: 'bg-violet/18 text-purple-300',
    title: 'AWS Observability Starter',
    hook: 'Dejá de enterarte de los problemas cuando te llaman los usuarios.',
    includes: [
      'Dashboards CloudWatch por servicio (EC2, RDS, Lambda, ECS)',
      'Alarmas: CPU, latencia, errores 5xx, conexiones RDS',
      'Notificaciones por email y/o Slack (SNS)',
      'Health checks de endpoints críticos',
      'Runbook: "si suena esta alarma, hacé esto"',
    ],
    duration: '3–5 días',
    subject: 'Observability Starter',
  },
  {
    tag: 'Infrastructure as Code',
    tagClass: 'bg-hot-pink/15 text-hot-pink',
    title: 'Terraform Foundation',
    hook: 'Tu infraestructura AWS, versionada en Git.',
    includes: [
      'Importación de recursos: VPC, EC2, RDS, S3, IAM, SGs',
      'Remote state en S3 + DynamoDB lock',
      'Estructura de módulos básica',
      'Pipeline plan/apply con GitHub Actions',
      'README con instrucciones de uso',
    ],
    duration: '1–2 semanas',
    subject: 'Terraform Foundation',
  },
  {
    tag: 'CI/CD',
    tagClass: 'bg-amber-brand/15 text-amber-brand',
    title: 'Deploy Automation',
    hook: 'Tu equipo deja de deployar a mano. Para siempre.',
    includes: [
      'Pipeline completo: build → test → deploy',
      'Ambientes staging + producción',
      'Rollback automático ante falla',
      'GitHub Actions, CodePipeline u otras según stack',
      'Documentación y runbook de operación',
    ],
    duration: '1–2 semanas',
    subject: 'Deploy Automation',
  },
]

const retainerPlans = [
  { name: 'Starter',  hours: '4 horas / mes'  },
  { name: 'Standard', hours: '8 horas / mes'  },
  { name: 'Pro',      hours: '16 horas / mes' },
]

function ServiceCard({ s }) {
  return (
    <div className="bg-white/5 border border-white/8 rounded-2xl p-6 flex flex-col hover:-translate-y-1 hover:border-violet/35 transition-all duration-200">
      <span className={`inline-block text-[11px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full ${s.tagClass} mb-3 w-fit`}>{s.tag}</span>
      <h3 className="text-white font-bold text-[17px] leading-snug mb-1.5">{s.title}</h3>
      <p className="text-white/40 text-[13px] italic mb-4 leading-snug">{s.hook}</p>
      <ul className="space-y-1.5 mb-5 flex-1">
        {s.includes.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-[13px] text-white/60 leading-snug">
            <span className="text-hot-pink font-bold mt-0.5 flex-shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="border-t border-white/7 pt-4 flex items-center justify-between gap-2 mt-auto">
        <span className="text-slate-brand text-xs">{s.duration}</span>
        <a
          href={`mailto:${MAIL}?subject=${encodeURIComponent(s.subject)}`}
          className="text-purple-300 text-[13px] font-semibold hover:text-white transition-colors whitespace-nowrap"
        >
          Consultar →
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-void-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="gradient-text text-xs font-bold tracking-[0.12em] uppercase mb-3">Catálogo</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Servicios</h2>
          <p className="text-white/55 text-lg max-w-lg mx-auto leading-relaxed">
            Proyectos concretos con entregables reales. Alcance fijo, precio cerrado.
          </p>
        </div>

        {/* ─── Health Check featured ─── */}
        <div className="mb-6 rounded-2xl p-7 grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ background: 'linear-gradient(135deg, rgba(123,46,238,0.10) 0%, rgba(247,146,11,0.06) 100%)', border: '1px solid rgba(123,46,238,0.28)' }}>
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-amber-brand/15 text-amber-brand border border-amber-brand/25 mb-3">Siempre gratis</span>
            <h3 className="text-white font-bold text-xl mb-1.5">AWS Account Health Check</h3>
            <p className="text-white/40 text-sm italic mb-4">El primer paso. Siempre gratis.</p>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Revisamos tu cuenta AWS de punta a punta: seguridad, costos y arquitectura. En 2 días tenés un reporte con todos los hallazgos priorizados y una recomendación concreta de qué hacer primero.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-slate-brand text-xs">Entrega en 1–2 días</span>
              <a
                href={`mailto:${MAIL}?subject=${encodeURIComponent('Health Check Gratuito')}`}
                className="inline-flex items-center gap-2 bg-violet text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-violet/85 hover:-translate-y-0.5 transition-all shadow-lg shadow-violet/30"
              >
                Pedí el tuyo
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-white/30 mb-3">Incluye</p>
            <ul className="space-y-2">
              {[
                'Revisión de seguridad (IAM, MFA, security groups, CloudTrail, GuardDuty)',
                'Revisión de costos (recursos ociosos, oportunidades de ahorro)',
                'Revisión de arquitectura (multi-AZ, backups, ambientes, IaC)',
                'Reporte priorizado por impacto',
                'Call de presentación de 30 minutos',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-white/60 leading-snug">
                  <span className="text-hot-pink font-bold mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ─── Service cards grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {services.map((s, i) => <ServiceCard key={i} s={s} />)}
        </div>

        {/* ─── Retainer full-width ─── */}
        <div className="bg-white/4 border border-violet/20 rounded-2xl p-7 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-violet/15 text-purple-300 border border-violet/25 mb-3">Retainer mensual</span>
            <h3 className="text-white font-bold text-xl mb-1.5">DevOps on Demand</h3>
            <p className="text-white/40 text-sm italic mb-4">Tu DevOps como parte del equipo, sin el costo full-time.</p>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Después de trabajar juntos en un proyecto, podés contar con capacidad DevOps mensual fija: soporte, mejoras continuas, revisiones y consultas.
            </p>
            <div className="bg-amber-brand/10 border border-amber-brand/25 rounded-xl px-4 py-3 text-amber-brand text-sm">
              ⚠️ Disponible solo para clientes que completaron al menos un proyecto con Global Iport.
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-white/30 mb-4">Planes disponibles</p>
            <div className="space-y-3 mb-4">
              {retainerPlans.map((plan, i) => (
                <div key={i} className="flex items-center justify-between bg-white/4 border border-white/6 rounded-xl px-4 py-3 hover:border-violet/35 transition-colors">
                  <div>
                    <div className="text-white font-semibold text-[15px]">{plan.name}</div>
                    <div className="text-slate-brand text-xs">{plan.hours}</div>
                  </div>
                  <a
                    href={`mailto:${MAIL}?subject=${encodeURIComponent('DevOps on Demand — ' + plan.name)}`}
                    className="text-purple-300 text-[13px] font-semibold hover:text-white transition-colors"
                  >
                    Consultar →
                  </a>
                </div>
              ))}
            </div>
            <p className="text-white/30 text-xs italic">Canal dedicado · Reporte mensual</p>
          </div>
        </div>

      </div>
    </section>
  )
}
