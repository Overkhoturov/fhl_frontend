import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';

import { ReactComponent as CloseSvg } from '../../assets/img/close.svg';
import { hideModal } from '../../actions/home';
import { loginRequest } from '../../actions/auth';
import './index.css';
import CONSTANTS from '../../constants';

const LogInModal = () => {
  const home = useSelector((state) => state.home);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(hideModal());
  };

  const submitLoginForm = (event) => {
    event.preventDefault();
    dispatch(loginRequest({ email, password }));
  };

  return (
    <Modal
      isOpen={home.showModal}
      appElement={document.querySelector('#root')}
      onRequestClose={() => handleCloseModal()}
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
          ВХОД В АККАУНТ
        </h5>
        <button type="button" className="close" onClick={() => handleCloseModal()}>
          <CloseSvg />
        </button>
      </div>
      <form onSubmit={submitLoginForm}>
        <div className="popup__body">
          <div className="form-group mb-3">
            <input
              type="text"
              name="user_email"
              placeholder="Логин"
              className="form-control input popup__input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <span className="text-danger" />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              name="user_password"
              placeholder="Пароль"
              className="form-control input popup__input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <span className="text-danger" />
          </div>
        </div>
        <div className="popup__footer">
          <div className="popup__links">
            <div className="popup__label">
              <Link
                className="popup__link"
                to={CONSTANTS.FORGOT}
                onClick={() => handleCloseModal()}
              >
                Забыл пароль
              </Link>
            </div>
          </div>
          <div className="popup__btn-group">
            <button type="submit" className="button popup__btn">
              Войти
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default memo(LogInModal);
