import React, { memo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { registrationRequest } from '../../actions/auth';
import Header from '../../components/Header';
import constants from '../../constants';

import './index.css';

export default memo(() => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [nick, setNick] = useState('');
  const [mainRole, setMainRole] = useState('');
  const [additionRoles, setAdditionRoles] = useState([]);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isCorrectPassword, setIsCorrectPassword] = useState(true);

  const dispatch = useDispatch();
  const { ROLES } = constants;

  useEffect(() => {
    setIsCorrectPassword(password === repeatPassword);
  }, [password, repeatPassword]);

  const isWrong = (value) => {
    if (!value && submitClicked) {
      return false;
    }
    return true;
  };
  const submitForm = (event) => {
    event.preventDefault();
    setSubmitClicked(true);
    if (!login || !email || !password || !repeatPassword) return;
    if (!isCorrectPassword) return;
    dispatch(registrationRequest({
      login, password, name, phone, city, nick, mainRole, additionRoles, email,
    }));
  };

  const onChangeAdditionalRoles = (event) => {
    const currentRoles = [...additionRoles];
    const currentValue = event.target.value;
    if (currentRoles.includes(currentValue)) {
      currentRoles.splice(currentRoles.indexOf(currentValue), 1);
    } else {
      currentRoles.push(currentValue);
    }

    setAdditionRoles(currentRoles);
  };

  return (
    <>
      <Header showLoginButton={false} />
      <form className="registration-form" onSubmit={submitForm}>
        <input
          className={`input registration-form__input form-control ${isWrong(login) ? '' : 'input__wrong'}`}
          placeholder="Придумайте логин*"
          value={login}
          onChange={(event) => setLogin(event.target.value.trim())}
        />
        <input
          className={`input registration-form__input form-control ${isWrong(password) ? '' : 'input__wrong'}`}
          placeholder="Придумайте пароль*"
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value.trim())}
        />
        <input
          className={`input registration-form__input form-control ${isWrong(repeatPassword) && isCorrectPassword ? '' : 'input__wrong'}`}
          placeholder="Повторите пароль*"
          value={repeatPassword}
          type="password"
          onChange={(event) => setRepeatPassword(event.target.value.trim())}
        />
        <input
          className={`input registration-form__input form-control ${isWrong(email) ? '' : 'input__wrong'}`}
          placeholder="Введите почту*"
          value={email}
          type="email"
          onChange={(event) => setEmail(event.target.value.trim())}
        />
        <input
          className="input registration-form__input form-control"
          placeholder="ФИО"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="input registration-form__input form-control"
          placeholder="Телефон"
          value={phone}
          maxLength={12}
          onChange={(event) => setPhone(event.target.value.trim())}
        />
        <input
          className="input registration-form__input form-control"
          placeholder="Город"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <input
          className="input registration-form__input form-control"
          placeholder="Ник (ру)"
          value={nick}
          onChange={(event) => setNick(event.target.value)}
        />
        <div className="registration-form__input">
          <div className="registration-form__role-header">Основная позиция</div>
          <div className="registration-form__role-inputs">
            {Object.keys(ROLES).map((roleKey) => (
              <div key={roleKey}>
                <input
                  className="registration-form__role-input--main"
                  type="radio"
                  name="main-role"
                  id={`main-${roleKey}`}
                  onChange={() => setMainRole(roleKey)}
                />
                <span />
                <label className="registration-form__role-label" htmlFor={`main-${roleKey}`}>{ROLES[roleKey]}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="registration-form__input">
          <div className="registration-form__role-header">Дополнительные позиции</div>
          <div className="registration-form__role-inputs">
            {Object.keys(ROLES).map((roleKey) => (
              <div key={roleKey}>
                <input
                  className="registration-form__role-input--secondary"
                  type="checkbox"
                  name="additional-role"
                  id={`additional-${roleKey}`}
                  value={roleKey}
                  onChange={onChangeAdditionalRoles}
                />
                <span />
                <label className="registration-form__role-label" htmlFor={`additional-${roleKey}`}>{ROLES[roleKey]}</label>
              </div>
            ))}
          </div>
        </div>

        <button className="btn button" type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </form>
    </>
  );
});
