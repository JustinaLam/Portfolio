import React from 'react'
import './Experience.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import ExperienceCard from './ExperienceCard'
import experienceData from '../../data/experience.json'

const Experience = () => {
  return (
    <Section title="Experience">
      <div className="experience-content">
        <ul className="experience-list">
          {experienceData.experience.reverse().map((exp) => (
            <li key={`experience-${exp.company}`}>
              <Fade bottom duration={1000} distance="20px">
                <ExperienceCard experience={exp} />
              </Fade>
            </li>
          ))}
        </ul>
        <Fade bottom duration={1200} distance="20px">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2em',
              marginBottom: '3em',
            }}
          >
            <p style={{ textAlign: 'center' }}>
              See more on my{' '}
              <a
                href="https://www.linkedin.com/in/justina-lam-cs/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#0be779',
                  cursor: 'pointer',
                }}
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </Fade>
      </div>
    </Section>
  )
}

export default Experience
