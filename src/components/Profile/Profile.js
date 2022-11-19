import React, { useEffect, useState }  from "react";
import { Link, Route } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header.js";
import Navigation from "../Navigation/Navigation.js";

function Profile() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // остается здесь!!!!
  const mobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  }


  return (
    <>
      <Header>
        <Navigation 
          onMobileMenu={mobileMenuClick}
          isOpen={isMobileMenuOpen}
          onClose={closeMenu}
        />
      </Header>
      <div className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, Италий!</h2>
          <form className="profile__form">
            <label className="profile__form-field">
              <h3 className="profile__input-title">Имя</h3>
              <input
                name="name"
                id="name-input"
                type="text"
                placeholder="Италий"
                // value={"Италий"}
                // onChange={handleChangeName}
                className="profile__input"
                required
                minLength="2"
                maxLength="40"
              />
              {/* <span className="name-input-error popup__name-error"></span> */}
            </label>

            <label className="profile__form-field">
              <h3 className="profile__input-title">E-mail</h3>
              <input
                name="email"
                id="email-input"
                type="text"
                placeholder="qazqaz@qaz.ru"
                // value={"qazqaz@qaz.ru"}
                // onChange={handleChangeDescription}
                className="profile__input"
                required
                minLength="2"
                maxLength="40"
              />
              {/* <span className="about-input-error popup__name-error"></span> */}
            </label>
          </form>

          <button className="profile__button-edit" type="submit">
            Редактировать
          </button>
          <Link to="/signin">
          <button className="profile__button-exit">Выйти из аккаунта</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
