import React from "react";
import './Promo.css';
import shape from "../../images/text__COLOR_landing-logo.svg";
import { Link, Route } from "react-router-dom";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";

function Promo() {
    
    return(
        <>
        
        <section className="promo" id="promo-id">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <img className="promo__shape" src={shape} alt="кружочки фигура"/>
                
            </div>
            <div className="promo__next-wrapper">
                    <h3 className="promo__next" href="#about-id">&#9660; листайте далее, чтобы узнать про проект и создателя &#9660;</h3>
            </div>
        </section>

        </>
    )
}

export default Promo;
