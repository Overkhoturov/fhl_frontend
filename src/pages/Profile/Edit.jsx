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
  const [rank, setRank] = useState('');
  const [division, setDivision] = useState('');
  // const [submitClicked, setSubmitClicked] = useState(false);
  const isLogedIn = useSelector((state) => state.auth.isLogedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const { ROLES, RANKS, DIVISIONS } = constants;
  useEffect(() => {
    if (!isLogedIn) {
      history.push('/');
    }
  }, []);
  useEffect(() => {
    if (user) {
      setFirstName(user.first_name || '');
      setLastname(user.last_name || '');
      setPhone(user.phone || '');
      setCity(user.city || '');
      setNick(user.nick_name || '');
      setVkLink(user.vk_link || '');
      setInstaLink(user.insta_link || '');
      setMainRole(user.main_role || '');
      setAdditionRoles(user.additional_roles.split(' ') || '');
      if (user.rank) {
        const [currentRank, curentDivision] = user.rank.split(' ');
        setRank(currentRank || '');
        setDivision(curentDivision || '');
      }
      setAdditionRoles(user.additional_roles.split(' ') || '');
    }
  }, [user]);
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
      rank: `${rank} ${division}`,
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
        <select
          className="input registration-form__input form-control"
          onChange={(event) => setRank(event.target.value)}
          value={rank}
        >
          <option key="blank" value="">Ранг</option>
          {Object.keys(RANKS).map((rankKey) => (
            <option
              checked={rank === rankKey}
              key={rankKey}
              value={rankKey}
            >
              {RANKS[rankKey][1]}
            </option>
          ))}
        </select>
        {
          (rank === RANKS.CHALLENGER[0]
          || rank === RANKS.GRANDMASTER[0]
          || rank === RANKS.MASTER[0])
            ? (
              <input
                className="input registration-form__input form-control"
                placeholder="Введите количество LP"
                value={division}
                type="number"
                min={0}
                onChange={(event) => setDivision(event.target.value)}
              />
            )
            : (
              <select
                className="input registration-form__input form-control"
                onChange={(event) => setDivision(event.target.value)}
                value={division}
              >
                <option key="blank" value="">Дивизион</option>
                {Object.keys(DIVISIONS).map((divisionKey) => (
                  <option
                    checked={division === divisionKey}
                    key={`division-${divisionKey}`}
                    value={DIVISIONS[divisionKey][0]}
                  >
                    {DIVISIONS[divisionKey][1]}
                  </option>
                ))}
              </select>
            )
        }

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
                  checked={mainRole === roleKey}
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
                  checked={additionRoles.includes(roleKey)}
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
