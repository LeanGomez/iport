import logoIcon from '../assets/logo-icon.png'

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-void-navy relative overflow-hidden pt-16">

      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,46,238,0.18) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,146,11,0.10) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Copy ── */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-amber-brand text-xs font-bold tracking-[0.1em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-brand inline-block"></span>
              DevOps · Cloud · Automation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight mb-5">
              Tu infraestructura AWS,{' '}
              <span className="gradient-text">en orden.</span>
            </h1>

            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-[480px]">
              Ayudamos a pymes a ordenar, asegurar y optimizar su cuenta AWS — con impacto real en días, no en meses. Proyectos de alcance fijo, precio cerrado, sin humo.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="mailto:contacto@globaliport.com?subject=Health Check Gratuito"
                className="inline-flex items-center justify-center gap-2 gradient-bg text-white font-bold px-6 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-violet/35 text-[15px]"
              >
                Empezá con el Health Check Gratis
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/6 transition-all duration-200 text-[15px]"
              >
                Ver servicios
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-5">
              {[
                'Diagnóstico 100% gratis',
                'Precio fijo en USD',
                'NDA antes de arrancar',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/45">
                  <svg className="w-3.5 h-3.5 text-hot-pink flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ── Visual ── */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] flex items-center justify-center">

              {/* Deep ambient glow */}
              <div className="absolute inset-0 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(123,46,238,0.60) 0%, rgba(248,69,104,0.26) 32%, rgba(247,146,11,0.09) 58%, transparent 76%)' }}
              />
              <div className="absolute inset-0 rounded-full portal-core"
                style={{ background: 'radial-gradient(circle, rgba(248,69,104,0.20) 0%, transparent 50%)' }}
              />

              {/* Ring 3 — outermost ghost, 16s */}
              <div className="absolute rounded-full portal-ring-3"
                style={{
                  width: '338px', height: '338px',
                  background: 'conic-gradient(from 20deg, rgba(123,46,238,0.65), transparent 24%, rgba(247,146,11,0.65), transparent 74%, rgba(123,46,238,0.65))',
                }}>
                <div className="absolute inset-[1px] rounded-full" style={{ background: '#0A0828' }} />
                <div style={{ position:'absolute', top:'-5px', left:'calc(50% - 5px)', width:'10px', height:'10px', borderRadius:'50%', background:'#F7920B', boxShadow:'0 0 14px 6px rgba(247,146,11,0.9)', zIndex:10 }} />
              </div>

              {/* Ring 2 — medium reverse, 9s */}
              <div className="absolute rounded-full portal-ring-2"
                style={{
                  width: '268px', height: '268px',
                  background: 'conic-gradient(from 120deg, rgba(248,69,104,0.95), rgba(247,146,11,0.15), rgba(248,69,104,0.04), rgba(123,46,238,0.95), rgba(248,69,104,0.95))',
                }}>
                <div className="absolute inset-[1.5px] rounded-full" style={{ background: '#0A0828' }} />
                <div style={{ position:'absolute', top:'-6px', left:'calc(50% - 6px)', width:'12px', height:'12px', borderRadius:'50%', background:'#F84568', boxShadow:'0 0 16px 6px rgba(248,69,104,0.95)', zIndex:10 }} />
              </div>

              {/* Ring 1 — fast, 5s */}
              <div className="absolute rounded-full portal-ring-1"
                style={{
                  width: '208px', height: '208px',
                  background: 'conic-gradient(from 240deg, #7B2EEE, #F84568, #F7920B, #F84568, #7B2EEE)',
                }}>
                <div className="absolute inset-[2px] rounded-full" style={{ background: '#0A0828' }} />
                <div style={{ position:'absolute', top:'-7px', left:'calc(50% - 7px)', width:'14px', height:'14px', borderRadius:'50%', background:'#7B2EEE', boxShadow:'0 0 18px 8px rgba(123,46,238,1)', zIndex:10 }} />
              </div>

              {/* Ring 4 — innermost, very fast reverse, 2.2s */}
              <div className="absolute rounded-full portal-ring-4"
                style={{
                  width: '170px', height: '170px',
                  background: 'conic-gradient(from 0deg, rgba(247,146,11,0.95), rgba(248,69,104,0.18), rgba(247,146,11,0.06), rgba(248,69,104,0.95), rgba(247,146,11,0.95))',
                }}>
                <div className="absolute inset-[2px] rounded-full" style={{ background: '#0A0828' }} />
                <div style={{ position:'absolute', top:'-5px', left:'calc(50% - 5px)', width:'10px', height:'10px', borderRadius:'50%', background:'#F7920B', boxShadow:'0 0 12px 5px rgba(247,146,11,0.9)', zIndex:10 }} />
              </div>

              {/* Inner vortex conic spin */}
              <div className="absolute rounded-full"
                style={{
                  width: '118px', height: '118px',
                  background: 'conic-gradient(from 0deg, transparent 0%, rgba(123,46,238,0.30) 22%, rgba(248,69,104,0.20) 44%, transparent 52%, rgba(247,146,11,0.24) 72%, rgba(123,46,238,0.28) 88%, transparent 100%)',
                  animation: 'orbit-spin 3s linear infinite',
                }}
              />

              {/* Logo */}
              <img
                src={logoIcon}
                alt="Global Iport"
                className="relative z-20 logo-portal"
                style={{ width: '148px', height: '148px', objectFit: 'contain' }}
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
