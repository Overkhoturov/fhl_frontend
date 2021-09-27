import React, { memo } from 'react';

export default memo(({ teams }) => (
  <>
    <h2 className="title-line">
      составы
    </h2>
    <div className="table">
      <div className="table__row">
        <div className="table__col table__col--head table__col--1">№</div>
        <div className="table__col table__col--head table__col--3">Название команды</div>
        <div className="table__col table__col--head table__col--6">Состав команды</div>
      </div>
      {teams.map((team, index) => (
        <div key={team.id} className="table__row">
          <div className="table__col table__col table__col--1">{index + 1}</div>
          <div className="table__col table__col table__col--3">{team.name}</div>
          <div className="table__col table__col table__col--6">
            {
              team.crew.map((player) => (
                <div key={`${team.id}_${player}`} className="player">
                  {player}
                </div>
              ))
            }
          </div>
        </div>
      ))}
    </div>
  </>
));
