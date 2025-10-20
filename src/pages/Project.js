import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

import userFlow from '../assets/images/user-flow.png';
import colorPalette from '../assets/images/colors.png';
import typography from '../assets/images/text.png';
import grid from '../assets/images/gridd.png';
import wareFrame from '../assets/images/main_page.png';
import productImg from '../assets/images/product.png';
import ordersImg from '../assets/images/orders.png';
import mainImg from '../assets/images/main.png';
import '../components/ScrollToTopButton.css';
import ScrollToTopButton from '../components/ScrollToTopButton';

function Project() {
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
            <h2>Дизайн веб-сайта для студии съёмки на плёнку</h2>
            <div className="project-content">
                <div className='summaty-info'>
                    <ul>
                        <li>**проект__    --&gt;   дизайн адаптивного сайта для студии</li>
                        <li>**моя роль__    --&gt;   UX/UI - дизайнер</li>
                        <li>**задача__    --&gt;    разработать сайт, который передаст уникальную атмосферу пленочной фотографии, привлечет новых клиентов и упростит процесс заказа съёмки</li>
                        <li>**инструменты__    --&gt;   Figma, Photoshop</li>
                        <li>**сроки__    --&gt;   4 недели</li>
                    </ul>
                </div>
                <div>
                    <p>Студия столкнулась с проблемой: их услуги было сложно найти онлайн, а существующая страница в соцсетях не передавала всей эстетики и не позволяла удобно записываться на съёмку</p>
                    <p>**бизнес-цель__  повысить узнаваемость бренда, увеличить количество онлайн-заказов</p>
                    <p>**пользовательская цель__    помочь пользователям легко найти информацию о товаре и быстро оформить заказ</p>
                </div>
            </div>
            <h2>анализ__</h2>
            <p>Я начала с анализа целевой аудитории (кто эти люди, что для них важно при выборе техники?) и конкурентов, чтобы понять, как выделиться на рынке</p>
            <p>Ключевой задачей было создать интуитивно понятный путь пользователя (User Flow) от выбора товара до оформления заказа. Я спроектировала логику сайта так, чтобы каждый шаг был предсказуемым и не вызывал вопросов.</p>
            <img src={userFlow} alt="user-flow" className='userFlow'/>
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
                    <p>**страница товара__</p>
                    <img src={productImg} alt="product" />
                </div>
                <div className='maket-part'>
                    <p>**страница заказов__</p>
                    <img src={ordersImg} alt="orders" />
                </div>
                
                
            </div>
        </section>
    );
}

export default Project;
