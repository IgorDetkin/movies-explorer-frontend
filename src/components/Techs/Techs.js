import React from "react";
import './Techs.css';

function Techs() {

    return(
        <section className="techs">
            <div className="techs__container">
                <h3 className="techs__title">Технологии</h3>
                <div className="techs__flex-container">
                    <h2 className="techs__main-title">7 технологий</h2>
                    <p className="techs__text">На курсе веб-разработки мы освоили 
                        технологии, которые применили в дипломном проекте.
                    </p>
                    <div className="techs__tech-list">
                        <div className="techs__tech">HTML</div>
                        <div className="techs__tech">CSS</div>
                        <div className="techs__tech">JS</div>
                        <div className="techs__tech">React</div>
                        <div className="techs__tech">Git</div>
                        <div className="techs__tech">Express.js</div>
                        <div className="techs__tech">MongoDB</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Techs;