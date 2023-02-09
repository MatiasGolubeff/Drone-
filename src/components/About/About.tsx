import React from 'react';
import { Container } from './styles';
import profileImage from '../../assets/profile-image.png';
import ScrollAnimation from 'react-animate-on-scroll';

export function About() {
  return (
    <Container id='sobre'>
      <div className='about-text'>
        <ScrollAnimation animateIn='fadeInLeft'>
          <h2>Sobre mi</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInLeft' delay={0.2 * 1000}>
          <p>
            Mi nombre es Matias Golubeff
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
          <p>
            Soy una persona responsable y dedicada a la hora de tomar un trabajo
            enfocandome en todos los detalles y tomas desde el drone.
          </p>
        </ScrollAnimation>


      </div>
      <div className='about-image'>
        <ScrollAnimation animateIn='fadeInRight' delay={0.6 * 1000}>
          <img src={profileImage} alt='profileImage' />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
