import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'
import location from '../../images/logos/location.png'
import education from '../../images/logos/graduation-cap.png'
import email from '../../images/logos/email.png'
import phone from '../../images/logos/phone-call.png'


const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I'm Md Mahmudul islam Moon{' '}
              <span role="img" aria-label="lightning">
                😄
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              I'm a Javascript developer focusing on fullstack web development and software development!
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              You can find me working with JavaScript, Typescript, React, Next js, Redux, Node, Express,
              MySql, MongoDB.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I love
              </p>
              <Typewriter
                options={{
                  strings: [
                    'learning new technologies',
                    'exercising',
                    'solving complex problems',
                    'skiing',
                    'fixing hard-to-fix bugs',
                    'trying new things',
                    'collaborating with others',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
              Since 2021 - I've spent my time seeking and learning new
              technologies and forms of digital expression. This has led to me
              working on some amazing world-class{' '}
              <Link
                className="textLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                projects
              </Link>
              , worked at some{' '}
              <Link
                className="textLink"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                amazing places
              </Link>
              , and worked with some great people.
            </p>
            <hr />
            <div className="location-wrapper">
              <img src={location} alt="" />
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className="location-wrapper">
              <img src={education} alt="" />
              <p>BSc in CSE from European University of Bangladesh.</p>
            </div>
            <div className="location-wrapper">
              <img src={email} alt="" />
              <div>
                <p>mahmodulislammoon@gmail.com <br /> info@mimoonweb.com</p>
              </div>
            </div>
            <div className="location-wrapper">
              <img src={phone} alt="" />
              <p>+880 1779 525860 <br /> +880 1518 790673</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
