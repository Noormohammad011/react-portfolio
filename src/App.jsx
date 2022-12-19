import React from 'react'
import { About, Brands, Header, Hero } from './components'
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <div style={{ height: '1000px' }}></div>
    </div>
  )
}

export default App
