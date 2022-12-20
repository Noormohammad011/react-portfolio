import React from 'react'
 import { ToastContainer } from 'react-toastify'
 import 'react-toastify/dist/ReactToastify.css'
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
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  )
}

export default App
