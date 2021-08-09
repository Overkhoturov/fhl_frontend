import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const TabRegular = memo((props) => {
  const { regulation } = props;
  function createMarkup() {
    return { __html: regulation };
  }

  return (
    <>
      <div className="container">
        <h2 className="title-line">
          Регламент
        </h2>
        <article className="article">
          <div dangerouslySetInnerHTML={createMarkup()} />
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
