import React, { memo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { registrationRequest } from '../../actions/auth';
import Header from '../../components/Header';

import './index.css';

export default memo(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isCorrectPassword, setIsCorrectPassword] = useState(true);
  const [step, setStep] = useState(0);

  const dispatch = useDispatch();

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
    if (!email || !password || !repeatPassword) return;
    if (!isCorrectPassword) return;
    dispatch(registrationRequest({ password, email }));
  };

  const resendEmail = (event) => {
    event.preventDefault();
    console.log('resend email');
  };

  return (
    <>
      <Header showLoginButton={false} />

      {step === 0
        && (
        <div className="registration-choose">
          <button className="btn button" type="button" onClick={() => setStep(2)}>Email</button>
          <button className="btn button" type="button">Google</button>
        </div>
        )}
      {step === 1 && (
        <form className="registration-form" onSubmit={submitForm}>
          <input
            className={`input registration-form__input form-control ${isWrong(email) ? '' : 'input__wrong'}`}
            placeholder="Введите почту*"
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value.trim())}
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
          <button className="btn button" type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </form>
      )}
      {step === 2 && (
        <div>
          <div className="registration-confirm__icon">SVG</div>
          <div>
            <div className="registration-confirm__header">
              ПОДТВЕРЖДЕНИЕ РЕГИСТРАЦИИ
            </div>
            <div className="registration-confirm__message">
              На вашу почту было отправлено письмо.
              Перейдите по ссылке в письме, чтобы подтвердить регистрацию.
            </div>
            <Link to="/" className="registration-confirm__resend-link" onClick={() => resendEmail}>
              ОТПРАВИТЬ ПИСЬМО ПОВТОРНО
            </Link>
          </div>
        </div>
      )}
    </>
  );
});
