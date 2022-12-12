import React, { useEffect, useState }  from "react";
import { NavLink, Route } from "react-router-dom";
import './Navigation.css';
import user_avatar from "../../images/user_avatar.svg";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Navigation(props) {
    const currentUser = React.useContext(CurrentUserContext);

    // const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        closeMenu();
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscClose);
      return () => {
        document.removeEventListener("keydown", handleEscClose);
      };
    }
  }, [isMobileMenuOpen]);


    const navigationClassName = (
        `navigation ${isMobileMenuOpen ? 'navigation__mobile_active' : 'navigation__mobile'}`
      ); 

    return(
        <div className={navigationClassName}>
            <div className="navigation__container">
                <div className="navigation__adaptive">

                        {/* <h3 className="navigation__title">Главная</h3> */}

                        <NavLink exact to="/" className="navigation__button-movies" id="mainMobile" activeClassName="navigation__button-movies_active">
                            Главная
                        </NavLink>

                        <NavLink to="/movies" className="navigation__button-movies" activeClassName="navigation__button-movies_active">
                            Фильмы
                        </NavLink>

                        <NavLink to="/saved-movies" className="navigation__button-movies" activeClassName="navigation__button-movies_active">
                            Сохраненные фильмы
                        </NavLink>


                        <button className="navigation__button-profile" type="button">
                            <div className="navigation__username-margin">
                                <NavLink to ="/profile" className="navigation__button-movies" activeClassName="navigation__button-movies_active">
                                    {currentUser.name}       
                                </NavLink>
                            </div>
                            <img className="navigation__user-avatar" src={user_avatar} alt="аватар"/>
                        </button>

                        <button 
                        className="navigation__exit-button"
                        onClick={closeMenu}
                        type="button"
                        ></button>
                </div>        

                <button 
                type="button"
                className="navigation__navtab"
                onClick={mobileMenuClick}
                ></button>

                <div className="navigation__opacity" onClick={closeMenu}></div>
    
            </div>
        </div>
    )
}

export default Navigation;
