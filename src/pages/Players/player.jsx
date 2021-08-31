import React, { memo } from 'react';
import './index.scss';
import PropTypes from 'prop-types';

import bgTrompley from '../../assets/img/background-trompley.png';

import bronzeRank from '../../assets/img/ranked-emblems/Emblem_Bronze.png';
import silverRank from '../../assets/img/ranked-emblems/Emblem_Silver.png';
import ironRank from '../../assets/img/ranked-emblems/Emblem_Iron.png';
import goldRank from '../../assets/img/ranked-emblems/Emblem_Gold.png';
import platinumRank from '../../assets/img/ranked-emblems/Emblem_Platinum.png';
import masterRank from '../../assets/img/ranked-emblems/Emblem_Master.png';
import diamondRank from '../../assets/img/ranked-emblems/Emblem_Diamond.png';
import challengerRank from '../../assets/img/ranked-emblems/Emblem_Challenger.png';
import grandmasterRank from '../../assets/img/ranked-emblems/Emblem_Grandmaster.png';

import bronzeTop from '../../assets/img/ranked-positions/Position_Bronze-Top.png';
import bronzeJungle from '../../assets/img/ranked-positions/Position_Bronze-Jungle.png';
import bronzeMid from '../../assets/img/ranked-positions/Position_Bronze-Mid.png';
import bronzeBot from '../../assets/img/ranked-positions/Position_Bronze-Bot.png';
import bronzeSupport from '../../assets/img/ranked-positions/Position_Bronze-Support.png';
import ironTop from '../../assets/img/ranked-positions/Position_Iron-Top.png';
import ironJungle from '../../assets/img/ranked-positions/Position_Iron-Jungle.png';
import ironMid from '../../assets/img/ranked-positions/Position_Iron-Mid.png';
import ironBot from '../../assets/img/ranked-positions/Position_Iron-Bot.png';
import ironSupport from '../../assets/img/ranked-positions/Position_Iron-Support.png';
import silverTop from '../../assets/img/ranked-positions/Position_Silver-Top.png';
import silverJungle from '../../assets/img/ranked-positions/Position_Silver-Jungle.png';
import silverMid from '../../assets/img/ranked-positions/Position_Silver-Mid.png';
import silverBot from '../../assets/img/ranked-positions/Position_Silver-Bot.png';
import silverSupport from '../../assets/img/ranked-positions/Position_Silver-Support.png';
import goldTop from '../../assets/img/ranked-positions/Position_Gold-Top.png';
import goldJungle from '../../assets/img/ranked-positions/Position_Gold-Jungle.png';
import goldMid from '../../assets/img/ranked-positions/Position_Gold-Mid.png';
import goldBot from '../../assets/img/ranked-positions/Position_Gold-Bot.png';
import goldSupport from '../../assets/img/ranked-positions/Position_Gold-Support.png';
import challengerTop from '../../assets/img/ranked-positions/Position_Challenger-Top.png';
import challengerJungle from '../../assets/img/ranked-positions/Position_Challenger-Jungle.png';
import challengerMid from '../../assets/img/ranked-positions/Position_Challenger-Mid.png';
import challengerBot from '../../assets/img/ranked-positions/Position_Challenger-Bot.png';
import challengerSupport from '../../assets/img/ranked-positions/Position_Challenger-Support.png';
import diamondTop from '../../assets/img/ranked-positions/Position_Diamond-Top.png';
import diamondJungle from '../../assets/img/ranked-positions/Position_Diamond-Jungle.png';
import diamondMid from '../../assets/img/ranked-positions/Position_Diamond-Mid.png';
import diamondBot from '../../assets/img/ranked-positions/Position_Diamond-Bot.png';
import diamondSupport from '../../assets/img/ranked-positions/Position_Diamond-Support.png';
import platTop from '../../assets/img/ranked-positions/Position_Plat-Top.png';
import platJungle from '../../assets/img/ranked-positions/Position_Plat-Jungle.png';
import platMid from '../../assets/img/ranked-positions/Position_Plat-Mid.png';
import platBot from '../../assets/img/ranked-positions/Position_Plat-Bot.png';
import platSupport from '../../assets/img/ranked-positions/Position_Plat-Support.png';
import masterTop from '../../assets/img/ranked-positions/Position_Master-Top.png';
import masterJungle from '../../assets/img/ranked-positions/Position_Master-Jungle.png';
import masterMid from '../../assets/img/ranked-positions/Position_Master-Mid.png';
import masterBot from '../../assets/img/ranked-positions/Position_Master-Bot.png';
import masterSupport from '../../assets/img/ranked-positions/Position_Master-Support.png';
import grandmasterTop from '../../assets/img/ranked-positions/Position_Grandmaster-Top.png';
import grandmasterJungle from '../../assets/img/ranked-positions/Position_Grandmaster-Jungle.png';
import grandmasterMid from '../../assets/img/ranked-positions/Position_Grandmaster-Mid.png';
import grandmasterBot from '../../assets/img/ranked-positions/Position_Grandmaster-Bot.png';
import grandmasterSupport from '../../assets/img/ranked-positions/Position_Grandmaster-Support.png';

