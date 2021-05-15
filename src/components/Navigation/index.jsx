import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import CONSTANTS from '../../constants';

const Navigation = () => (
  <>
    <li className="nav-item">
      <Link className="nav-link" to={CONSTANTS.TOURNAMENTS}> Турниры </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={CONSTANTS.EVENTS}> События </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={CONSTANTS.DONATES}> Поддержать </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={CONSTANTS.CLUBS}> Клубы </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={CONSTANTS.PLAYERS}> Игроки </Link>
    </li>
  </>

);

export default memo(Navigation);
