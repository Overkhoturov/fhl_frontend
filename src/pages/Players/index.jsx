import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.css';
import Player from './player';
import { getPlayers } from '../../actions/players';

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
  return (
    <>
      <div className="main">
        <Header isShowNavigation />
        <div className="container">
          <h2 className="title-line">Игроки</h2>
          <div className="table">
            <div className="table__row">
              <div className="table__col table__col--head table__col--1 table__col--num">№</div>
              <div className="table__col table__col--head table__col--3">Ник</div>
              <div className="table__col table__col--head table__col--2">Ранг</div>
              <div className="table__col table__col--head table__col--2">Позиция</div>
              <div className="table__col table__col--head table__col--2">Доп</div>
            </div>
            <div className="table__rows">
              <Player />
              <Player />
              <Player />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
});

export default Players;
