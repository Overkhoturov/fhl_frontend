import React, { memo } from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Player = memo((props) => (
  <div className="players">
    <div className="players__column">
      <div className="players__column__item-first players__column__id">{props.id}</div>
      <div className="players__column__item-first">{props.nickname ? props.nickname : props.email}</div>
    </div>
    <div className="players__column ">
      <div className="players__column__item-second">
        <img
          className="players__column__rank"
          src={props.images.rankEmblem}
          alt=""
        />
      </div>
      <div className="players__column__item-second">
        <img className="players__column__position" src={props.images.mainRoleEmblem} alt="" />
      </div>
      <div className="players__column__item-second">
        {props.images.additionalRolesEmblem.map(
          (path) => (path ? <img key={path} className="players__column__position" src={path} alt="" /> : null),
        )}
      </div>
    </div>
  </div>
));

Player.propTypes = {
  id: PropTypes.number,
  nickname: PropTypes.string,
  email: PropTypes.string,
};

Player.defaultProps = {
  id: null,
  nickname: null,
  email: PropTypes.string,
};

export default Player;
