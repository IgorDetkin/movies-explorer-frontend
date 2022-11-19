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

                <div className="portfolio__flex-examples">
                    <div className="portfolio__example">
                        <p className="portfolio__example-title">Статичный сайт</p>
                        <a href="https://igordetkin.github.io/how-to-learn/" className="portfolio_example-link" alt="ссылка"
                        target="blank">
                        ↗
                        </a> 
                    </div>
                    <div className="portfolio__example">
                        <p className="portfolio__example-title">Адаптивный сайт</p>
                        <a href="https://igordetkin.github.io/russian-travel/" className="portfolio_example-link" alt="ссылка"
                        target="blank">
                        ↗
                        </a> 
                    </div>
                    <div className="portfolio__example">
                        <p className="portfolio__example-title">Одностраничное приложение</p>
                        <a href="https://mesto.learnproject.nomoredomains.icu/" className="portfolio_example-link" alt="ссылка" target="blank">
                        ↗   
                        </a> 
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Portfolio;