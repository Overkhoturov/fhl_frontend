import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TabCrews = memo((props) => {
  const { teams } = props;
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
                                team.crew.map((player) => (
                                  <div key={`${team.id}_${player}`} className="player">
                                    <span className="nik">{player}</span>
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

TabCrews.propTypes = {
  teams: {
    id: PropTypes.number,
    name: PropTypes.string,
    shortName: PropTypes.string,
    crew: PropTypes.arrayOf(
      PropTypes.string,
    ),
  },
};

TabCrews.defaultProps = {
  teams: null,
};

export default TabCrews;
