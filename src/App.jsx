import React from 'react'
import {
  About,
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
