import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import ContactForm from './ContactForm'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import facebook from '../../images/social/facebook.png'
import resumeIcon from '../../images/social/resume.png'
import resumePdf from '../../files/Justina_Lam_Resume.pdf'

const Contact = () => {
  return (
    <Section title="Contact">
      {/* <ContactForm /> */}
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/JustinaLam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/justina-lam-cs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={resumeIcon} alt="Resume Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
