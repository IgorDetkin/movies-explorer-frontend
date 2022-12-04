import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./RegLogin.css";
import logo from "../../images/logo.svg";

//ВЁРСТКУ ПЕРЕДЕЛАТЬ!!!!!!

function RegLogin(props) {

    const submitButtonClassName = (`reg-login__form-submit ${props.disabledButton ? 'reg-login__form-submit_deactive' : ''}`);


    return(
        <div className="reg-login">
            <div className="reg-login__container">
                <div className="reg-login__flex">
                    <Link to="/">
                        <img className="reg-login__logo" src={logo} alt="логотип"/>
                    </Link>
                    <h2 className="reg-login__title">{props.title}</h2>
                    <form 
                        className="reg-login__form"
                        name="registration"
                        onSubmit={props.onSubmit}
                    >   
                        <div className="reg-login__input-wrapper">
                            {props.children}
                        </div>
                        <div className="reg-login__button-block">
                            <button 
                                className={submitButtonClassName} 
                                type="submit"
                                disabled={props.disabledButton}
                            >
                                {props.buttonSubmit}
                            </button>

                            <h3 className="reg-login__subtext">{props.subText}
                                    <Route path="/signup">
                                        <Link to="/signin" className="reg-login__subbutton">
                                            {props.subButtonText}
                                        </Link>    
                                    </Route>

                                    <Route path="/signin">
                                        <Link to="/signup" className="reg-login__subbutton">
                                            {props.subButtonText}
                                        </Link>    
                                    </Route>    
                            </h3>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegLogin;