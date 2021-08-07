import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import EditModal from './EditModal';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.css';
import constants from '../../constants';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const [username, setUsername] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);
  const history = useHistory();
  const isLogedIn = useSelector((state) => state.auth.isLogedIn);

  const onClickEdit = (event) => {
    event.preventDefault();
    setIsShowModal(!isShowModal);
  };

  useEffect(() => {
    if (!isLogedIn) {
      history.push(constants.HOME);
    }
  }, [isLogedIn]);

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
          <Link to="/" onClick={onClickEdit} className="burger-menu_button">
            Редактировать данные
          </Link>
        </div>
      </div>
      <Footer />
      <EditModal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
    </>
  );
};

export default memo(Profile);
