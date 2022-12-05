import React, { useEffect, useState }  from 'react'; 
import "./Login.css";
import RegLogin from "../RegLogin/RegLogin.js";
import useValidation from '../../utils/validation';


function Login(props) {

  const checkValid = useValidation();

  const { email, password } = checkValid.errors;
  const errorValidClassName = (`reg-login__name-error ${checkValid.isValid ? '' : 'reg-login__name-error_active'}`);

  // function handleAddEmail(e) {
    // setEmail(e.target.value);
  // }

  // function handleAddPassword(e) {
    // setPassword(e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = checkValid.values;
    props.onLogin({ email, password });
    checkValid.resetForm();
  }



  return (
    <RegLogin
    title="Рады видеть!"
    buttonSubmit="Войти"
    subText="Еще не зарегистрированы?"
    subButtonText="Регистрация"
    onSubmit={handleSubmit}
    disabledButton={!checkValid.isValid}
    >

      <label className="reg-login__form-field">
        <p className="reg-login__input-title">E-mail</p>
        <input
          name="email"
          id="email-input"
          type="email"
          placeholder="email"
          pattern='^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.+(\w{2,4})$'
          value={checkValid.values.email || ''}
          onChange={checkValid.handleChange}
          className="reg-login__input"
          required
          minLength="2"
          maxLength="30"
        />
        <span className={errorValidClassName}>{email}</span>
      </label>

      <label className="reg-login__form-field">
        <p className="reg-login__input-title">Пароль</p>
        <input
          name="password"
          id="password-input"
          type="password"
          placeholder="пароль"
          pattern='[a-zA-Z0-9._\W\s-]+'
          value={checkValid.values.password || ''}
          onChange={checkValid.handleChange}
          className="reg-login__input"
          required
          minLength="3"
          maxLength="30"
          autoComplete='off'
        />
        <span className={errorValidClassName}>{password}</span>
      </label>
    </RegLogin>
  );
}

export default Login;