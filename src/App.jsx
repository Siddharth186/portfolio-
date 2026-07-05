import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const CosmicBackground = lazy(() => import('./components/3d/CosmicBackground'))

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <CosmicBackground />
      </Suspense>
      <div className="app-content">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
