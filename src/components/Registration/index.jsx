import React, { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { ReactComponent as CloseSvg } from '../../assets/img/close.svg';
import { changeStepRegistration, registrationRequest } from '../../actions/auth';
import './index.scss';

const RegModal = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isCorrectPassword, setIsCorrectPassword] = useState(true);
  const [isCorrectEmail, setIsCorrectEmail] = useState(true);
  const auth = useSelector((state) => state.auth);
  const { currentStepRegistration } = auth;
  const { isShowRegModal, setIsShowRegModal } = props;

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
    if (!email || !password || !repeatPassword || !isCorrectEmail || !isCorrectPassword) return;
    dispatch(registrationRequest({ password, email }));
    setIsShowRegModal(!isShowRegModal);
  };

  const resendEmail = (event) => {
    event.preventDefault();
    dispatch(registrationRequest({ password, email }));
  };

  return (
    <Modal
      isOpen={isShowRegModal}
      appElement={document.querySelector('#root')}
      onRequestClose={() => setIsShowRegModal(false)}
      closeTimeoutMS={500}
      style={{
        overlay: {
          backgroundColor: 'rgba(28, 34, 68, 0.5)',
          zIndex: 1050,
        },
        content: {
          maxWidth: '630px',
          background: '#3D3F51',
          border: 'none',
          borderRadius: 0,
          padding: 0,
          margin: 'auto',
        },
      }}
    >
      <div className="popup__header">
        <h5 className="modal-title popup__title">
          РЕГИСТРАЦИЯ
        </h5>
        <button type="button" className="close" onClick={() => setIsShowRegModal(false)}>
          <CloseSvg />
        </button>
      </div>
      {currentStepRegistration === 0 && (
        <form onSubmit={submitForm} autoComplete="nope">
          <div className="popup__body">
            <div className="form-group mb-3">
              <input
                className={`form-control input popup__input ${isWrong(email) && isCorrectEmail ? '' : 'input__wrong'}`}
                type="text"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value.trim())}
              />
            </div>
            <div className="form-group mb-3">
              <input
                className={`form-control input popup__input ${isWrong(password) ? '' : 'input__wrong'}`}
                placeholder="Пароль"
                value={password}
                type="password"
                onChange={(event) => setPassword(event.target.value.trim())}
              />
            </div>
            <div className="form-group mb-3">
              <input
                className={`form-control input popup__input ${isWrong(repeatPassword) && isCorrectPassword ? '' : 'input__wrong'}`}
                placeholder="Повторите пароль"
                value={repeatPassword}
                type="password"
                onChange={(event) => setRepeatPassword(event.target.value.trim())}
              />
            </div>
          </div>
          <div className="popup__footer">
            <div className="popup__btn-group popup__btn-group--registration">
              <button className="button popup__btn popup__btn--registration" type="submit">Зарегистрироваться</button>
            </div>
          </div>
        </form>
      )}
      {currentStepRegistration === 1 && (
        <>
          <div className="popup__body popup__body--confirm">
            <div className="popup__icon--confirm">
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
            <div className="popup__container popup__container--confirm">
              <div className="popup__header--confirm">
                ПОДТВЕРЖДЕНИЕ РЕГИСТРАЦИИ
              </div>
              <div className="popup__message--confirm">
                На вашу почту было отправлено письмо.
                Перейдите по ссылке в письме, чтобы подтвердить регистрацию.
              </div>
            </div>
          </div>
          <div className="popup__footer popup__footer--confirm">
            <Link to="/" className="button popup__btn popup__btn--confirm" onClick={resendEmail}>
              отправить повторно
            </Link>
          </div>
        </>
      )}
    </Modal>
  );
};

RegModal.propTypes = {
  isShowRegModal: PropTypes.bool,
  setIsShowRegModal: PropTypes.func,
};

RegModal.defaultProps = {
  isShowRegModal: false,
  setIsShowRegModal: null,
};

export default memo(RegModal);
