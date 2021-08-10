import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import { ReactComponent as CloseSvg } from '../../assets/img/close.svg';
import { logOut } from '../../actions/auth';
import { showModal } from '../../actions/home';
import { tournamentsToggleMenu, toggleBurgerMenu } from '../../actions/header';
import { getTournaments } from '../../actions/tournaments';
import './index.css';
import constants from '../../constants';

import RegModal from '../Registration';

const tournamentStyle = {
  position: 'absolute',
  transform: 'translate3d(285px, 64px, 0px)',
  top: '0px',
  left: '0px',
  willChange: 'transform',
};

const Navigation = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const header = useSelector((state) => state.header);
  const tournaments = useSelector((state) => state.tournaments);
  const [profileName, setProfileName] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const { allTournaments } = tournaments;
  const { isLogedIn, user } = auth;
  const { showTournamentMenu, showBurgerMenu } = header;
  const [isShowRegModal, setIsShowRegModal] = useState(false);

  useEffect(() => {
    dispatch(tournamentsToggleMenu(false));
    dispatch(getTournaments());
  }, []);

  useEffect(() => {
    if (user && (user.nick_name || user.email)) {
      const splittedEmail = user.email.split('@');
      const [firstPartEmail] = splittedEmail;
      return setProfileName(user.nick_name || firstPartEmail);
    }
    return setProfileName('');
  }, [auth]);

  const onLogOut = () => {
    dispatch(logOut());
    setShowConfirm(false);
  };

  const onOpenBurgerMenu = (event) => {
    event.preventDefault();
    dispatch(toggleBurgerMenu(!showBurgerMenu));
  };

  const onClickLog = (event) => {
    event.preventDefault();
    if (!isLogedIn) {
      return dispatch(showModal());
    }
    return setShowConfirm(true);
  };

  const onClickReg = (event) => {
    event.preventDefault();
    setIsShowRegModal(!isShowRegModal);
  };

  const onOpenTournament = (event) => {
    event.preventDefault();
    dispatch(tournamentsToggleMenu(!showTournamentMenu));
  };

  return (
    <>
      <div className={`burger-menu ${showBurgerMenu ? 'burger-menu_active' : ''}`}>
        <Link to="/" onClick={onOpenBurgerMenu} className="burger-menu_button">
          <span className="burger-menu_lines" />
        </Link>

        <ul className="menu">
          <li className={`menu__item ${showTournamentMenu && 'show'}`}>
            <Link className="menu__link dropdown-toggle" to="/" onClick={onOpenTournament}>Турниры</Link>
            <div
              className={`dropdown-menu ${showTournamentMenu && 'show'}`}
              style={showTournamentMenu ? tournamentStyle : null}
            >
              {allTournaments.map((tournament) => <Link key={tournament.id} to={`${constants.TOURNAMENTS}/${tournament.id}`} className="dropdown-item">{tournament.name}</Link>)}
            </div>
          </li>
          <li className="menu__item">
            <Link className="menu__item menu__link" to={`${constants.PLAYERS}`}>Игроки</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to={`${constants.CLUBS}`}>Клубы</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to={`${constants.DONATES}`}>Поддержать</Link>
          </li>
          <li className="nav-item menu__item menu__item--login">
            {user && (
            <Link to={`${constants.PROFILE}/${user.id}`} className="menu__link">
              {profileName}
            </Link>
            )}

            <Link to="/" className="button button--login" onClick={onClickLog}>
              {!isLogedIn ? ' Вход' : ' Выйти'}
            </Link>
          </li>
          <li className="nav-item menu__item menu__item--login">
            <Link to="/" className="button button--login" onClick={onClickReg}>
              Регистрация
            </Link>
          </li>
        </ul>

        <div className="burger-menu_overlay" />
      </div>
      <Modal
        isOpen={showConfirm}
        appElement={document.querySelector('#root')}
        onRequestClose={() => setShowConfirm(false)}
        closeTimeoutMS={500}
        style={{
          overlay: {
            backgroundColor: 'rgba(28, 34, 68, 0.5)',
            zIndex: 1050,
          },
          content: {
            maxWidth: '630px',
            maxHeight: '200px',
            background: '#3D3F51',
            border: '1px solid rgba(0,0,0,.2)',
            borderRadius: '.3rem',
            padding: 0,
            margin: 'auto',
          },
        }}
      >
        <div className="popup__header">
          <h5 className="modal-title popup__title">
            Уверены, что хотите выйти?
          </h5>
          <button type="button" className="close" onClick={() => setShowConfirm(false)}>
            <CloseSvg />
          </button>
        </div>
        <div className="popup__body">
          <div className="popup__btn-group popup__confirm">
            <button type="button" className="button popup__btn popup__btn--short" onClick={() => onLogOut()}> Да </button>
            <button type="button" className="button popup__btn popup__btn--short" onClick={() => setShowConfirm(false)}> Нет </button>
          </div>
        </div>

      </Modal>
      <RegModal isShowRegModal={isShowRegModal} setIsShowRegModal={setIsShowRegModal} />
    </>
  );
};

export default memo(Navigation);
