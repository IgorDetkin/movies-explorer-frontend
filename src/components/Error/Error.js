import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
    return(
        <div className="error">
            <div className="error__container">
                <h2 className="error__status">404</h2>
                <h3 className="error__name">Страница не найдена</h3>
                <Link to ="/" className="error__back">
                    Назад
                </Link>
            </div>
        </div>
    )
}

export default Error;