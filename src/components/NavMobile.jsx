import React, { useState } from 'react'

import { navigation } from '../data'
import { FaBars, FaTimes } from 'react-icons/fa'

import { Socials } from '../components'

// animation
import { motion } from 'framer-motion'
// scrol
import { Link } from 'react-scroll'
const NavMobile = () => {
  const [IsOpen, setIsOpen] = useState(false)

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  }
  const ulVariatns = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  }
  return (
    <nav className='relative'>
      {/* menu icon */}
      <div
        onClick={() => setIsOpen(!IsOpen)}
        className='cursor-pointer text-white'
      >
        <FaBars className='w-8 h-8' />
      </div>
      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={IsOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-accent fixed top-0 right-0'
      ></motion.div>
      {/* menu */}
      <motion.ul
        variants={ulVariatns}
        initial='hidden'
        animate={IsOpen ? 'visible' : ''}
        className={`${
          IsOpen ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        {/* close icon */}
        <div
          onClick={() => setIsOpen(IsOpen)}
          className='cursor-pointer absolute top-8 right-8'
        >
          <FaTimes className='w-8 h-8' />
        </div>
        {/* nav */}
        {navigation.map((item, index) => (
          <li key={index} className='mb-8'>
            <Link
              to={item.href}
              spy={true}
              onClick={() => setIsOpen(!IsOpen)}
              smooth={true}
              offset={-70}
              duration={500}
              className='text-xl cursor-pointer capitalize text-white'
            >
              {item.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </nav>
  )
}

export default NavMobile
