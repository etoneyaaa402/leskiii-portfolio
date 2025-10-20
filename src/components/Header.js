// src/components/Header.js

import React, {useState} from 'react';
import myPhoto from '../assets/images/me.jpg'; 
import useWindowSize from '../hooks/useWindowSize';
import './Header.css';
import '../App.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {width} = useWindowSize();
  const isMobile = width < 768;

  console.log('Состояние меню (menuOpen):', menuOpen);

  const Navigation = () => (
    <nav>
      <a href="#about" onClick={() => setMenuOpen(false)}>Обо мне</a>
      <a href="#maininfo" onClick={() => setMenuOpen(false)}>Навыки</a>
      <a href="#experience" onClick={() => setMenuOpen(false)}>Опыт</a>
      <a href="#portfolio" onClick={() => setMenuOpen(false)}>Портфолио</a>
      <a href="#footer" onClick={() => setMenuOpen(false)}>Контакты</a>
    </nav>
  )
  return (
    <>
    <header>

      {isMobile && !menuOpen && (
        <button className="burger-menu" onClick={() => setMenuOpen(true)}>
          <div /> <div /> <div />
        </button>
      )}
      <div className="name-container">
        <h1>Волгина <br />Олеся</h1> 
        <img src={myPhoto} alt="me" className='meImg' />
      </div>
      <p>Веб-разработчик / Frontend / UI/UX дизайнер</p>

    </header>
      {isMobile && menuOpen && (
        <div className="mobile-nav">
           <button 
            className="close-menu-button" 
            onClick={() => setMenuOpen(false)}
            aria-label="Закрыть меню"
          >
            &times; 
          </button>
          <Navigation />
        </div>
      )}
    </>
  );
}

export default Header;