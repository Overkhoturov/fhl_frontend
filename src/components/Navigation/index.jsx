import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import CONSTANTS from '../../constants';

const Navigation = () => {
  const history = useHistory();

  const onChangePage = (route) => {
    history.push(route);
  };
  return (
    <>
      <li className="nav-item">
        <button className="nav-link" type="button" onClick={() => onChangePage(CONSTANTS.TOURNAMENTS)}>Турниры</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" type="button" onClick={() => onChangePage(CONSTANTS.EVENTS)}>События</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" type="button" onClick={() => onChangePage(CONSTANTS.DONATES)}>Поддержать</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" type="button" onClick={() => onChangePage(CONSTANTS.CLUBS)}>Клубы</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" type="button" onClick={() => onChangePage(CONSTANTS.PLAYERS)}>Игроки</button>
      </li>
    </>

  );
};

export default memo(Navigation);
