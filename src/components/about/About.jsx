import React from 'react'
import './about.css'
import ME from '../../assets/me-2.jpg'
import { FaAward } from 'react-icons/fa'
import { TbFileCertificate } from 'react-icons/tb'
import { TiFolder } from "react-icons/ti"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <a href="https://atria.edu/home.php" target="_blank" rel="noreferrer"><h5>Education</h5></a>
                <small>Atria Institute Of Technology, Bangalore</small>
                <small>Computer Science & Engineering</small>
              </article>

              <article className='about__card'>
                <TbFileCertificate className='about__icon'/>
                <a href="https://drive.google.com/drive/folders/1MWzH4T65bTfe78-t2UvWirHMzTC6libn?usp=share_link" target="_blank" rel="noreferrer"><h5>My certificate's </h5></a>
                <small></small>
              </article>

              <article className='about__card'>
                <TiFolder className='about__icon'/>
                <a href="https://github.com/Raheem02?tab=repositories" target="_blank" rel="noreferrer"><h5>Projects</h5></a>
                <small>10+ Completed</small>
              </article>
            </div>

            <p>I am Abdul Raheem currently pursuing my B.E. in Computer Science and Engineering degree at Atria Institute Of Technology, Bangalore.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestias aliquid deserunt adipisci delectus amet vel quidem velit voluptatibus earum assumenda, facilis, esse dolorum explicabo doloribus incidunt aspernatur nihil sint?
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About