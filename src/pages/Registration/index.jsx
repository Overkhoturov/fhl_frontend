import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { registrationRequest, changeStepRegistration } from '../../actions/auth';
import Header from '../../components/Header';

import './index.css';

export default memo(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isCorrectPassword, setIsCorrectPassword] = useState(true);
  const [isCorrectEmail, setIsCorrectEmail] = useState(true);
  const auth = useSelector((state) => state.auth);
  const { currentStepRegistration } = auth;

  const dispatch = useDispatch();

  useEffect(() => {
    setIsCorrectPassword(password === repeatPassword);
    const emailRegExp = /^\S+@\S+\.\S+$/;
    if (email) {
      setIsCorrectEmail(emailRegExp.test(email));
    }
  }, [password, repeatPassword, email]);

  useEffect(() => {
    dispatch(changeStepRegistration(0));
  }, []);

  const isWrong = (value) => {
    if (!value && submitClicked) {
      return false;
    }
    return true;
  };
  const submitForm = (event) => {
    event.preventDefault();
    setSubmitClicked(true);
    if (!email || !password || !repeatPassword || !isCorrectPassword || !isCorrectEmail) return;
    dispatch(registrationRequest({ password, email }));
  };

  const resendEmail = (event) => {
    event.preventDefault();
    dispatch(registrationRequest({ password, email }));
  };

  return (
    <>
      <Header showLoginButton={false} />
      {currentStepRegistration === 0 && (
        <form className="registration-form" onSubmit={submitForm}>
          <input
            className={`input registration-form__input form-control ${isWrong(email) && isCorrectEmail ? '' : 'input__wrong'}`}
            placeholder="Введите почту*"
            value={email}
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
          <button className="button registration-form__button" type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </form>
      )}
      {currentStepRegistration === 1 && (
        <div className="registration-confirm">
          <div className="registration-confirm__icon">
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <path d="M153.67 153.67C136.792 170.547 113.9 180.028 90.0316 180.028C66.1629 180.028 43.2717 170.547 26.3936 153.67L153.67 26.3575C162.032 34.7154 168.665 44.6389 173.191 55.5613C177.717 66.4836 180.046 78.1906 180.046 90.0135C180.046 101.836 177.717 113.543 173.191 124.466C168.665 135.388 162.032 145.312 153.67 153.67Z" fill="#191B26" />
                <path d="M26.3584 153.67C9.47577 136.788 -0.00878931 113.89 -0.00878906 90.0142C-0.00878881 66.1385 9.47577 43.2408 26.3584 26.3582C43.241 9.47553 66.1388 -0.00903295 90.0144 -0.0090332C113.89 -0.00903345 136.788 9.47553 153.67 26.3582L26.3584 153.67Z" fill="#242632" />
                <path d="M137.529 58.3765H42.4697V123.879H137.529V58.3765Z" fill="#D3D6E5" />
                <path d="M42.4697 116.591L89.9994 84.2397L137.529 116.591V123.879H42.4697V116.591Z" fill="#B3B7CE" />
                <path d="M137.529 65.6645L89.9994 98.016L42.4697 65.6645V58.3765H137.529V65.6645Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="180" height="180" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </div>
          <div>
            <div className="registration-confirm__header">
              ПОДТВЕРЖДЕНИЕ РЕГИСТРАЦИИ
            </div>
            <div className="registration-confirm__message">
              На вашу почту было отправлено письмо.
              <br />
              <br />
              Перейдите по ссылке в письме, чтобы подтвердить регистрацию.
              <br />
              <br />
            </div>
            <Link to="/" className="registration-confirm__resend-link" onClick={resendEmail}>
              ОТПРАВИТЬ ПИСЬМО ПОВТОРНО
            </Link>
          </div>
        </div>
      )}
    </>
  );
});
