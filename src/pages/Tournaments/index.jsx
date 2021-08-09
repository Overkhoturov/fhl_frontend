import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageLoader from '../../components/PageLoader';
import { getCurrentTournament } from '../../actions/tournaments';
import { tournamentsToggleMenu } from '../../actions/header';
import formatTime from '../../utils/formatTime';

import TabNet from './TabNet';
import TabCrews from './TabCrews';
import TabSchedule from './TabSchedule';
import TabRegular from './TabRegular';
import TabPhotos from './TabPhotos';
import './index.css';
import './game.css';
import './table.css';
import constants from '../../constants';

const Tournaments = memo((props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const { match } = props;
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.tournaments);
  const { currentTournament } = tournaments;

  useEffect(() => {
    dispatch(getCurrentTournament(match.params.id));
    dispatch(tournamentsToggleMenu(false));
  }, [match.params.id]);

  return (
    <>
      <div className="main">
        <Header isShowNavigation />
        {currentTournament
          ? (
            <>
              <header className="header header-page">
                <div className="container container--top">
                  <h1 className="main-title">
                    {currentTournament.name}
                  </h1>
                  <h2 className="main-date">
                    {formatTime(currentTournament.date)}
                  </h2>
                  <ul className="game-menu">
                    {constants.TOURNAMENTS_TABS.map((tab, tabIndex) => {
                      if (!currentTournament[tab.name]) {
                        return null;
                      }
                      return (
                        <li key={tab.name} className="game-menu__item">
                          <Link
                            to="/"
                            className={`game-menu__link ${tabIndex === currentTab && 'active'}`}
                            onClick={(event) => {
                              event.preventDefault();
                              setCurrentTab(tabIndex);
                            }}
                          >
                            {tab.text}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </header>
              <main className="main">
                <div className="container">
                  {currentTab === 0 && <TabNet challongeLink={currentTournament?.challonge_link} />}
                  {currentTab === 1 && <TabCrews />}
                  {currentTab === 2 && <TabSchedule schedule={currentTournament?.schedule} />}
                  {currentTab === 3 && <TabRegular regulation={currentTournament?.regulations} />}
                  {currentTab === 4 && <TabPhotos />}
                </div>
              </main>
            </>
          )
          : <PageLoader />}
      </div>
      <Footer />
    </>
  );
});

export default Tournaments;

Tournaments.propTypes = {
  match: {
    params: {
      id: PropTypes.string.isRequired,
    },
  },
};

Tournaments.defaultProps = {
  match: {},
};
