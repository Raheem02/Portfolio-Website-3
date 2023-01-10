import React from 'react'
import PRJ1 from '../../assets/project1.gif'
import PRJ2 from '../../assets/project2.gif'
import PRJ3 from '../../assets/project3.gif'
import PRJ4 from '../../assets/project4.gif'
import PRJ5 from '../../assets/project5.gif'
import PRJ6 from '../../assets/project6.gif'
import './portfolio.css'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Fortfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ1} alt="IMG" />
          </div>
          <h3>My first Portfolio website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Raheem02/Portfolio-Website-1" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://laskaris01.netlify.app" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ2} alt="IMG" />
          </div>
          <h3>Life Cycle Of Frog using OpenGL </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Raheem02/Life-Cycle-Of-Frog" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com/Raheem02/Life-Cycle-Of-Frog" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ3} alt="IMG" />
          </div>
          <h3>Breaking Sinking of Ice berg and Cruise after colliding</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Raheem02/Breaking-Sinking-of-Ice-berg-and-Cruise-after-colliding" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com/Raheem02/Breaking-Sinking-of-Ice-berg-and-Cruise-after-colliding" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ4} alt="IMG" />
          </div>
          <h3>My Second Portfolio website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Raheem02/-Portfolio-Website-2" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://laskaris02.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ5} alt="IMG" />
          </div>
          <h3>Logical Lift</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Raheem02/Logical-Lift" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com/Raheem02/Logical-Lift" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ6} alt="IMG" />
          </div>
          <h3>Shadow Cube</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Raheem02/Shadow-Cube" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com/Raheem02/Shadow-Cube" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default Portfolio