import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import { getUserRequest } from '../../actions/auth';

import './index.css';

const Profile = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const uid = localStorage.getItem('uid');
  const [username, setUsername] = useState('');
  const { match } = props;

  console.log('match', match);

  useEffect(() => {
    if (uid) {
      dispatch(getUserRequest(uid));
    }
  }, [uid]);

  useEffect(() => {
    if (user?.first_name && user?.last_name) {
      return setUsername(`${user.first_name} ${user.last_name}`);
    }
    return setUsername(user?.email);
  }, [user]);

  return (
    <>
    <div className="main">
      <Header isShowNavigation />
      <header className="header header-page">
        <div className="container container--top">
          <h1 className="main-title">
            {username}
          </h1>
          <h2 className="main-date">
            {user?.rank}
          </h2>
        </div>
      </header>
      <div>
        <Link to={`${match.url}/edit`} className="burger-menu_button">
          Редактировать данные
        </Link>
      </div>
    </div>
      <Footer />
    </>
  );
};

Profile.propTypes = {
  match: {
    params: {
      token: PropTypes.string.isRequired,
    },
  },
};

Profile.defaultProps = {
  match: {},
};

export default memo(Profile);
