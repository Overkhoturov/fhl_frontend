import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.scss';
import { getPlayers } from '../../actions/players';
import Player from './player';

const Players = memo(() => {
  const dispatch = useDispatch();
  const { players, error, loading } = useSelector((state) => state.players);
  const [validPlayers, setValidPlayers] = useState([]);

  useEffect(() => {
    dispatch(getPlayers());
  }, []);

  const isShowPlayer = (player) => {
    if (!player.nick_name || !player.rank || !player.main_role) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    setValidPlayers(players.filter((player) => isShowPlayer(player)));
  }, [players]);

  if (loading) {
    return <div>Игроки загружаются</div>;
  }
  if (error) {
    return <div>Ошибка при загрузске игроков</div>;
  }

  const splitString = (stringToSplit) => {
    if (typeof stringToSplit === 'string') {
      return stringToSplit.split(' ');
    }
    return stringToSplit;
  };

  return (
    <>
      <div className="main">
        <Header isShowNavigation />
        <div className="container">
          <h2 className="title-line">
            Игроки
          </h2>
          <div className="players players-header">
            <div className="players__column">
              <div className="players__column__item-first players__column__id players__column__id-header players__column__item-header">№</div>
              <div className="players__column__item-first players__column__nickname-header players__column__item-header">Ник</div>
            </div>
            <div className="players__column">
              <div className="players__column__item-second players__column__item-header">Ранг</div>
              <div className="players__column__item-second players__column__item-header">Позиция</div>
              <div className="players__column__item-second players__column__item-header">Доп</div>
            </div>
          </div>
          {validPlayers.map((p, index) => (
            <Player
              id={index + 1}
              nickname={p.nick_name}
              rank={p.rank}
              main_role={p.main_role}
              additional_roles={splitString(p.additional_roles)}
              email={p.email}
              key={p.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
});

export default Players;
