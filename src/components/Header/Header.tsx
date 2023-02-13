import React from 'react';
import { Container } from './styles';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';

import Curriculum from '../../assets/CV_IgnacioNicoletti.pdf';
import { Link } from 'react-router-dom';

export function Header() {
  const [isactive, setActive] = useState(false);
  const [render, setRender] = useState(false);

  // function toggleTheme() {
  //   let html = document.getElementsByTagName('html')[0];
  //   html.classList.toggle('light');
  // }

  function closeMenu() {
    setActive(false);
    setRender(!render)
  }
  const nameUrl = window.location.pathname

  return (

    nameUrl === "/" ?
      <Container className='header-fixed'>


        <HashLink smooth to='#home' className='logo'>
          <span>Matias Golubeff</span>
        </HashLink>

        {/* <input
          onChange={toggleTheme}
          className='container_toggle'
          type='checkbox'
          id='switch'
          name='mode'
        />
        <label htmlFor='switch'></label> */}

        <nav className={isactive ? 'active' : ''}>
          <NavHashLink smooth to='#home' onClick={closeMenu}>
            inicio
          </NavHashLink>
          <NavHashLink smooth to='#sobre' onClick={closeMenu}>
            Sobre mi
          </NavHashLink>

          <Link to='/producciones' onClick={closeMenu}>
            Producciones
          </Link>

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

      </Container >
      :
      <Container className='header-fixed'>


        <HashLink smooth to='#home' className='logo'>
          <span>Matias Golubeff</span>
        </HashLink>

        {/* <input
          onChange={toggleTheme}
          className='container_toggle'
          type='checkbox'
          id='switch'
          name='mode'
        />
        <label htmlFor='switch'></label> */}

        <nav className={isactive ? 'active' : ''}>
          <Link to='/' onClick={closeMenu}>
            inicio
          </Link>
          {/* <NavHashLink smooth to='#sobre' onClick={closeMenu}>
            Sobre mi
          </NavHashLink>

          <Link to='/producciones' onClick={closeMenu}>
            Producciones
          </Link>

          <NavHashLink smooth to='#contacto' onClick={closeMenu}>
            Contacto
          </NavHashLink> */}

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

      </Container >
  );
}
