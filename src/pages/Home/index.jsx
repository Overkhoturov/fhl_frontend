import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTournaments } from '../../actions/tournaments';
import Header from '../../components/Header';

import CONSTANTS from '../../constants';

import './index.css';

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
      avatarUrl: '../../assets/img/games/cyber_versus.jpg',
    },
    {
      id: 2,
      name: 'cyber-arena-rnd-2',
      desciption: 'Кибер-Арена, Ростов-на-Дону',
      date: '2020-12-30',
      avatarUrl: '../../assets/img/games/CyberArenaRnd2.jpg',
    },
    {
      id: 3,
      name: 'legion',
      desciption: 'Legion Cyber Arena, Таганрог',
      date: '2020-09-20',
      avatarUrl: '../../assets/img/games/legion.jpg',
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
            <div key={tournament.id} className="games__item">
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
