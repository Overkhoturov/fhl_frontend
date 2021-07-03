/* eslint-disable */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TabNet = memo((props) => {
  const { photos } = props;
  const showLogo = !photos;

  return (
    <>
      <h2 className="title-line">
        фото
      </h2>
      {showLogo ? (
        <div className="net-loader">
          <div className="spinner-border" role="status" />          
          <span>
            Фотографии отсутствуют
          </span>
        </div>
      )
        : (
          <div className="gallery">
            {photos.map((photo) => (
              <Link to="/" className="gallery__item" onClick={((event) => event.preventDefault())}>
                <img src={photo}></img>
              </Link>
            ))}
          </div>
        )}
    </>
  );
});

TabNet.propTypes = {
  photos: PropTypes.string,
};

TabNet.defaultProps = {
  challongeLink: null,
};

export default TabNet;
