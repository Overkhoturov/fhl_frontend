import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import CONSTANTS from '../../constants';

import './index.css';

export default memo(() => {
  const homeTournaments = [
    {
      name: 'cyber-versus',
      desciption: 'Кибер Арена Versus, Таганрог',
      date: '2021-04-10',
      avatarUrl: 'img/games/cyber_versus.jpg',
    },
    {
      name: 'cyber-arena-rnd-2',
      desciption: 'Кибер-Арена, Ростов-на-Дону',
      date: '2020-12-30',
      avatarUrl: 'img/games/CyberArenaRnd2.jpg',
    },
  ];

  return (
    <>
      <div className="banner">
        <Header isShowNavigation classHeader="header_home" />
        <div className="banner__container">
          <div className="banner__content">
            <h1 className="banner__title">
              LEGION CYBER ARENA, ТАГАНРОГ
            </h1>
            <p className="banner__description" />
            <Link to={`${CONSTANTS.TOURNAMENTS}/cyber-versus`} className="banner__btn">Перейти к турниру</Link>
          </div>
        </div>
      </div>
      <section className="container">
        <h2 className="title">Проведенные мероприятия</h2>
        <div className="games">
          {homeTournaments.map((tournament) => (
            <div className="games__item">
              <Link
                to={`${CONSTANTS.TOURNAMENTS}/${tournament.name}`}
                className="games__image"
                style={{ backgroundImage: `url(${tournament.avatarUrl})` }}
              />
              <div className="games__desc">
                <h3 className="games__title">
                  <Link to={`${CONSTANTS.TOURNAMENTS}/${tournament.name}`} className="games__link">{tournament.desciption}</Link>
                </h3>
                <div className="games__date">{tournament.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
});
