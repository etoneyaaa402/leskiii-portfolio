import React from 'react';
import { Link } from 'react-router-dom';

import laptopImg from '../assets/images/laptop_1.png';
import partyImg from '../assets/images/party_3.png';
import certificateImg from '../assets/images/certificate.png';
import pocyImg from '../assets/images/pocy.png';


function Portfolio() {
    return (
        <section id="portfolio">
            <h2>портфолио__</h2>
            <div className="works">
                <div className="work-item" >
                    <div className="work-item-img">
                        <img src={laptopImg} alt="Работа 1" />
                    </div>
                    <div className="work-desc">
                        <h3>Дизайн веб-сайта для студии съёмки на плёнку</h3>
                        <p>Около месяца я работала над созданием полного адаптивного дизайна для сайта студии</p>
                        <Link to="/project" className="btn-project" aria-label="Подробнее о проекте">
                            Перейти к проекту
                        </Link>
                    </div>
                </div>
            <div className="work-item" id="reverse">
                <div className="work-item-img">
                    <img src={partyImg} alt="Работа 4"/>
                </div>
                <div className="work-desc">
                    <h3>Афиши</h3>
                    <p>В качестве практики я разрабатывала афиши для различных мероприятий в Минске <br/> <br/> квизы, вечеринки, личные праздники <br/> <br/>
                    Чётко следовала тех. заданию, учитывала настроение ивента и согласовывала результат с закзчиками </p>
                </div>
            </div>
            <div className="work-item">
                <div className="work-item-img" id="cart">
                    <img src={certificateImg} alt="Работа 3"/>
                    
                </div>
                <div className="work-desc">
                    <h3>Сертификаты</h3>
                    <p>Так же как и с афишами я работала над созданием дизайна сертификатов на различные темы; в качестве основных инструментов использовала Adobe Illustrator/Photosop__ и Figma</p>
                    
                </div>
            </div>
             <div className="work-item" id="reverse">
                <div className="work-item-img">
                    <img src={pocyImg} alt="Работа 4"/>
                </div>
                <div className="work-desc">
                    <h3>Дизайн веб-сайта для компании <br/> логистических перевозок</h3>
                    <p>Разработка адаптивного дизайна для компании, где основная цель: создание удобного и соответсвующего времени интерфейса для составления оптимального пути </p>
                    <Link to="/project2" className="btn-project" aria-label="Подробнее о проекте 2">
                        Перейти к проекту
                    </Link>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Portfolio;