import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Camino   from './components/Camino'
import Services from './components/Services'
import About    from './components/About'
import FAQ      from './components/FAQ'
import CtaFinal from './components/CtaFinal'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Camino />
      <Services />
      <About />
      <FAQ />
      <CtaFinal />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
