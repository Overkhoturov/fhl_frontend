import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { forgotPasswordRequest } from '../../actions/auth';
import Header from '../../components/Header';
import Footer from '../../components/Footer'

import './index.css';

export default memo(() => {
  const [email, setEmail] = useState('');
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
    if (!email) return;
    dispatch(forgotPasswordRequest({ email }));
  };

  return (
    <>
    <div className="main">
      <Header showLoginButton={false} />
      <form className="registration-form" onSubmit={submitForm}>
        <input
          className={`input registration-form__input form-control ${isWrong(email) ? '' : 'input__wrong'}`}
          placeholder="Введите почту*"
          value={email}
          type="email"
          onChange={(event) => setEmail(event.target.value.trim())}
        />
        <button className="button registration-form__button" type="submit">Отправить на почту</button>
      </form>
    </div>
      <Footer />
    </>
  );
});
