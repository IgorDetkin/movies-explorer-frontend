import React from "react";
import { NavLink, Route } from "react-router-dom";
import './Navigation.css';
import user_avatar from "../../images/user_avatar.svg";

function Navigation(props) {

    const navigationClassName = (
        `navigation ${props.isOpen ? 'navigation__mobile_active' : 'navigation__mobile'}`
      ); 

    return(
        <div className={navigationClassName}>
            <div className="navigation__container">
                <div className="navigation__adaptive">

                        <h3 className="navigation__title">Главная</h3>

                        <NavLink to="/movies" className="navigation__button-movies" activeClassName="navigation__button-movies_active">
                            Фильмы
                        </NavLink>

                        <NavLink to="/saved-movies" className="navigation__button-movies" activeClassName="navigation__button-movies_active">
                            Сохраненные фильмы
                        </NavLink>


                        <button className="navigation__button-profile" type="button">
                            <div className="navigation__username-margin">
                                <NavLink to ="/profile" className="navigation__button-movies" activeClassName="navigation__button-movies_active">
                                    Username       
                                </NavLink>
                            </div>
                            <img className="navigation__user-avatar" src={user_avatar} alt="аватар"/>
                        </button>

                        <button 
                        className="navigation__exit-button"
                        onClick={props.onClose}
                        type="button"
                        ></button>
                </div>        

                <button 
                type="button"
                className="navigation__navtab"
                onClick={props.onMobileMenu}
                ></button>

                <div className="navigation__opacity"></div>

                
                    
            </div>
        </div>
    )
}

export default Navigation;

{/* <NavLink to ="/profile" activeClassName="navigation__button-movies_active">
                <button className="navigation__button-profile" type="button">
                    <div className="navigation__username-margin">
                        <p className="navigation__button-movies">Username</p>
                    </div>
                    <img className="navigation__user-avatar" src={user_avatar} alt="аватар"/>
                </button>
            </NavLink> */}