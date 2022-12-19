import React from 'react'
import { social } from '../data'
const Socials = () => {
  return (
    <ul className='flex space-x-6'>
      {social.map((item, index) => (
        <li
          key={index}
          className='flex justify-between items-center text-accent'
        >
          <a className='text-base cursor-pointer' href={item.link}>{item.icon}</a>
        </li>
      ))}
    </ul>
  )
}

export default Socials
