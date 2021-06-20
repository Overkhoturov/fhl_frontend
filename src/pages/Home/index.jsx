import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTournaments } from '../../actions/tournaments';
import Header from '../../components/Header';

import CONSTANTS from '../../constants';

import './index.css';
import './cards.css';

export default memo(() => {
  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);

  console.log('home', home);
  useEffect(() => {
    dispatch(getTournaments());
  }, []);
  const homeTournaments = [
    {
      id: 1,
      name: 'cyber-versus',
      desciption: 'Кибер Арена Versus, Таганрог',
      date: '2021-04-10',
      avatarUrl: `${CONSTANTS.SERVER}/images/cyber_club.jpg`,
    },
    {
      id: 2,
      name: 'cyber-arena-rnd-2',
      desciption: 'Кибер-Арена, Ростов-на-Дону',
      date: '2020-12-30',
      avatarUrl: `${CONSTANTS.SERVER}/images/cyber_club.jpg`,
    },
    {
      id: 3,
      name: 'legion',
      desciption: 'Legion Cyber Arena, Таганрог',
      date: '2020-09-20',
      avatarUrl: `${CONSTANTS.SERVER}/images/cyber_club.jpg`,
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
            <p className="banner__description">
              Строчка или даже две с подробностями предстоящего мероприятия или турнира,
              какие условия у турнира и все такое. Много всего можно написать.
            </p>
            <Link to={`${CONSTANTS.TOURNAMENTS}/cyber-versus`} className="banner__btn">Перейти к турниру</Link>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="cards">
          {homeTournaments.map((tournament) => (
            <div key={tournament.id} className="card">
              <Link
                to={`${CONSTANTS.TOURNAMENTS}/${tournament.name}`}
                className="card__image card__image--game"
                style={{ backgroundImage: `url(${tournament.avatarUrl})` }}
              />
              <div className="card__content card__content--game">
                <Link to={`${CONSTANTS.TOURNAMENTS}/${tournament.name}`} className="card__title">{tournament.desciption}</Link>
                <div className="card__date">{tournament.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
});
