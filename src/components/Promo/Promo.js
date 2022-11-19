import React from "react";
import './Promo.css';
import shape from "../../images/text__COLOR_landing-logo.svg";

function Promo() {
    
    return(
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <img className="promo__shape" src={shape} alt="кружочки фигура"/>
            </div>
        </section>
    )
}

export default Promo;
