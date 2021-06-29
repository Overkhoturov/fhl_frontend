import React, { memo } from 'react';

export default memo(() => {
  const teams = [
    {
      id: 1,
      name: 'DonSTUcked on Chall',
      players: [
        {
          firstname: 'Артем ',
          nickname: 'Al Ad Ramaleck',
          lastname: ' Потуга',
        },
        {
          firstname: 'Даниил ',
          nickname: 'Hromi',
          lastname: ' Петренко',
        },
        {
          firstname: 'Александр ',
          nickname: 'Bean Pod',
          lastname: ' Клименко',
        },
        {
          firstname: 'Герман ',
          nickname: 'Glakar',
          lastname: ' Елфинов',
        },
        {
          firstname: 'Андрей ',
          nickname: 'Maross',
          lastname: ' Хуторенко',
        },
      ],
    },
    {
      id: 2,
      name: 'DonSTUcked on Chall',
      players: [
        {
          firstname: 'Артем ',
          nickname: 'Al Ad Ramaleck',
          lastname: ' Потуга',
        },
        {
          firstname: 'Даниил ',
          nickname: 'Hromi',
          lastname: ' Петренко',
        },
        {
          firstname: 'Александр ',
          nickname: 'Bean Pod',
          lastname: ' Клименко',
        },
        {
          firstname: 'Герман ',
          nickname: 'Glakar',
          lastname: ' Елфинов',
        },
        {
          firstname: 'Андрей ',
          nickname: 'Maross',
          lastname: ' Хуторенко',
        },
      ],
    },

  ];

  return (
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
        {teams.map((team) => (
          <div key={team.id} className="table__row">
            <div className="table__col table__col table__col--1">{team.id}</div>
            <div className="table__col table__col table__col--3">{team.name}</div>
            <div className="table__col table__col table__col--6">
              {
              team.players.map((player) => (
                <div key={`${team.id}_${player.nickname}`} className="player">
                  {player.firstname}
                  <span className="nik">{player.nickname}</span>
                  {player.lastname}
                </div>
              ))
            }
            </div>
          </div>
        ))}
      </div>

    </>
  );
});
