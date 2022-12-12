import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about" id="about-id">
      <div className="about__container">
        <h3 className="about__title">О проекте</h3>
        <div className="about__terms">
          <div className="about__term">
            <h3 className="about__caption">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>

          <div className="about__term">
            <h3 className="about__caption">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>

        <div className="about__meters">
            <div className="about__meter">
                <p className="about__text-leftTime">1 неделя</p>
                <p className="about__text-technology">Back-end</p>
            </div>

            <div className="about__meter">
                <p className="about__text-rightTime">4 недели</p>
                <p className="about__text-technology">Front-end</p>
            </div>
        </div>

      </div>
    </section>
    
  );
}

export default AboutProject;
