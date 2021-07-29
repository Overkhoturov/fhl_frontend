import React, { memo } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import VK from '../svgComponents/Social/Vk';
import TELEGRAM from '../svgComponents/Social/Telegram';
import INSTAGRAM from '../svgComponents/Social/Instagram';
import YOUTUBE from '../svgComponents/Social/Youtube';

const FOOTER = () => (
  <footer className="footer">
    <div className="container">

      <ul className="footer-menu">
        <li className="footer-menu__item">
          <Link className="footer-menu__link" to="#Турниры">Турниры</Link>
        </li>
        <li className="footer-menu__item">
          <Link className="footer-menu__link" to="#Игроки">Игроки</Link>
        </li>
        <li className="footer-menu__item">
          <Link className="footer-menu__link" to="#Клубы">Клубы</Link>
        </li>
        <li className="footer-menu__item">
          <Link className="footer-menu__link" to="#Поддержать">Поддержать</Link>
        </li>

        <li className="footer-menu__item footer-menu__item--social">
          <Link className="footer-menu__social vk-icon" to="#vk">
            <VK />
          </Link>
          <Link className="footer-menu__social telegram-icon" to="#telegram">
            <TELEGRAM />
          </Link>
          <Link className="footer-menu__social youtube-icon" to="#youtube">
            <YOUTUBE />
          </Link>
          <Link className="footer-menu__social instagram-icon" to="#instagram">
            <INSTAGRAM />
          </Link>
        </li>

      </ul>
    </div>
  </footer>
);

export default memo(FOOTER);
