import React, { useRef } from 'react'
import IsVisible from 'react-is-visible'
import { Fade } from 'react-reveal'
// import { skills } from '../../data/skills.json'
// import skillsData from '../../data/skills.json'
import { useContainerDimensions } from '../../hooks'
import { SkillBubbleRow, SkillBubbleRowWrapper } from './SkillElements'
import { SkillBubble } from './SkillElements'

const Skills = () => {
    const colors = {
        // purple: "#ba86fc",
        purple: "#c840fe",
        // pink: "#fa02e1",
        // pink: "#fa33bb",
        pink: "#ff57e6",
        green: "#0be779",
        // green: "#01fff4",
        // green: "#7cff01",
        // cyan: "#03dac6",
        cyan: "#01eef4",
        // cyan: "#c840fe",
        orange: "#ffae42",
    }

    const skillsLists = [
        {
            color: colors.green,
            listName: "Languages",
            skills: [
                "Python",
                "Java",
                "JavaScript",
                "C",
                "C++",
                "Go",
                "R",
                "XML",
                "Linux shell",
                "OCaml",
                "HTML/CSS",
                "TypeScript",
            ]
        },
        {
            color: colors.cyan,
            listName: "Data & ML",
            skills: [
                "TensorFlow", 
                "PyTorch", 
                "Keras", 
                "Hugging Face", 
                "Scikit-Learn", 
                "NumPy", 
                "Pandas",
                "Hail", 
            ]
        },
        {
            color: colors.pink,
            listName: "Web",
            skills: [
                "ReactJS",
                "NodeJS",
                "Express",
                "Flask",
                "Django",
            ]
        },
        {
            color: colors.orange,
            listName: "Cloud & DevOps",
            skills: [
                "AWS", 
                "MongoDB", 
                "SQL", 
                "Docker", 
                "Kubernetes", 
                "Istio", 
                "Envoy", 
                "Azure APIM", 
                "WebAssembly", 
                "Git",
            ]
        },
    ];

    


  const skillsWrapper = useRef()
  const { width } = useContainerDimensions(skillsWrapper)

  return (
    <Fade duration={1000}>
      <div style={{ position: 'relative', width: '100%', maxWidth: 600 }}>
        <IsVisible once>
          {(isVisibleSkillsWrapper) => (
            <div
              className="skills-wrapper"
              style={
                isVisibleSkillsWrapper
                  ? {
                      transition: '1s opacity ease-in-out',
                      transform: `translateX(0)`,
                      opacity: 1,
                    }
                  : {}
              }
            >
              <h2>Skills</h2>
              <ul className="skills" ref={skillsWrapper}>

                {skillsLists.map((skillsList) => {
                  return (
                    <SkillBubbleRowWrapper>
                        <SkillBubbleRow>
                            {skillsList.skills.map((skill) => {
                            return (
                                <SkillBubble bubbleColor={skillsList.color}>{skill}</SkillBubble>
                            )
                            })}
                        </SkillBubbleRow>
                    </SkillBubbleRowWrapper>
                  )
                })}
              
                
                {/* {skillsData.skills.map((skills) => {
                  return (
                    <li className="skill-bar-wrapper" key={skills.skillName}>
                      <div
                        className="skill-bar"
                        style={
                          isVisibleSkillsWrapper
                            ? {
                                transition: `${
                                  1 + skills.id / 10
                                }s width ease-in-out`,
                                width: width * (skills.amount / 100),
                              }
                            : {
                                width: 1,
                              }
                        }
                      ></div>
                      <div className="skill-name">{skills.skillName}</div>
                    </li>
                  )
                })} */}
              </ul>
            </div>
          )}
        </IsVisible>
      </div>
    </Fade>
  )
}

export default Skills
