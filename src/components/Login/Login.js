import React from "react";
import "./Login.css";
import RegLogin from "../RegLogin/RegLogin.js";


function Login(props) {
  return (
    <RegLogin
    title="Рады видеть!"
    buttonSubmit="Войти"
    subText="Еще не зарегистрированы?"
    subButtonText="Регистрация"
    >

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

export default Login;