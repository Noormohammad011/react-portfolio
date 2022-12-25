import React from 'react'

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img
          className='rounded-2xl w-[350px] h-[300px]'
          src={item.image}
          alt={item.image}
        />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='capitalize text-accent text-sm mb-3'>{item.description}</p>
      <div className='flex flex-row space-x-2 flex-1 flex-wrap'>
        <a
          href={item.liveLInk}
          target='_blank'
          className='btn btn-md bg-accent hover:bg-accent-hover transition-all text-sm'
        >
          Demo
        </a>

        {item?.githubLink ? (
          <a
            href={item.githubLink}
            target='_blank'
            className='btn btn-md bg-accent hover:bg-accent-hover transition-all text-sm'
          >
            Github
          </a>
        ) : (
          ''
        )}
        {item?.BackendLink ? (
          <a
            href={item.BackendLink}
            target='_blank'
            className='btn btn-md bg-accent hover:bg-accent-hover transition-all text-sm'
          >
            Backend
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Project
