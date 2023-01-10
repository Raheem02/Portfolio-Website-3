import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { SiHackerrank } from 'react-icons/si'
import {BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/raheem02" target= "_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Raheem02" target= "_blank" rel="noreferrer"><IoLogoGithub/></a>
        <a href="https://www.hackerrank.com/raheem02?hr_r=1" target= "_blank" rel="noreferrer"><SiHackerrank/></a>
        <a href="https://www.instagram.com/raheem._.02/" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials