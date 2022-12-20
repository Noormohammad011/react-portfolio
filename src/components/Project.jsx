import React from 'react'

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt={item.image} />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='capitalize text-accent text-sm mb-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
        repellendus!
      </p>
      <div className='flex flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-4 xs:space-x-0'>
        <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all text-sm'>
          Code Link
        </button>
        <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all text-sm'>
          Live Link
        </button>
        <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all text-sm'>
          Live Link
        </button>
      </div>
    </div>
  )
}

export default Project
