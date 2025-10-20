import React from 'react';

function MainInfo() {
    return(
        <section className="main-info" id='maininfo'>
            <div className="education">
                <h2>образование__</h2>
                <ul>
                    <li>Неоконченное высшее</li>
                    <li>2022  --&gt; БГТУ / ФИТ / ИСиТ</li>
                </ul>
            </div>
            <div className="skills">
                <h2>навыки__</h2>
                <ul>
                    <li>**MS Office --&gt; PowerPoint / Word / Excel</li>
                    <li>**Adobe --&gt; PhotoShop / LightRoom / Animate / Illustrator</li>
                    <li>**ЯП --&gt; Python / C# / Js (reactjs __ node. js)</li>
                    <li>**Визуал --&gt; Figma / Blender / HTML __ CSS </li>
                    <li>**Unity</li>
                </ul>
                
            </div>
            <div className="character">
                <h2>качества__</h2>
                <ul>
                    <li>**коммуникабельность </li>
                    <li>**быстрая обсучаемость</li>
                    <li>**ответственность</li>
                    <li>**креативность</li>
                    <li>**находчивость</li>
                    <li>**аналитичесное мышление</li>
                </ul>
                
            </div>
        </section>
    );
}

export default MainInfo;