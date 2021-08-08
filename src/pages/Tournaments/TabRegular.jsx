import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TabRegular = memo((props) => {
  const { regulation } = props;
  return (
    <>
      <div className="container">
        <h2 className="title-line">
          Регламент
        </h2>
        <article className="article">
          {regulation}
          <p>Текст регламента</p>
        </article>
      </div>
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
