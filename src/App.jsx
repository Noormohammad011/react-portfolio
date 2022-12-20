import React from 'react'
import {
  About,
  Brands,
  Header,
  Hero,
  Skills,
  Services,
  Testimonials,
  Contact,
  Footer,
  BackToTop,
} from './components'
import Portfolio from './components/Portfolio'
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
