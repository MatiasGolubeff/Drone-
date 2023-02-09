import React from 'react';
import { Container } from './styles';
import reactIcon from '../../assets/react-icon.svg';
import linkedinIcon from '../../assets/linkedin.png';
import instagramIcon from '../../assets/instagram.png';

export function Footer() {
  return (
    <Container className='footer'>
      <a href='/' className='logo'>
        <span>G</span>
        <span>olubeff</span>
      </a>
      <div>
        <p>
          No dudes en consultar{' '}
          {/* <img src={reactIcon} alt='React' /> */}
        </p>
      </div>

      <div className='social-media'>
        <a
          href='https://www.instagram.com/tutegolubeff'
          target='_blank'
          rel='noreferrer'
        >
          <img src={instagramIcon} alt='Instagram' />
        </a>
        <a
          href=''
          target='_blank'
          rel='noreferrer'
        >
          <img src={linkedinIcon} alt='Linkedin' />
        </a>



      </div>
    </Container>
  );
}
