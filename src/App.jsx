import React from 'react'
import { About, Brands, Header, Hero, Skills } from './components'
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <div style={{ height: '1000px' }}></div>
    </div>
  )
}

export default App
