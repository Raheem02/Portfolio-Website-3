import React from 'react'
import { SiHackerrank } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoGithub } from 'react-icons/io'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>TechTalk Raheem</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.hackerrank.com/raheem02?hr_r=1" target="_blank" rel="noreferrer"><SiHackerrank/></a>
        <a href="https://www.instagram.com/raheem._.02/" target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/raheem02" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Raheem02" target= "_blank" rel="noreferrer"><IoLogoGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy;Raheem. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer