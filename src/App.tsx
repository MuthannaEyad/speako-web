import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import DrillsSlider from './components/DrillsSlider'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Mission />
      <DrillsSlider />
      <Testimonials />
      <Footer />
    </div>
  )
}
