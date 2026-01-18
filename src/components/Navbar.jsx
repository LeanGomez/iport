import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              iport
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-cyan-400 transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-300 hover:text-cyan-400 transition-colors">Servicios</a>
              <a href="#nosotros" className="text-gray-300 hover:text-cyan-400 transition-colors">Nosotros</a>
              <a href="#contacto" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all">
                Contacto
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#inicio" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Inicio</a>
            <a href="#servicios" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Servicios</a>
            <a href="#nosotros" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Nosotros</a>
            <a href="#contacto" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  )
}
