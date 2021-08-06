import React, { memo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { resetPasswordRequest } from '../../actions/auth';
import Header from '../../components/Header';
import Footer from '../../components/Footer'

import './index.css';
import CONSTANTS from '../../constants';

const ResetPassword = (props) => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isCorrectPassword, setIsCorrectPassword] = useState(true);
  const history = useHistory();

  const { match } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const { token } = match.params;
    if (!token) history.push(CONSTANTS.HOME);
  }, []);

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
    if (!password || !repeatPassword) return;
    if (!isCorrectPassword) return;

    const payload = {
      newPassword: password,
      token: match.params.token,
    };
    dispatch(resetPasswordRequest(payload));
  };

  return (
    <>
    <div className="main">
      <Header showLoginButton={false} />
      <form className="registration-form" onSubmit={submitForm}>
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
        <button className="btn button" type="submit">Изменить</button>
      </form>
    </div>
      <Footer />
    </>
  );
};

ResetPassword.propTypes = {
  match: {
    params: {
      token: PropTypes.string.isRequired,
    },
  },
};

ResetPassword.defaultProps = {
  match: {},
};

export default memo(ResetPassword);
