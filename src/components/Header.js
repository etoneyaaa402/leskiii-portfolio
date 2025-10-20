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

  const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  };

  const handleLinkClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  const Navigation = () => (
    <nav>
      <a onClick={() => handleLinkClick('about')}>Обо мне</a>
      <a onClick={() => handleLinkClick('maininfo')}>Навыки</a>
      <a onClick={() => handleLinkClick('experience')}>Опыт</a>
      <a onClick={() => handleLinkClick('portfolio')}>Портфолио</a>
      <a onClick={() => handleLinkClick('footer')}>Контакты</a>
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