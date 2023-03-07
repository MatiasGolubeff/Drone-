import React from 'react';
import { Container } from './styles';
import comboDrone from '../../assets/combodrone.jpg';
import frontalDrone from '../../assets/dronFrontal.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

export function AboutDrone() {
  return (
    <Container id='sobre'>
      <div className='about-text'>
        <ScrollAnimation animateIn='fadeInLeft'>
          <h2>Sobre el drone  DJI-FPV</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInLeft' delay={0.2 * 1000}>
          <p>
            DJI-FPV
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='fadeInLeft'
          delay={0.4 * 1000}
          style={{ marginTop: '2rem', marginBottom: '2rem' }}
        >
          <p>
            Actualmente manejo el Drone: DJI-FPV
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInLeft' delay={0.6 * 1000}>
          <h4>Camara:</h4>
          <ul>
            <li>Resolución de video:
              <li>- 4K: 3840×2160 a 50/60 fps.</li>
              <li>- FHD: 1920 × 1080 a 50/60/100/120 fps.</li>
            </li>
          </ul>
          <h4>Lente:</h4>
          <ul>
            <li>
              <li>-FOV: 150° Equivalente al formato de 35 mm: 14,66 mm.</li>
              <li>-Apertura: f/2,8 .</li>
              <li>-Modo de enfoque: Enfoque fijo.</li>
              <li>-Rango de enfoque: 0,6 m a ∞.</li>
            </li>
          </ul>
          <h4>Estructura:</h4>
          <ul>
            <li>
              <li>-Dimensiones: 255×312×127 mm (con hélices) |
                178×232×127 mm (sin hélices).</li>
              <li>-Velocidad maxima: 140 kilómetros por hora.</li>
              <li>-Tiempo máximo de vuelo: Aproximadamente 20 minutos. </li>
              <li>-Número de antenas: cuatro.</li>
            </li>
          </ul>
        </ScrollAnimation>


      </div>
      <div className='drone-image'>
        <ScrollAnimation animateIn='fadeInRight' delay={0.6 * 1000}>
          <img src={comboDrone} alt='comboPhoto' />
          <img src={frontalDrone} alt='drone frontal' />

        </ScrollAnimation>
      </div>
    </Container>
  );
}
