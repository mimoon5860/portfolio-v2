import React, { useState } from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Navbar from '../navbar/Navbar'
import config from '../../config'
import profile from '../../images/moondp.jpg'
import linkedin from '../../images/social/linkedin.png'
import facebook from '../../images/social/facebook.png'
import github from '../../images/social/github.png'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className="home-wrapper">
      <div className="home">
        <Particles className="particles" params={config.particles} />
        <div className={`greeting${!imageLoaded ? 'hide' : ''}`}>
          <Fade bottom distance='40px'>
            <div className='img-and-logos' >
              <img
                className="profile"
                alt="Mahmudul islam moon profile"
                src={profile}
                onLoad={() => setImageLoaded(true)}
              />
              <div className="social-logos">
                <div className="links">
                  <a
                    href="https://www.linkedin.com/in/mahmudul-islam-moon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='logo'
                  >
                    <img src={linkedin} alt="Linkedin Logo" width="50px" />
                  </a>
                </div>
                <div className="links logo2">
                  <a
                    href="https://www.facebook.com/em.ai.moon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebook} alt="Facebook Logo" width="50px" />
                  </a>
                </div>
                <div className="links logo">
                  <a
                    href="https://github.com/mimoon5860"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="Github Logo" width="50px" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
          <Fade bottom distance="40px">
            <div className='hello-text'>
              <h1 className="greeting-text">
                Hi, I'm <span className="name">Moon</span>.{' '}
                <span className="wave-emoji" role="img" aria-label="waving hand">
                  👋
                </span>
              </h1>
              <h1 className="greeting-text">
                <Typewriter
                  options={{
                    strings: [
                      '<I like to develop things.',
                      '<I love learning new tech.',
                      '<I love meeting new people.',
                      '<I create unique digital experiences.',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                    cursor: '/>',
                    delay: 100,
                  }}
                />
              </h1>
              <a className='download-resume' target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1I7hTDlndoiyMn1mR3Vf0N6PjHg8EiULq/view">Download Resume</a>
            </div>
          </Fade>
        </div>
        <div className="scroll-down">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-63}
            duration={500}
          >
            <ArrowDropDownCircleIcon
              fontSize="large"
              style={{ pointerEvents: 'fill', cursor: 'pointer' }}
            />
          </Link>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
