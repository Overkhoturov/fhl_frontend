import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../svgComponents/Logo';
import LogIn from '../LogIn';
import RegModal from '../Registration';
import Navigation from '../Navigation';
import './index.css';

const Header = (props) => {
  const { isShowNavigation, classHeader } = props;

  return (
    <header className={`header ${classHeader}`}>
      <div className="container container--header">
        <nav className="nav">
          <Link className="nav__logo" to="/">
            <Logo />
          </Link>
          {isShowNavigation ? <Navigation /> : ''}
        </nav>
      </div>
      <LogIn />
      <RegModal />
    </header>
  );
};

Header.propTypes = {
  isShowNavigation: PropTypes.bool,
  classHeader: PropTypes.string,
};

Header.defaultProps = {
  isShowNavigation: false,
  classHeader: '',
};

export default memo(Header);
