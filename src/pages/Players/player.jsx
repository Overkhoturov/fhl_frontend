import React, { memo } from 'react';
import './index.scss';
import PropTypes from 'prop-types';

import bronzeRank from '../../assets/img/ranked-emblems/Emblem_Bronze.png';
import silverRank from '../../assets/img/ranked-emblems/Emblem_Silver.png';
import ironRank from '../../assets/img/ranked-emblems/Emblem_Iron.png';
import goldRank from '../../assets/img/ranked-emblems/Emblem_Gold.png';
import platinumRank from '../../assets/img/ranked-emblems/Emblem_Platinum.png';
import masterRank from '../../assets/img/ranked-emblems/Emblem_Master.png';
import diamondRank from '../../assets/img/ranked-emblems/Emblem_Diamond.png';
import challengerRank from '../../assets/img/ranked-emblems/Emblem_Challenger.png';
import grandmasterRank from '../../assets/img/ranked-emblems/Emblem_Grandmaster.png';

const Player = memo((props) => {
  let rankSrc;
  switch (props.rank) {
    case 'IRON 1':
    case 'IRON 2':
    case 'IRON 3':
      rankSrc = ironRank;
      break;
    case 'BRONZE 1':
    case 'BRONZE 2':
    case 'BRONZE 3':
      rankSrc = bronzeRank;
      break;
    case 'SILVER 1':
    case 'SILVER 2':
    case 'SILVER 3':
      rankSrc = silverRank;
      break;
    case 'GOLD 1':
    case 'GOLD 2':
    case 'GOLD 3':
      rankSrc = goldRank;
      break;
    case 'PLATINUM 1':
    case 'PLATINUM 2':
    case 'PLATINUM 3':
      rankSrc = platinumRank;
      break;
    case 'DIAMOND 1':
    case 'DIAMOND 2':
    case 'DIAMOND 3':
      rankSrc = diamondRank;
      break;
    case 'MASTER 1':
    case 'MASTER 2':
    case 'MASTER 3':
      rankSrc = masterRank;
      break;
    case 'GRANDMASTER 1':
    case 'GRANDMASTER 2':
    case 'GRANDMASTER 3':
      rankSrc = grandmasterRank;
      break;
    case 'CHALLENGER 1':
    case 'CHALLENGER 2':
    case 'CHALLENGER 3':
      rankSrc = challengerRank;
      break;

    default:
      rankSrc = null;
  }

  const mainPosSrc = 'https://steamcdn-a.akamaihd.net/apps/csgo/blog/images/service_medal_2021.png';
  const secondPosImg = <img className="players-pos" src="https://steamcdn-a.akamaihd.net/apps/csgo/blog/images/service_medal_2021.png" alt="" />;
  return (
    <div className="players-table-header">
      <div className="players-table-subheader">
        <div className="players-table-subheader__item-first">{props.id}</div>
        <div className="players-table-subheader__item-first">{props.nickname}</div>
      </div>
      <div className="players-table-subheader">

        <div className="players-table-subheader__item-second">
          <img
            className="players-rang"
            src={rankSrc}
            alt=""
          />
        </div>
        <div className="players-table-subheader__item-second"><img className="players-pos" src={mainPosSrc} alt="" /></div>
        <div className="players-table-subheader__item-second">{secondPosImg}</div>
      </div>
    </div>
  );
});

Player.propTypes = {
  id: PropTypes.number,
  nickname: PropTypes.string,
  rank: PropTypes.string,
  // main_role: PropTypes.string,
  // additional_roles: PropTypes.string,
};

Player.defaultProps = {
  id: null,
  nickname: null,
  rank: PropTypes.string,
  // main_role: PropTypes.string,
  // additional_roles: PropTypes.string,
};

export default Player;
