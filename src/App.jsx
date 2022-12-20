import React from 'react'
import { About, Brands, Header, Hero, Skills } from './components'
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
      <div style={{ height: '1000px' }}></div>
    </div>
  )
}

export default App
