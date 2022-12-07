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
                Я родился в прошлом веке, но живу в этом.
                2 года назад получил высшее образование, уже
                несколько лет работая по специальности (звукорежиссер).
                Работа была убийственная во всех смыслах.
                Ушел из этой сферы, потому что пропал интерес и появилось 
                более творческое увлечение, поэтому я и пошел учиться в 
                Яндекс-Практикум.  
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


