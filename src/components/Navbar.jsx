import { useState, useEffect } from 'react'
import logoIcon from '../assets/logo-icon.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-white/5 ${
        scrolled ? 'bg-void-navy/97 shadow-lg shadow-black/30' : 'bg-void-navy/80'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5">
            <img src={logoIcon} alt="Global Iport" className="h-9 w-auto" />
            <span className="text-white font-bold text-[15px] tracking-tight">
              Global <span style={{ background:'linear-gradient(135deg,#7B2EEE,#F84568,#F7920B)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>I</span>port
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            <a href="#servicios"       className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200">Servicios</a>
            <a href="#como-trabajamos" className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200">Cómo trabajamos</a>
            <a href="#nosotros"        className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200">Nosotros</a>
            <a href="#faq"             className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200">FAQ</a>
          </div>

          {/* CTA */}
          <a
            href="mailto:contacto@globaliport.com?subject=Health Check Gratuito"
            className="hidden md:inline-flex items-center gap-2 gradient-bg text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-violet/30"
          >
            Health Check Gratis
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/70 hover:text-white p-1"
            aria-label="Abrir menú"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-void-navy border-t border-white/5 px-4 pt-3 pb-5 space-y-0.5">
          <a href="#servicios"       onClick={close} className="block px-3 py-2.5 text-white/65 hover:text-white text-sm rounded-lg hover:bg-white/5 transition-colors">Servicios</a>
          <a href="#como-trabajamos" onClick={close} className="block px-3 py-2.5 text-white/65 hover:text-white text-sm rounded-lg hover:bg-white/5 transition-colors">Cómo trabajamos</a>
          <a href="#nosotros"        onClick={close} className="block px-3 py-2.5 text-white/65 hover:text-white text-sm rounded-lg hover:bg-white/5 transition-colors">Nosotros</a>
          <a href="#faq"             onClick={close} className="block px-3 py-2.5 text-white/65 hover:text-white text-sm rounded-lg hover:bg-white/5 transition-colors">FAQ</a>
          <div className="pt-2">
            <a
              href="mailto:contacto@globaliport.com?subject=Health Check Gratuito"
              className="block gradient-bg text-white text-sm font-bold px-4 py-3 rounded-xl text-center"
            >
              Health Check Gratis — Es gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
