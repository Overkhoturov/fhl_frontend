import React, { memo, useState, useEffect } from 'react';
/* import { Link } from 'react-router-dom'; */
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { ReactComponent as CloseSvg } from '../../assets/img/close.svg';
import { hideModal } from '../../actions/home';
import { changeStepRegistration, /* loginRequest, */ registrationRequest } from '../../actions/auth';
import './index.scss';
/* import CONSTANTS from '../../constants'; */

const RegModal = (props) => {
  /* const home = useSelector((state) => state.home); */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isCorrectPassword, setIsCorrectPassword] = useState(true);
  const [isCorrectEmail, setIsCorrectEmail] = useState(true);
  const auth = useSelector((state) => state.auth);
  const { currentStepRegistration } = auth;
  const { isShowRegModal, setIsShowRegModal } = props;

  const dispath = useDispatch();
  const handleCloseModal = () => {
    dispath(hideModal());
  };

  useEffect(() => {
    setIsCorrectPassword(password === repeatPassword);
    const emailRegExp = /^\S+@\S+\.\S+$/;
    if (email) {
      setIsCorrectEmail(emailRegExp.test(email));
    }
  }, [password, repeatPassword, email]);

  useEffect(() => {
    dispath(changeStepRegistration(0));
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
    dispath(registrationRequest({ password, email }));
    setIsShowRegModal(!isShowRegModal);
  };

  /* const resendEmail = (event) => {
    event.preventDefault();
    dispath(registrationRequest({ password, email }));
  }; */

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
          maxHeight: '375px',
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
        <button type="button" className="close" onClick={() => handleCloseModal()}>
          <CloseSvg />
        </button>
      </div>
      {currentStepRegistration === 0 && (
        <form onSubmit={submitForm}>
          <div className="popup__body">
            <div className="form-group mb-3">
              <input
                className={`form-control input popup__input ${isWrong(email) && isCorrectEmail ? '' : 'input__wrong'}`}
                type="text"
                placeholder="Введите почту*"
                value={email}
                onChange={(event) => setEmail(event.target.value.trim())}
              />
            </div>
            <div className="form-group mb-3">
              <input
                className={`form-control input popup__input ${isWrong(password) ? '' : 'input__wrong'}`}
                placeholder="Придумайте пароль*"
                value={password}
                type="password"
                onChange={(event) => setPassword(event.target.value.trim())}
              />
            </div>
            <div className="form-group mb-3">
              <input
                className={`form-control input popup__input ${isWrong(repeatPassword) && isCorrectPassword ? '' : 'input__wrong'}`}
                placeholder="Повторите пароль*"
                value={repeatPassword}
                type="password"
                onChange={(event) => setRepeatPassword(event.target.value.trim())}
              />
            </div>
          </div>
          <div className="popup__footer">
            <div className="popup__btn-group">
              <button className="button popup__btn" type="submit">Зарегистрироваться</button>
            </div>
          </div>
        </form>
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
