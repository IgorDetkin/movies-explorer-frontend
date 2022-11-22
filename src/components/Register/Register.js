import React from "react";
import "./Register.css";
import RegLogin from "../RegLogin/RegLogin.js";

function Register(props) {
  return (
    <RegLogin
    title="Добро пожаловать!"
    buttonSubmit="Зарегистрироваться"
    subText="Уже зарегистрированы?"
    subButtonText="Войти"
    >
      <label className="reg-login__form-field">
        <p className="reg-login__input-title">Имя</p>
        <input
          name="name"
          id="name-input"
          type="text"
          placeholder="Ваше имя"
          // value={name || ""} // если просто указать name, то консоль ругается
          // onChange={handleChangeName}
          className="reg-login__input"
          required
          minLength="2"
          maxLength="40"
        />
        {/* <span className="about-input-error reg-login__name-error">ошибка</span> */}
      </label>

      <label className="reg-login__form-field">
        <p className="reg-login__input-title">E-mail</p>
        <input
          name="email"
          id="email-input"
          type="text"
          placeholder="email"
          // value={description || ""} // если просто указать name, то консоль ругается
          // onChange={handleChangeDescription}
          className="reg-login__input"
          required
          minLength="2"
          maxLength="30"
        />
        {/* <span className="about-input-error reg-login__name-error">ошибка</span> */}
      </label>

      <label className="reg-login__form-field">
        <p className="reg-login__input-title">Пароль</p>
        <input
          name="password"
          id="password-input"
          type="password"
          placeholder="пароль"
          // value={description || ""} // если просто указать name, то консоль ругается
          // onChange={handleChangeDescription}
          className="reg-login__input"
          required
          minLength="3"
          maxLength="30"
        />
        {/* <span className="about-input-error reg-login__name-error">ошибка</span> */}
      </label>
    </RegLogin>
  );
}

export default Register;