const Player = memo((props) => {
  let rankSrc = bgTrompley;
  let mainPos = bgTrompley;
  const secondPosList = [];
  switch (props.rank) {
    case 'IRON 1':
    case 'IRON 2':
    case 'IRON 3':
      rankSrc = ironRank;
      switch (props.main_role) {
        case 'TOP': mainPos = ironTop; break;
        case 'JUNGLE': mainPos = ironJungle; break;
        case 'MID': mainPos = ironMid; break;
        case 'BOT': mainPos = ironBot; break;
        case 'SUPPORT': mainPos = ironSupport; break;
        default:
      }
      props.additional_roles.forEach(
        (e) => {
          switch (e) {
            case 'TOP': secondPosList.push(ironTop); break;
            case 'JUNGLE': secondPosList.push(ironJungle); break;
            case 'MID': secondPosList.push(ironMid); break;
            case 'BOT': secondPosList.push(ironBot); break;
            case 'SUPPORT': secondPosList.push(ironSupport); break;
            default:
          }
        },
      );
      break;
    case 'BRONZE 1':
    case 'BRONZE 2':
    case 'BRONZE 3':
      rankSrc = bronzeRank;
      switch (props.main_role) {
        case 'TOP': mainPos = bronzeTop; break;
        case 'JUNGLE': mainPos = bronzeJungle; break;
        case 'MID': mainPos = bronzeMid; break;
        case 'BOT': mainPos = bronzeBot; break;
        case 'SUPPORT': mainPos = bronzeSupport; break;
        default: return 0;
      }
      if (props.additional_roles) {
        props.additional_roles.forEach(
          (e) => {
            switch (e) {
              case 'TOP': secondPosList.push(bronzeTop); break;
              case 'JUNGLE': secondPosList.push(bronzeJungle); break;
              case 'MID': secondPosList.push(bronzeMid); break;
              case 'BOT': secondPosList.push(bronzeBot); break;
              case 'SUPPORT': secondPosList.push(bronzeSupport); break;
              default:
            }
          },
        );
      }
      break;
    case 'SILVER 1':
    case 'SILVER 2':
    case 'SILVER 3':
      rankSrc = silverRank;
      switch (props.main_role) {
        case 'TOP': mainPos = silverTop; break;
        case 'JUNGLE': mainPos = silverJungle; break;
        case 'MID': mainPos = silverMid; break;
        case 'BOT': mainPos = silverBot; break;
        case 'SUPPORT': mainPos = silverSupport; break;
        default:
      }
      if (props.additional_roles) {
        props.additional_roles.forEach(
          (e) => {
            switch (e) {
              case 'TOP': secondPosList.push(silverTop); break;
              case 'JUNGLE': secondPosList.push(silverJungle); break;
              case 'MID': secondPosList.push(silverMid); break;
              case 'BOT': secondPosList.push(silverBot); break;
              case 'SUPPORT': secondPosList.push(silverSupport); break;
              default:
            }
          },
        );
      }
      break;
    case 'GOLD 1':
    case 'GOLD 2':
    case 'GOLD 3':
      rankSrc = goldRank;
      switch (props.main_role) {
        case 'TOP': mainPos = goldTop; break;
        case 'JUNGLE': mainPos = goldJungle; break;
        case 'MID': mainPos = goldMid; break;
        case 'BOT': mainPos = goldBot; break;
        case 'SUPPORT': mainPos = goldSupport; break;
        default:
      }
      if (props.additional_roles) {
        props.additional_roles.forEach(
          (e) => {
            switch (e) {
              case 'TOP': secondPosList.push(goldTop); break;
              case 'JUNGLE': secondPosList.push(goldJungle); break;
              case 'MID': secondPosList.push(goldMid); break;
              case 'BOT': secondPosList.push(goldBot); break;
              case 'SUPPORT': secondPosList.push(goldSupport); break;
              default:
            }
          },
        );
      }
      break;
    case 'PLATINUM 1':
    case 'PLATINUM 2':
    case 'PLATINUM 3':
      rankSrc = platinumRank;
      switch (props.main_role) {
        case 'TOP': mainPos = platTop; break;
        case 'JUNGLE': mainPos = platJungle; break;
        case 'MID': mainPos = platMid; break;
        case 'BOT': mainPos = platBot; break;
        case 'SUPPORT': mainPos = platSupport; break;
        default:
      }
      if (props.additional_roles) {
        props.additional_roles.forEach(
          (e) => {
            switch (e) {
              case 'TOP': secondPosList.push(platTop); break;
              case 'JUNGLE': secondPosList.push(platJungle); break;
              case 'MID': secondPosList.push(platMid); break;
              case 'BOT': secondPosList.push(platBot); break;
              case 'SUPPORT': secondPosList.push(platJungle); break;
              default:
            }
          },
        );
      }
      break;
    case 'DIAMOND 1':
    case 'DIAMOND 2':
    case 'DIAMOND 3':
      rankSrc = diamondRank;
      switch (props.main_role) {
        case 'TOP': mainPos = diamondTop; break;
        case 'JUNGLE': mainPos = diamondJungle; break;
        case 'MID': mainPos = diamondMid; break;
        case 'BOT': mainPos = diamondBot; break;
        case 'SUPPORT': mainPos = diamondSupport; break;
        default:
      }
      if (props.additional_roles) {
        props.additional_roles.forEach(
          (e) => {
            switch (e) {
              case 'TOP': secondPosList.push(diamondTop); break;
              case 'JUNGLE': secondPosList.push(diamondJungle); break;
              case 'MID': secondPosList.push(diamondMid); break;
              case 'BOT': secondPosList.push(diamondBot); break;
              case 'SUPPORT': secondPosList.push(diamondSupport); break;
              default:
            }
          },
        );
      }
      break;
    case 'MASTER 1':
    case 'MASTER 2':
    case 'MASTER 3':
      rankSrc = masterRank;
      switch (props.main_role) {
        case 'TOP': mainPos = masterTop; break;
        case 'JUNGLE': mainPos = masterJungle; break;
        case 'MID': mainPos = masterMid; break;
        case 'BOT': mainPos = masterBot; break;
        case 'SUPPORT': mainPos = masterSupport; break;
        default:
      }
      if (props.additional_roles) {
        props.additional_roles.forEach(
          (e) => {
            switch (e) {
              case 'TOP': secondPosList.push(masterTop); break;
              case 'JUNGLE': secondPosList.push(masterJungle); break;
              case 'MID': secondPosList.push(masterMid); break;
              case 'BOT': secondPosList.push(masterBot); break;
              case 'SUPPORT': secondPosList.push(masterSupport); break;
              default:
            }
          },
        );
      }
      break;
    case 'GRANDMASTER 1':
    case 'GRANDMASTER 2':
    case 'GRANDMASTER 3':
      rankSrc = grandmasterRank;
      switch (props.main_role) {
        case 'TOP': mainPos = grandmasterTop; break;
        case 'JUNGLE': mainPos = grandmasterJungle; break;
        case 'MID': mainPos = grandmasterMid; break;
        case 'BOT': mainPos = grandmasterBot; break;
        case 'SUPPORT': mainPos = grandmasterSupport; break;
        default:
      }
      if (props.additional_roles) {
        props.additional_roles.forEach(
          (e) => {
            switch (e) {
              case 'TOP': secondPosList.push(grandmasterTop); break;
              case 'JUNGLE': secondPosList.push(grandmasterJungle); break;
              case 'MID': secondPosList.push(grandmasterMid); break;
              case 'BOT': secondPosList.push(grandmasterBot); break;
              case 'SUPPORT': secondPosList.push(grandmasterSupport); break;
              default:
            }
          },
        );
      }
      break;
    case 'CHALLENGER 1':
    case 'CHALLENGER 2':
    case 'CHALLENGER 3':
      rankSrc = challengerRank;
      switch (props.main_role) {
        case 'TOP': mainPos = challengerTop; break;
        case 'JUNGLE': mainPos = challengerJungle; break;
        case 'MID': mainPos = challengerMid; break;
        case 'BOT': mainPos = challengerBot; break;
        case 'SUPPORT': mainPos = challengerSupport; break;
        default:
      }
      if (props.additional_roles) {
        props.additional_roles.forEach(
          (e) => {
            switch (e) {
              case 'TOP': secondPosList.push(challengerTop); break;
              case 'JUNGLE': secondPosList.push(challengerJungle); break;
              case 'MID': secondPosList.push(challengerMid); break;
              case 'BOT': secondPosList.push(challengerBot); break;
              case 'SUPPORT': secondPosList.push(challengerSupport); break;
              default:
            }
          },
        );
      }
      break;
    default:
      rankSrc = bgTrompley;
  }
  return (
    <div className="players">
      <div className="players__column">
        <div className="players__column__item-first players__column__id">{props.id}</div>
        <div className="players__column__item-first">{props.nickname ? props.nickname : props.email}</div>
      </div>
      <div className="players__column ">
        <div className="players__column__item-second">
          <img
            className="players__column__rank"
            src={rankSrc}
            alt=""
          />
        </div>
        <div className="players__column__item-second"><img className="players__column__position" src={mainPos} alt="" /></div>
        <div className="players__column__item-second">
          {secondPosList.map(
            (e) => <img className="players__column__position" src={e} alt="" />,
          )}
        </div>
      </div>
    </div>
  );
});

Player.propTypes = {
  id: PropTypes.number,
  nickname: PropTypes.string,
  rank: PropTypes.string,
  main_role: PropTypes.string,
  additional_roles: PropTypes.arrayOf(PropTypes.string),
  email: PropTypes.string,
};

Player.defaultProps = {
  id: null,
  nickname: null,
  rank: PropTypes.string,
  main_role: PropTypes.string,
  additional_roles: null,
  email: PropTypes.string,
};

export default Player;
