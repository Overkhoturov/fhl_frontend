import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Navigation from '../Navigation';
import './index.css';

const Header = (props) => {
  const { isShowNavigation } = props;

  return (
    <>
      {isShowNavigation ? <Navigation /> : ''}
    </>
  );
};

Header.propTypes = {
  isShowNavigation: PropTypes.bool.isRequired,
};

export default memo(Header);
