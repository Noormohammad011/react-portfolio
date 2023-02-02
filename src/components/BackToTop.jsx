import React, { useEffect, useState } from 'react'
import { BiArrowToTop } from 'react-icons/bi'
import { animateScroll as scroll } from 'react-scroll'

const BackToTop = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [show])
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
    //
    show && (
      <button
        onClick={() => scrollToTop()}
        className='bg-accent w-12 h-12 hover:bg-accent-hover text-white rounded-full fixed right-8 bottom-24 cursor-pointer flex justify-center items-center transition-all'
      >
        <BiArrowToTop className='w-6 h-6' />
      </button>
    )
  )
}

export default BackToTop
