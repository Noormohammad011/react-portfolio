import React from 'react'
import profileImage from '../assets/img/profileImage.png'

const Hero = () => {
  return (
    <section
      id='home'
      name='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          {/* left section */}
          <div className='flex-1 flex flex-col items-center lg:items-start mt-4'>
            <p className='text-lg text-accent mb-[22px]'>
              Hey, I'm Noor Mohammad
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] text-center md:text-left'>
              I'm a <span className='text-accent'>Full Stack Developer</span>
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              I am passionate to do my designation's responsibility and hungry
              to explore new technology.
            </p>
            <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all uppercase'>
              Resume
            </button>
          </div>
          {/* right section */}
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img className='h-[65vh]' src={profileImage} alt='My Image' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
