import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'
const About = () => {
  return (
    <section name='about' id='about' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:w-[450px] md:mx-auto lg:mx-0 rounded-2xl'
            src='https://res.cloudinary.com/dmo3pjxre/image/upload/v1675337847/avatars/DSC_2461-Pp-300-300_3_n0eqiu.jpg'
            alt='MY Image'
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Noor Mohammad
              </h2>
              <p className='mb-4 text-accent'>Full Stack Developer</p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                To excel in a job that both challenges me and inspires me while
                pushing me to work to the best of my ability and produce the
                highest quality work
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>
              <a
                href='https://wa.me/+8801754867577'
                target='_blank'
                className='flex justify-center items-center'
              >
                Contact Me
                <span className='mx-2'>
                  <AiOutlineWhatsApp />
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
