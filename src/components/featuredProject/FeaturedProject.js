import React from 'react'
import './FeaturedProject.css'

const FeaturedProject = ({ project }) => {
  const { github, img, live, name, technologies, time } = project;
  return (
    <div className="project-link">
      <div>
        <div>
          <img width='100%' src={img} alt={`Mahmudul islam moon project ${name}`} />
        </div>
        <div className='project-name'>
          <h3 style={{ margin: '5px 0' }}>{name}</h3>
        </div>
        <hr />
        <div>

        </div>
        <div style={{ margin: '5px 50px', textAlign: 'start' }}>
          <p style={{ marginBottom: '0' }}>Technologies</p>
          <ul>
            {technologies.map(tech => {
              return <li key={tech}>{tech}</li>
            })}
          </ul>
          <p>Duration: {time}</p>
        </div>

      </div>
      <div className='live-github'>
        <a href={live} target="_blank" rel='noopener noreferrer'>Live</a>
        <a href={github} target="_blank" rel='noopener noreferrer'>Github</a>
      </div>
    </div>
  )
}

export default FeaturedProject
