import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import './index.css';
import './game.css';

export default memo(() => (
  <>
    <Header isShowNavigation />
    <header className="header header-page">
      <div className="container container--top">
        <h1 className="main-title">
          Кибер Арена Versus, Таганрог
        </h1>
        <h2 className="main-date">
          1 апреля 2020
        </h2>
        <ul className="game-menu">
          <li className="game-menu__item">
            <Link to="/" className="game-menu__link active">
              Сетка
            </Link>
          </li>
          <li className="game-menu__item">
            <Link to="/crew" className="game-menu__link ">
              Составы
            </Link>
          </li>
          <li className="game-menu__item">
            <Link to="/schedule" className="game-menu__link ">
              Расписание
            </Link>
          </li>
          <li className="game-menu__item">
            <Link to="/regulations" className="game-menu__link ">
              Регламент
            </Link>
          </li>
          <li className="game-menu__item">
            <Link to="/photos" className="game-menu__link ">
              Фотогалерея
            </Link>
          </li>
        </ul>
      </div>
    </header>
    <main className="main">
      <div className="container">
        <h2 className="title-line">
          турнирная сетка
        </h2>
        <iframe title="1" width="100%" height="650" onLoad={() => console.log('asdasd')} src="https://challonge.com/ru/akg47co5/module" />
      </div>
    </main>

  </>
));
