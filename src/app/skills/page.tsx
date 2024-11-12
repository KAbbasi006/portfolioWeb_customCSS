import { FaHtml5, FaJsSquare, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import React from 'react'

const skillsData = [
    {icon: <FaHtml5 className="skill-icon si-1" />,title: 'HTML',percentage: 95},
    {icon: <FaCss3Alt className="skill-icon si-2" />,title: 'CSS',percentage: 85},
    {icon: <FaJsSquare className="skill-icon si-3" />,title: 'JAVASCRIPT',percentage: 80},
    {icon: <SiTypescript className="skill-icon si-4"/>,title: 'TYPESCRIPT',percentage: 80},
    {icon: <SiTailwindcss className="skill-icon si-5"/>,title: 'TAILWIND CSS',percentage: 85},
    {icon: <SiNextdotjs className="skill-icon si-6"/>,title: 'NEXT.JS',percentage: 30,note: '(Currently learning)'}]
const Skills = () => {
    return (
        <div className="skills-container">
            <div>
                <h1 className="skills-title">Skills</h1>
            </div>
            <div className="skills-description">
          <p>With a strong foundation in HTML, CSS, and JavaScript, I bring designs to life with clean, efficient code and an eye for responsive layouts. Skilled in Tailwind CSS for rapid styling and TypeScript for added code reliability, I&apos;m currently expanding my expertise in Next.js to build dynamic, high-performance web applications.</p>
        </div>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                <div key={index} className="skill-card">
                    {/* Icon */}
                    <div className="skill-icon">{skill.icon}</div>
                    {/*Skill Title */}
                    <h1 className="skill-title">{skill.title} </h1>
                    {/* Skill Progress */}
                    <div className="skill-progress">
                        <div className="skill-progress-bar" style={{width:`${skill.percentage}%`}}></div>
                    </div>
                    {/* Percentage */}
                    <p className="skill-percentage">{skill.percentage}%</p>
                    {/* Optional Note */}
                    {skill.note && <p className="skill-note">{skill.note}</p>}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Skills;