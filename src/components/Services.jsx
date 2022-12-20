import React from 'react'
import { services } from '../data'
const Services = () => {
  return (
    <section id='services' name='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            What I do for clients
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eaque.
          </p>
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          {services.map((service, index) => {
            const { icon, name, description } = service

            return (
              <div key={index} className='bg-secondary p-6 rounded-2xl'>
                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-8 text-[28px]'>
                  {icon}
                    </div>
                    <h2 className='text-xl font-medium mb-2'>{name}</h2>
                    <p>{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
