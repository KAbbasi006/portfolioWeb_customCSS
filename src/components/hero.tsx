import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import Image from 'next/image';
interface HeroProps {
  experiences: number,
  projects: number,
  clients: number
}
const Hero: React.FC<HeroProps> = ({ experiences, projects, clients }) => {
  return (
    <section className='hero'>
     
     
      {/* COLUMN 1 */}

      {/* Name and Profession */}
      <div className='hero-left'>
        <div className='intro' ><br /><br />
          <p >Hi! I am</p>
          <h1>Komal Abbasi</h1>
          <h2>Web Developer</h2>
        </div><br />
        {/* Social Media Icons */}
        <div className='social-media'>
          <a href="https://www.linkedin.com/in/komal-abbasi-2121b7275/" target="_blank" className='border-2 p-4 text-2xl rounded-full' >< BsLinkedin /></a>
          <a href="https://github.com/KAbbasi006" target="_blank" className='border-2 p-4 text-2xl rounded-full' ><FaGithub /></a>
          <a href="https://www.behance.net/KAkomalabbasi" target="_blank" className='border-2 p-4 text-2xl rounded-full' ><FaBehance /></a>
          <a href="https://assignment5-portfolio-website-odq36tdk8-komal-abbasis-projects.vercel.app" target="_blank" className='border-2 p-4 text-2xl rounded-full' ><FaGlobe /></a>
        </div><br />
        {/* Hire me button , Download CV button*/}
        <div className='buttons'>
          <button className='hire-btn'>Hire me</button>
          <button onClick={() => window.open('/Resume.png', '_blank')} className='resume-btn'>View Resume</button>
        </div><br /><br />
        {/* Experience, Project done, happy clients */}
        <div className='stats'>
          <div>
            <p className='project-num'>{experiences}+</p>
            <p>Experiences</p>
          </div>
          <div>
            <p className='project-num'>{projects}+ </p>
            <p>Projects Done</p>
          </div>
          <div>
            <p className='project-num'>{clients}+  </p>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>



     {/* COLUMN 2 */}

        {/* Right hand side (image) */}
        <div className='hero-right' >
            <div className='profile-img' ><Image src={'/profile-pic.png'} alt='Profile picture' width={400} height={400} /></div>
        </div>
      
    </section>)
}

export default Hero