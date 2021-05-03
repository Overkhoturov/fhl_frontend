import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Header = (props) => {
  const { isShowNavigation } = props;

  return (
    <>
      {isShowNavigation
        ? (
          <div className="navigation">
            <button type="button">Турниры</button>
            <button type="button">События</button>
            <button type="button">Поддержать</button>
            <button type="button">Игроки</button>
            <button type="button">Клубы</button>
          </div>
        )
        : ''}
    </>
  );
};

Header.propTypes = {
  isShowNavigation: PropTypes.bool.isRequired,
};

export default memo(Header);
