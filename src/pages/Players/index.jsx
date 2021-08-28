import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.scss';
import { getPlayers } from '../../actions/players';
import Player from './player';

const Players = memo(() => {
  const dispatch = useDispatch();
  const { players, error, loading } = useSelector((state) => state.players);

  useEffect(() => {
    dispatch(getPlayers());
    console.log(players);
  }, []);
  if (loading) {
    return <div>Загружается...</div>;
  }
  if (error) {
    return <div>Ошибочка</div>;
  }
  const wholePlayers = players.map((p) => (
    <Player
      id={p.id}
      nickname={p.nick_name}
      rank={p.rank}
      main_role={p.main_role}
      additional_roles={p.additional_roles}
    />
  ));

  return (
    <>
      <div className="main">
        <Header isShowNavigation />
        <div className="container">
          <h2 className="title-line">
            Игроки
          </h2>
          <div className="players-table-header">
            <div className="players-table-subheader">
              <div className="players-table-subheader__item-first">№</div>
              <div className="players-table-subheader__item-first">Ник</div>
            </div>
            <div className="players-table-subheader">
              <div className="players-table-subheader__item-second">Ранг</div>
              <div className="players-table-subheader__item-second">Позиция</div>
              <div className="players-table-subheader__item-second">Доп</div>
            </div>
          </div>
          {wholePlayers}
        </div>
      </div>
      <Footer />
    </>
  );
});

export default Players;
