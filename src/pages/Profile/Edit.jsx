import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { changeMainUserInfoRequest } from '../../actions/auth';
import Header from '../../components/Header';
import constants from '../../constants';

import './index.css';

export default memo(() => {
  const [lastname, setLastname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [nick, setNick] = useState('');
  const [vkLink, setVkLink] = useState('');
  const [instaLink, setInstaLink] = useState('');
  const [mainRole, setMainRole] = useState('');
  const [additionRoles, setAdditionRoles] = useState([]);
  // const [submitClicked, setSubmitClicked] = useState(false);
  const isLogedIn = useSelector((state) => state.auth.isLogedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  const { ROLES } = constants;

  useEffect(() => {
    if (!isLogedIn) {
      history.push('/');
    }
  }, []);
  // const isWrong = (value) => {
  //   if (!value && submitClicked) {
  //     return false;
  //   }
  //   return true;
  // };
  const submitForm = (event) => {
    event.preventDefault();
    // setSubmitClicked(true);
    dispatch(changeMainUserInfoRequest({
      first_name: firstName,
      last_name: lastname,
      phone,
      city,
      nick_name: nick,
      main_role: mainRole,
      additional_roles: additionRoles,
      vk_link: vkLink,
      insta_link: instaLink,
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
          className="input registration-form__input form-control"
          placeholder="Фамилиия"
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
        />
        <input
          className="input registration-form__input form-control"
          placeholder="Имя"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
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
        <input
          className="input registration-form__input form-control"
          placeholder="Ссылка на профиль ВК"
          value={vkLink}
          onChange={(event) => setVkLink(event.target.value)}
        />
        <input
          className="input registration-form__input form-control"
          placeholder="Ссылка на профиль в Instagram"
          value={instaLink}
          onChange={(event) => setInstaLink(event.target.value)}
        />
        <div className="registration-form__input">
          <div className="registration-form__role-header">Основная позиция</div>
          <div className="registration-form__role-inputs">
            {Object.keys(ROLES).map((roleKey) => (
              <div className="registration-form__role-input-container" key={roleKey}>
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
              <div className="registration-form__role-input-container" key={roleKey}>
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
        <button className="btn button" type="submit">изменить данные</button>
      </form>
    </>
  );
});
