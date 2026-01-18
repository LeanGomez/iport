import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
