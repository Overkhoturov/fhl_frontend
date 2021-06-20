import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from '../../actions/auth';
import { showModal } from '../../actions/home';
import { tournamentsToggleMenu, toggleBurgerMenu } from '../../actions/header';
import './index.css';

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
  const { isLogedIn } = auth;
  const { showTournamentMenu, showBurgerMenu } = header;

  const onLogOut = () => {
    localStorage.removeItem('token');
    dispatch(logOut());
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
    return onLogOut();
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
              <Link to="game.html" className="dropdown-item">Кибер Арена Versus, Таганрог</Link>
              <Link to="to" className="dropdown-item">Кибер-Арена, Ростов-на-Дону</Link>
              <Link to="to" className="dropdown-item">Legion Cyber Arena, Таганрог</Link>
              <Link to="to" className="dropdown-item">Pride & FF15, Online</Link>
              <Link to="to" className="dropdown-item">Solo Cup, Online 2</Link>
              <Link to="to" className="dropdown-item">Solo Cup, Online</Link>
              <Link to="to" className="dropdown-item">Team Cup, Online</Link>
              <Link to="to" className="dropdown-item">Кибер-Арена, Ростов-на-Дону</Link>
              <Link to="to" className="dropdown-item">Лаборатория Inostudio, ИКТИБ</Link>
              <Link to="to" className="dropdown-item">ТРЦ Мармелад, Таганрог</Link>
              <Link to="to" className="dropdown-item">Cyber Club, Таганрог</Link>
            </div>
          </li>
          <li className="menu__item">
            <Link className="menu__item menu__link" to="players">Игроки</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="toclubs">Клубы</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="todanate">Поддержать</Link>
          </li>
          <li className="nav-item menu__item menu__item--login">
            <Link to="/" className="menu__link" onClick={onClickLog}>
              <svg className="nav-link__user-icon" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 17L15.9669 13.0693C15.7173 12.5663 15.3266 12.142 14.8398 11.8452C14.353 11.5484 13.7898 11.391 13.2151 11.3912H4.70549C4.13064 11.3905 3.56729 11.5477 3.0804 11.8446C2.59352 12.1415 2.20293 12.566 1.95367 13.0693L0 17H18Z" fill="white" />
                <path d="M8.9583 8.87225C11.4803 8.87225 13.5248 6.88613 13.5248 4.43613C13.5248 1.98612 11.4803 0 8.9583 0C6.43628 0 4.39178 1.98612 4.39178 4.43613C4.39178 6.88613 6.43628 8.87225 8.9583 8.87225Z" fill="white" />
              </svg>
              {!isLogedIn ? ' Войти' : ' Выйти'}
            </Link>
          </li>
        </ul>

        <div className="burger-menu_overlay" />
      </div>
    </>
  );
};

export default memo(Navigation);
