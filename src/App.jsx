import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Milestones from './components/Milestones'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const Scene3D = lazy(() => import('./components/3d/Scene3D'))

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
      <div className="app-content">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Milestones />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
