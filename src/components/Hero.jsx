import React from 'react'
import { useLottie } from 'lottie-react'
import aboutMeAnimation from '../assets/animation/lottie_animation.json'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  const options = {
    animationData: aboutMeAnimation,
    loop: true,
  }
  const { View } = useLottie(options)
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
            <p className='text-2xl text-accent mb-[22px]'>
              Hi, I'm Noor Mohammad
            </p>
            <h1 className='text-2xl leading-[44px] md:text-3xl md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold md:tracking-[-2px] text-center md:text-left'>
              I'm a{' '}
              <span className='text-accent'>
                <Typewriter
                  words={[
                    'MERN Stack developer',
                    'self motivated',
                    'React Developer',
                    'self Believer',
                  ]}
                  loop={5}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              I am passionate to do my designation's responsibility and hungry
              to explore new technology.
            </p>
            <a
              href='https://drive.google.com/file/d/1_JplLFMpbCSSDawsSY64brEBjEGDUmH3/view?usp=sharing'
              target='_blank'
              className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all uppercase'
            >
              Resume
            </a>
          </div>
          {/* right section */}
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <div className='h-[65vh]'>{View}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
