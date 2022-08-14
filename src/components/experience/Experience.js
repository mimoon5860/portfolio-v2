import React from 'react'
import './Experience.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'

const Experience = () => {
  return (
    <Section title="Experience">
      <div className="experience-content">
        <ul className="experience-list">

          <li >
            <Fade bottom duration={1000} distance="20px">
              <div className="experience-card">
                <div>
                  <h2 style={{ marginBottom: '0' }}>M360ICT</h2>
                  <small>Gulshan 2, Dhaka – 1212, Bangladesh</small>
                </div>
                <div>
                  <p>Position: Node js developer</p>

                </div>
                <div>
                  <small>I work here as a fullstack software developer.
                    <br />
                    I make software and web applications by react and node js and more framework and tools with a team!</small>
                </div>
                <h4>December 2021 - Present</h4>
              </div>
            </Fade>
          </li>
        </ul>
      </div>
    </Section >
  )
}

export default Experience
