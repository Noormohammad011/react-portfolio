import React, { useEffect, useState } from 'react'
import Logo from '../assets/img/logo.svg'
import { Nav, NavMobile, Socials } from '../components'
const Header = () => {
  const [bg, setBg] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  }, [])
  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        <h1
          className={`${
            bg ? 'text-accent text-3xl' : 'text-white text-4xl'
          } italic`}
        >
          Noor Mohammad
        </h1>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* Nav-mobile */}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header
