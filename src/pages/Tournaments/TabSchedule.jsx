/* eslint-disable */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TabSchedule = memo((props) => {
  const { schedule } = props;
  const showLogo = !schedule;

  return (
    <>
      <h2 className="title-line">
        расписание
      </h2>
      {showLogo
        ? (
          <div className="net-loader">
            <div className="spinner-border" role="status" />
            <span>
              Расписание отсутствует
            </span>
          </div>
        )
        : (
          <div className="table">
            <div className="table__row">
              <div className="table__col table__col--head table__col--3">Время</div>
              <div className="table__col table__col--head table__col--3">№ Игры</div>
              <div className="table__col table__col--head table__col--3">Раунд</div>
            </div>
            {schedule.map((day) => (
              day.rows.map((row, index) => (
                <div key={index} className="table__row">
                  <div className="table__col table__col table__col--3">
                    {`${day.title} / ${row.time}`}
                  </div>
                  <div className="table__col table__col table__col--3">{row.count}</div>
                  <div className="table__col table__col table__col--3">
                    {row.round.split('<br>').map((item) => (
                      <span key={index + item}>
                        {item}
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ))}
          </div>
        )}

    </>
  );
});

export default TabSchedule;
