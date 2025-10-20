import React from 'react';
import { useNavigate } from 'react-router-dom';

import colorPalette from '../assets/images/colors.png';
import typography from '../assets/images/text.png';
import grid from '../assets/images/gridd.png';
import wareFrame from '../assets/images/poncy_wareframe.png';
import courierImg from '../assets/images/courier.png';
import signupImg from '../assets/images/signup.png';
import mainImg from '../assets/images/poncy_main.png';
import profileImg from '../assets/images/profile.png';
import mobileImg from '../assets/images/poncy_mobile.png';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../components/ScrollToTopButton.css';

function Project2() {
    const navigate = useNavigate();

    function handleBack() {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/');
        }
    }

    return (
        <section>
            <ScrollToTopButton />
            <button className="btn-back" onClick={handleBack} aria-label="Назад">← Назад</button>
            <h2>Дизайн веб-сайта для компании логистических перевозок</h2>
            <div className="project-content">
                <div className='summaty-info'>
                    <ul>
                        <li>**проект__    --&gt;   дизайн адаптивного сайта для компании логистических перевозок</li>
                        <li>**моя роль__    --&gt;   UX/UI - дизайнер</li>
                        <li>**задача__    --&gt;    Создать веб-ресурс, который позволит пользователям легко планировать и оптимизировать маршруты, проходя через несколько заданных точек, используя удобный интерфейс и современные технологии.</li>
                        <li>**инструменты__    --&gt;   Figma, Photoshop</li>
                        <li>**сроки__    --&gt;   8 недель</li>
                    </ul>
                </div>
                <div>
                    <p>Компании необходим был редизайн старого сайта, интерфейс был устаревший и непонятный для пользователя</p>
                    <p>**пользовательская цель__    помочь пользователям легко пользоваться всем функционалом платформы</p>
                </div>
            </div>
            <h2>анализ__</h2>
            <p>Я начала с анализа целевой аудитории (кто эти люди, что для них важно присоставлении маршрута?) и конкурентов, чтобы понять, как выделиться на рынке</p>
            <p>Ключевой задачей было создать интуитивно понятный путь пользователя (User Flow) от выбора точек до составления маршрута. Я спроектировала логику сайта так, чтобы каждый шаг был предсказуемым и не вызывал вопросов.</p>
            <div className="project-description">
                <div className='part-info'>
                    <h3>цветовая палитра__</h3>
                    <img src={colorPalette} alt="Color Palette" />
                </div>
                <div className='part-info'>
                    <h3>типографика__</h3>
                    <img src={typography} alt="Color Palette" />
                </div>
            </div>
            <h2>макет__</h2>
            <div className="project-description-2">
                <div className='part-info'>
                    <h3>разметка__</h3>
                    <img src={grid} alt="drid" />
                </div>
                <div className='part-info'>
                    <h3>варфрейм__</h3>
                    <img src={wareFrame} alt="wareframe" />
                </div>
            </div>
            <h2>дизайн__</h2>
            <div className="project-description-3">
                <div className='maket-part'>
                    <p>**главная страница__</p>
                    <img src={mainImg} alt="main" />
                </div>
                <div className='maket-part'>
                    <p>**страница для курьера__</p>
                    <img src={courierImg} alt="courier" />
                </div>
                <div className='maket-part'>
                    <p>**страница регистрации__</p>
                    <img src={signupImg} alt="signup" />
                </div>
                <div className='maket-part'>
                    <p>**страница профиля__</p>
                    <img src={profileImg} alt="profile" />
                </div>
                <div className='maket-part'>
                    <p>**мобильная версия__</p>
                    <img src={mobileImg} alt="mobile" />
                </div>
            </div>
        </section>
    );
}

export default Project2;
