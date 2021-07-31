import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '../Social/Instagram';
import VkIcon from '../Social/Vk';
import YoutubeIcon from '../Social/Youtube';

import './index.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <ul className="footer-menu">
        <li className="footer-menu__item">
          <Link to="/" className="footer-menu__link">Турниры</Link>
        </li>
        <li className="footer-menu__item">
          <Link to="players" className="footer-menu__link">Игроки</Link>
        </li>
        <li className="footer-menu__item">
          <Link to="toclubs" className="footer-menu__link">Клубы</Link>
        </li>
        <li className="footer-menu__item">
          <Link to="todanate" className="footer-menu__link">Поддержать</Link>
        </li>
        <li className="footer-menu__item--social">
          <a className="footer-menu__social" href="https://vk.com/firehorn">
            <VkIcon />
          </a>
          <a className="footer-menu__social" href="https://www.youtube.com/channel/UChaA9krZaM5qgR6-u0YE2pAe">
            <YoutubeIcon />
          </a>
          <a className="footer-menu__social" href="https://www.instagram.com/firehornleague/">
            <InstagramIcon />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
export default memo(Footer);
