import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const AboutParagraph = ({text}) => {
  return (
    <p>
      <span role="img" aria-label="lightning"> ⚡ </span>{' '}
      {text}
    </p>
  )
}

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              <span role="img" aria-label="lightning"> ⚡ </span>{' '}
              I'm an undergraduate at the <strong>University of Pennsylvania</strong> studying <strong>Computer Science.</strong>
            </p>
            <p>
              <span role="img" aria-label="lightning"> ⚡ </span>{' '}
              My primary experience is in <strong>AI/Machine Learning</strong> and <strong>Data, </strong>
              as well as <strong>Cloud</strong> and <strong>Networked Systems,</strong> and <strong>Backend Web Development.</strong>
            </p>
            <AboutParagraph text={
              // dedicated to building, excited by, I focus on, seeking, striving towards, 
              `I'm seeking to build innovative software solutions 
              in diverse industries, including quantitative and computational applications in 
              finance and medicine, as well as software engineering.`
            }/>
            <AboutParagraph text={
              `Driven by curiosity, a passion for learning new skills and pursuit of intellectual growth, 
              and a compelling impulse to explore and push the limits of what's possible.`
            }/>
            {/* designing creative/innov solutions to complex problems */}
            <AboutParagraph text={
              `Excels in a fast-paced, high-intensity environment with opportunities for growth and learning new skills.`
            }/>
            {/* expand, inclination */}
            {/* keen fascination with complex problem-solving, innovative technologies and advancements/solutions/approaches to complex problems, insights  */}

            {/* I'm a software engineer focusing on Front-End web and emerging tech such as VR, AR and Blockchain. */}
            {/* You can find me working with UE5, JavaScript, React, Vue, Node, Apollo and Gatsby. */}
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning"> ⚡ </span>{' '}
                I love
              </p>
              <Typewriter
                options={{
                  strings: [
                    'building innovative software solutions',
                    'learning new technologies',
                    'tackling challenging projects',
                    'solving complex problems',
                    'exploring new ideas and applications',
                    'collaborating with others',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  delay: 50,
                }}
              />
              <p>.</p>
            </div>
            <p>
              Since 2019 - I've spent my time delving into various domains of CS through 
              independent study and self-guided exploration, as well as formal education and experience. 
              <br></br><br></br>This has led to me building numerous personal{' '}
              <Link
                className="textLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                projects
              </Link>
              , working at some{' '}
              <Link
                className="textLink"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                amazing places
              </Link>
              , and collaborating with some great people.
            </p>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Cherry Hill, NJ</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
