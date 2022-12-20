import React, { useEffect, useState } from 'react'
import { Project } from '../components'
import { projectsData } from '../data'
import { projectsNav } from '../data'
const Projects = () => {
  const [item, setItem] = useState({ name: 'all' })
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category.toLowerCase() === item.name
      )
      setProjects(newProjects)
    }
  }, [item])

  const handleClick = (e, index) => {
    e.preventDefault()
    setItem({ name: e.target.textContent.toLowerCase() })
    setActive(index)
  }
  return (
    <div>
      {/* nav */}
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
          {projectsNav.map((item, index) => (
            <li
              onClick={(e) => handleClick(e, index)}
              key={index}
              className={`${
                active === index ? 'active' : ''
              } cursor-pointer capitalize m-4`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      {/* projets grid */}
      <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
        {
          projects.map((item) => (
            <Project key={item.id} item={item} />
          ))
        }
      </section>
    </div>
  )
}

export default Projects
