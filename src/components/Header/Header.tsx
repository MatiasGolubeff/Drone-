import React from 'react';
import { Container } from './styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';

import Curriculum from '../../assets/CV_IgnacioNicoletti.pdf';

export function Header() {
  const [isactive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className='header-fixed'>
      <Router>
        <HashLink smooth to='#home' className='logo'>
          <span>Matias Golubeff</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className='container_toggle'
          type='checkbox'
          id='switch'
          name='mode'
        />
        <label htmlFor='switch'></label>

        <nav className={isactive ? 'active' : ''}>
          <NavHashLink smooth to='#home' onClick={closeMenu}>
            inicio
          </NavHashLink>
          <NavHashLink smooth to='#sobre' onClick={closeMenu}>
            Sobre mi
          </NavHashLink>
          <NavHashLink to='Producciones' onClick={closeMenu}>
            Producciones
          </NavHashLink>
          <NavHashLink smooth to='#contacto' onClick={closeMenu}>
            Contacto
          </NavHashLink>
          <a href={Curriculum} download className='button'>
            CV
          </a>
        </nav>

        <div
          aria-expanded={isactive ? 'true' : 'false'}
          aria-haspopup='true'
          aria-label={isactive ? 'Cerrar menu' : 'Abrir menu'}
          className={isactive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isactive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
