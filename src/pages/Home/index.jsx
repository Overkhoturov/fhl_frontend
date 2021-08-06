import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import formatTime from '../../utils/formatTime';

import CONSTANTS from '../../constants';

import './banner.css';
import './cards.css';

export default memo(() => {
  const tournaments = useSelector((state) => state.tournaments);
  const { allTournaments } = tournaments;
  const lastTournament = allTournaments.length ? allTournaments[0] : '';

  return (
    <>
    <div className="main">
      <div className="banner">
        <Header isShowNavigation classHeader="header_home" />
        <div className="banner__container">
          <div className="banner__content">
            <h1 className="banner__title">
              {lastTournament.name}
            </h1>
            <p className="banner__description">
              Строчка или даже две с подробностями предстоящего мероприятия или турнира,
              какие условия у турнира и все такое. Много всего можно написать.
            </p>
            <Link to={`${CONSTANTS.TOURNAMENTS}/${lastTournament.id}`} className="button banner__btn">Перейти к турниру</Link>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="cards">
          {allTournaments.map((tournament) => (
            <div key={tournament.id} className="card">
              <Link
                to={`${CONSTANTS.TOURNAMENTS}/${tournament.id}`}
                className="card__image card__image--game"
                style={{ backgroundImage: `url(${CONSTANTS.SERVER}/images/${tournament.banner})` }}
              />
              <div className="card__content card__content--game">
                <Link to={`${CONSTANTS.TOURNAMENTS}/${tournament.id}`} className="card__title">{tournament.name}</Link>
                <div className="card__date">{formatTime(tournament.date)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
      <Footer />
    </>
  );
});
