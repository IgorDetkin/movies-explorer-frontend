import React from "react";
// import { Link } from "react-router-dom";
import "./Portfolio.css";
import avatar from "../../images/logo.svg";
import pointer from "../../images/pointer.svg";


function Portfolio() {
    
    return(
        <section className="portfolio">
            <div className="portfolio__container">
                <h3 className="portfolio__title">Портфолио</h3>

                <ul className="portfolio__flex-examples">
                    <li className="portfolio__example">
                        <a className="portfolio__example-title" href="https://igordetkin.github.io/how-to-learn/" alt="ссылка"
                        target="blank">
                        Статичный сайт
                        </a>
                        <a href="https://igordetkin.github.io/how-to-learn/" className="portfolio__example-link" alt="ссылка"
                        target="blank">
                        ↗
                        </a> 
                    </li>
                    <li className="portfolio__example">
                        <a className="portfolio__example-title" href="https://igordetkin.github.io/russian-travel/" alt="ссылка"
                        target="blank">
                            Адаптивный сайт
                        </a>
                        <a href="https://igordetkin.github.io/russian-travel/" className="portfolio__example-link" alt="ссылка"
                        target="blank">
                        ↗
                        </a> 
                    </li>
                    <li className="portfolio__example">
                        <a className="portfolio__example-title" href="https://mesto.learnproject.nomoredomains.icu/" alt="ссылка" 
                        target="blank">
                            Одностраничное приложение
                        </a>
                        <a href="https://mesto.learnproject.nomoredomains.icu/" className="portfolio__example-link" alt="ссылка" target="blank">
                        ↗   
                        </a> 
                    </li>
                </ul>


            </div>
        </section>
    )
}

export default Portfolio;