import React, { useState } from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'
import { Bounce } from 'react-reveal'
import { Link } from 'react-scroll'
// import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Navbar from '../navbar/Navbar'
import config from '../../config'
import profile from '../../images/justina_lam_profile_circle.png'
import linkedin from '../../images/social/linkedin.png'
import resumeIcon from '../../images/social/resume.png'
import resumePdf from '../../files/Justina_Lam_Resume.pdf'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className="home-wrapper">
      <Navbar />
      <div className="home">
        {/* <Particles className="particles" params={config.particles} /> */}
        <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
          <Fade bottom distance="40px">
            <img
              className="profileimg"
              alt="justina lam profile picture"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Justina Lam</span>.{' '}
              {/* <span className="wave-emoji" role="img" aria-label="waving hand"> 👋 </span> */}
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    'I design for scalability.',
                    'I transform ideas into projects.',
                    'I look for a need...',
                    '...and create a solution.',
                    'I write for efficiency.',
                    'I love learning new tech.',
                    'I love meeting new people.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '<',
                  delay: 50,
                }}
              />
            </h1>
            <Bounce cascade>
              <div className="links">
                <a
                  href="https://www.linkedin.com/in/justina-lam-cs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linkedin Logo" width="50px" />
                </a>
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={resumeIcon} alt="Resume Logo" width="50px" />
                </a>
              </div>
            </Bounce>
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
          </Fade>
        </div>
        
      </div>
    </div>
  )
}

export default Home
