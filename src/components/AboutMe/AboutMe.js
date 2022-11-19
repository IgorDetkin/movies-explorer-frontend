import React from "react";
// import { Link } from "react-router-dom";
import "./AboutMe.css";
import my_photo from "../../images/my_avatar.PNG";

function AboutMe() {


  return (
    <section className="aboutMe">
      <div className="aboutMe__container">
        <h3 className="aboutMe__title">Студент</h3>

        <div className="aboutMe__flex-profile">
          
          <div className="aboutMe__profile-link">
            <div className="aboutMe__flex-text-profile">
                <h2 className="aboutMe__main-title">Игорь</h2>
                <h3 className="aboutMe__sub-title">Фронтенд-разработчик, 28 лет</h3>
                <p className="aboutMe__about-text">
                Я родился в 70-ом на краю города. Люблю гулять и дышать свежим
                воздухом. Также я люблю кушать и смотреть в окно. Раньше я работал
                концертным звукорежиссером и чуть не упал в обморок от усталости.
                </p>  
            </div>
            <a href="https://github.com/IgorDetkin" className="aboutMe__link-github" target="blank">
              github
            </a> 
          </div>
          
          <img className="aboutMe__flex-avatar" src={my_photo} alt="мое фото" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;


