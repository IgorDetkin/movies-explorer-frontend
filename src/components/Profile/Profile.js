import React, { useEffect, useState }  from "react";
import { Link, Route } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header.js";
import Navigation from "../Navigation/Navigation.js";
import CurrentUserContext from "../contexts/CurrentUserContext";
import useValidation from '../../utils/validation';


/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);

  // const {values, isValid, errors, setValues, setIsValid, handleChange} = useValidation();

  const checkValid = useValidation();
  const { name, email } = checkValid.errors;

  const errorValidClassName = (`profile__name-error ${checkValid.isValid ? '' : 'profile__name-error_active'}`);


  useEffect(() => {
    checkValid.setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateUser({
      name: checkValid.values.name, 
      email: checkValid.values.email
    });
  }

  const submitProfileClassName = (`profile__button-edit ${!checkValid.isValid ? 'profile__button-edit_deactive' : ''}`);

  return (
    <>
      <Header 
      loggedIn={props.loggedIn}
      >
        <Navigation/>
      </Header>
      <div className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, {currentUser.name} !</h2>
          <form 
            className="profile__form"
            name="edit"
            onSubmit={handleSubmit}
          >
            <div className="profile__form-wrapper">
              <label className="profile__form-field">
                <h3 className="profile__input-title">Имя</h3>
                <input
                  name="name"
                  id="name-input"
                  type="text"
                  placeholder="Имя"
                  // value={name}
                  // onChange={handleChangeName}
                  value={checkValid.values.name}
                  onChange={checkValid.handleChange}
                  className="profile__input"
                  required
                  minLength="2"
                  maxLength="40"
                />
              </label>
              <span className={errorValidClassName}>{name}</span>
            </div>

            <div className="profile__form-wrapper">
            <label className="profile__form-field">
              <h3 className="profile__input-title">E-mail</h3>
              <input
                name="email"
                id="email-input"
                type="email"
                placeholder="адрес"
                // value={email}
                // onChange={handleChangeEmail}
                value={checkValid.values.email}
                onChange={checkValid.handleChange}
                className="profile__input"
                required
                minLength="2"
                maxLength="40"
              />
            </label>
            <span className={errorValidClassName}>{email}</span>
            </div>

          <button 
            className={submitProfileClassName}
            type="submit"
            disabled={!checkValid.isValid} 
          >
            Редактировать
          </button>
          </form>
          <Link to="/">
          <button className="profile__button-exit" onClick={props.onClick}>Выйти из аккаунта</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
