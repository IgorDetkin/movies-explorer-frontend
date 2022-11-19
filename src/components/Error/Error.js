import React from "react";
import "./Error.css";

function Error() {
    return(
        <div className="error">
            <div className="error__container">
                <h2 className="error__status">404</h2>
                <h3 className="error__name">Страница не найдена</h3>
                <a className="error__back" href="/">Назад</a>
            </div>
        </div>
    )
}

export default Error;