import React, { useEffect, useState }  from 'react'; 
import "./Register.css";
import RegLogin from "../RegLogin/RegLogin.js";
import useValidation from '../../utils/validation';

function Register(props) {

  const checkValid = useValidation();

  // const [name, setName] = useState("") 
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { name, email, password } = checkValid.errors;
  const errorValidClassName = (`reg-login__name-error ${checkValid.isValid ? '' : 'reg-login__name-error_active'}`);
  // function handleAddName(e) {
  //   setName(e.target.value);
  // }  
  
  // function handleAddEmail(e) {
  //   setEmail(e.target.value);
  // }

  // function handleAddPassword(e) {
  //   setPassword(e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = checkValid.values;
    props.onRegister({ name, email, password });
    checkValid.resetForm();
  }


  return (
    <RegLogin
    title="Добро пожаловать!"
    buttonSubmit="Зарегистрироваться"
    subText="Уже зарегистрированы?"
    subButtonText="Войти"
    onSubmit={handleSubmit}
    disabledButton={!checkValid.isValid}
    >
      <label className="reg-login__form-field">
        <p className="reg-login__input-title">Имя</p>
        <input
          name="name"
          id="name-input"
          type="text"
          placeholder="Ваше имя"
          value={checkValid.values.name || ''}
          pattern='[a-zA-Z0-9А-Яа-яЁё._:$!%@\s-]+'
          onChange={checkValid.handleChange}
          className="reg-login__input"
          required
          minLength="2"
          maxLength="40"
          autoComplete='off'
        />
        <span className={errorValidClassName}>{name}</span>
      </label>

      <label className="reg-login__form-field">
        <p className="reg-login__input-title">E-mail</p>
        <input
          name="email"
          id="email-input"
          type="email"
          placeholder="email"
          pattern='^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.+(\w{2,})$'
          value={checkValid.values.email || ''}
          onChange={checkValid.handleChange}
          className="reg-login__input"
          required
          minLength="2"
          maxLength="30"
          autoComplete='off'
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
          value={checkValid?.values?.password || ''}
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

export default Register;
