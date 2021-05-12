import React, { memo } from 'react';
import { useHistory, Link } from 'react-router-dom';

const Navigation = () => {
  const history = useHistory();

  const onChangePage = (route) => {
    history.push(route);
  };
  return (
    <div className="navigation">
      <Link to="/tournaments" />
      <button type="button" onClick={() => onChangePage('/tournaments')}>Турниры</button>
      <button type="button" onClick={() => onChangePage('/events')}>События</button>
      <button type="button" onClick={() => onChangePage('/donuts')}>Поддержать</button>
      <button type="button" onClick={() => onChangePage('/players')}>Игроки</button>
      <button type="button" onClick={() => onChangePage('/clubs')}>Клубы</button>
    </div>
  );
};

export default memo(Navigation);
