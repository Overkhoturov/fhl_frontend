import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo';

const TabRegular = memo((props) => {
  const { regulation } = props;
  const showLogo = !regulation;
  return (
    <>
      <h2 className="title-line">
        Регламент
      </h2>
      {showLogo ? (
        <div className="net-loader">
          <Logo width="80%" height="100%" />
          <span>
            Регламент отсутствует
          </span>
        </div>
      )
        : (
          <article className="article">
            {regulation}
          </article>
        )}
    </>
  );
});

TabRegular.propTypes = {
  regulation: PropTypes.string,
};

TabRegular.defaultProps = {
  regulation: null,
};

export default TabRegular;
