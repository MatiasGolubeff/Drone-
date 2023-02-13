import React from 'react';
import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Mis Producciones</h2>

      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="red " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://nabijash.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Link" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>NABIJASH</h3>
              <p>Una plataforma desarrollada en el Bootcamp Soy Henry. <a href="https://nabijash.vercel.app/"> NABIJASH</a> está pensada para la inclusión de los estudiantes a las empresas mediante pasantías.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Mongoose</li>
                <li>ReactJs</li>
                <li>Redux</li>
                <li>Typescript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="red " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ignacio-nicoletti/Portfolio" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visitar sitio" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio</h3>
              <p>Una versión de mi portfolio usando React, Typescript y StyledComponents.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ignacio-nicoletti/Ta-Te-Ti-con-react-" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visitar sitio" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Ta - Te - Ti</h3>
              <p>El famoso y tradicional juego de cruces y circulos, desarrollado en React.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ignacio-nicoletti/proyecto_individual" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visitar sitio" />
                </a>

              </div>
            </header>
            <div className="body">
              <h3>VideoGames SPA</h3>
              <p>Un proyecto individual en el cual se debía construir una App utlizando React, Redux, Node y Sequelize.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Redux</li>
                <li>React</li>
                <li>Node</li>
                <li>Sequelize</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}