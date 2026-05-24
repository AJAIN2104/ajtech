import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Home