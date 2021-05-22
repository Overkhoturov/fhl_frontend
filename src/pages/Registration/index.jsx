import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { registrationRequest } from '../../actions/auth';
import Header from '../../components/Header';

import './index.css';

export default memo(() => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const dispatch = useDispatch();

  const isWrong = (value) => {
    if (!value && submitClicked) {
      return false;
    }
    return true;
  };
  const submitForm = (event) => {
    event.preventDefault();
    setSubmitClicked(true);
    if (!userName || !userEmail || !userPassword) return;
    dispatch(registrationRequest({
      name: userName, email: userEmail, password: userPassword,
    }));
  };

  return (
    <>
      <Header />
      <form className="registration-form" onSubmit={submitForm}>
        <input
          className={`input registration-form__input form-control ${isWrong(userName) ? '' : 'input__wrong'}`}
          placeholder="Введите имя пользователя"
          value={userName}
          onChange={(event) => setUserName(event.target.value.trim())}
        />
        <input
          className={`input registration-form__input form-control ${isWrong(userEmail) ? '' : 'input__wrong'}`}
          placeholder="Введите email пользователя"
          type="email"
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value.trim())}
        />
        <input
          className={`input registration-form__input form-control ${isWrong(userPassword) ? '' : 'input__wrong'}`}
          placeholder="Введите пароль"
          value={userPassword}
          type="password"
          onChange={(event) => setUserPassword(event.target.value.trim())}
        />
        <button className="btn button" type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </form>
    </>
  );
});
