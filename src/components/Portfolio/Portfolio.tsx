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
            <h3>ARGENTINA CAMPEON DEL MUNDO</h3>

            <iframe width="350" height="200" src="https://www.youtube.com/embed/6K-2ypjl5s8" title="ARGENTINA CAMPEON DEL MUNDO - Plaza Moreno Ciudad de la Plata" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>


            {/* <div className="body">
             
              <p>Una plataforma desarrollada en el Bootcamp Soy Henry. <a href="https://nabijash.vercel.app/"> NABIJASH</a> está pensada para la inclusión de los estudiantes a las empresas mediante pasantías.
              </p>
            </div> */}

          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <h3>VILLA GESELL ARGENTINA 2022</h3>

            <iframe width="350" height="200" src="https://www.youtube.com/embed/H9Vp8XjFXYs" title="VILLA GESELL ARGENTINA 2022-  Dji FPV Manual Mode  4K" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>


            {/* <div className="body">
             
              <p>Una plataforma desarrollada en el Bootcamp Soy Henry. <a href="https://nabijash.vercel.app/"> NABIJASH</a> está pensada para la inclusión de los estudiantes a las empresas mediante pasantías.
              </p>
            </div> */}

          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <h3>ESTADIO UNO DJ BUDAKID</h3>

            <iframe width="350" height="200" src="https://www.youtube.com/embed/G3950oc-dyc" title="ESTADIO UNO DJ BUDAKID - ARGENTINA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <h3>Corriendo caballos con mi drone DJI FPV 🐎</h3>

            <iframe width="350" height="200" src="https://www.youtube.com/embed/0IzXiv-aM8c" title="Corriendo caballos con mi drone DJI FPV 🐎" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </ScrollAnimation>


      </div >
    </Container >
  );
}