import React from "react";
// import { Link } from "react-router-dom";
import "./AboutMe.css";
import my_photo from "../../images/my_avatar.PNG";

function AboutMe() {


  return (
    <section className="aboutMe" id="aboutMe-id">
      <div className="aboutMe__container">
        <h3 className="aboutMe__title">Студент</h3>

        <div className="aboutMe__flex-profile">
          
          <div className="aboutMe__profile-link">
            <div className="aboutMe__flex-text-profile">
                <h2 className="aboutMe__main-title">Игорь</h2>
                <h3 className="aboutMe__sub-title">Фронтенд-разработчик, 28 лет</h3>
                <p className="aboutMe__about-text">
                Всех приветствую на этой странице! Как-то раз мой товарищ
                увлёкся программированием и увлёк меня. Постепенно данное
                увлечение стало приоритетным и спустя время появилась возможность
                уже серьезно пойти учиться в Яндекс Практикум. Я успешно отучился в
                Практикуме. Следующая моя цель - работа в дружной команде над разными
                проектами с сопутствующим ростом моей экспертизы в предметной области. 
                </p>  
            </div>
            <a href="https://github.com/IgorDetkin" className="aboutMe__link-github" target="blank">
              Github
            </a> 
          </div>
          
          <img className="aboutMe__flex-avatar" src={my_photo} alt="мое фото" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;


