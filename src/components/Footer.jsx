import React from 'react'

import { social } from '../data'
const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y6 lg:space-y-0 items-center justify-between'>
          {/* scrool icons */}
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item
              return (
                <a className='text-accent text-base' key={index} href={href}>
                  {icon}
                </a>
              )
            })}
          </div>
          {/* copy right */}
          <p className='text-center'>
            &copy; {new Date().getFullYear().toLocaleString()} Noor Mohamamd.
            All rights reserved.{' '}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
