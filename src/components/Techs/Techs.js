import React from "react";
import './Techs.css';

function Techs() {

    return(
        <section className="techs" id="techs-id">
            <div className="techs__container">
                <h3 className="techs__title">Технологии</h3>
                <div className="techs__flex-container">
                    <h2 className="techs__main-title">7 технологий</h2>
                    <p className="techs__text">На курсе веб-разработки мы освоили 
                        технологии, которые применили в дипломном проекте.
                    </p>
                    <ul className="techs__tech-list">
                        <li className="techs__tech">HTML</li>
                        <li className="techs__tech">CSS</li>
                        <li className="techs__tech">JS</li>
                        <li className="techs__tech">React</li>
                        <li className="techs__tech">Git</li>
                        <li className="techs__tech">Express.js</li>
                        <li className="techs__tech">MongoDB</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Techs;