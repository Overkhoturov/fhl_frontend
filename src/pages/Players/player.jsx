import React from 'react';
import './index.css';

const Player = () => (
  <div>
    <div className="table__col table__col--1 table__col--num">1</div>
    <div className="table__col table__col--3">d Album</div>
    <div className="table__col table__col--2">
      <img
        className="player__ranked"
        src="img/ranked-emblems/Emblem_Gold.png"
        title="Золото II"
        alt="Золото II"
      />
    </div>
    <div className="table__col table__col--2">
      <img
        className="player__position"
        src="img/ranked-positions/Position_Gold-Jungle.png"
        title="Лес"
        alt="Лес"
      />
    </div>
    <div className="table__col table__col--2">
      <div className="player__positions-list">
        <img
          className="player__position"
          src="img/ranked-positions/Position_Gold-Top.png"
          title="Топ"
          alt="Топ"
        />
        <img
          className="player__position"
          src="img/ranked-positions/Position_Gold-Mid.png"
          title="Мид"
          alt="Мид"
        />
      </div>
    </div>
  </div>

);

export default Player;
