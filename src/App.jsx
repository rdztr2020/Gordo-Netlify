
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Dishes from './components/Dishes'
import About from './components/About'
import Mission from './components/Mission'
import Expertise from './components/Expertise'
import Reviews from './components/Reviews'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection/>
      <Navbar/>
      <Dishes/>
      <About/>
      <Mission/>
      <Expertise/>
      <Reviews/>
      <ContactSection/>
      <Footer/>
    </main>
  )
}

export default App