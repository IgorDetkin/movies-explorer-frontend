import React from "react";
import './Footer.css';

function Footer() {
    

    return(
     <footer className="footer" id="footer-id">
        <div className="footer__container">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__flex-links">
                <p className="footer__year">© 2022</p>
                <div className="footer__links">
                    <a className="footer__link" href="https://yandex.eu/" target="blank">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/" target="blank">Github</a>
                </div>
            </div>
        </div>
     </footer>   
    )
}

export default Footer;