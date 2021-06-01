import React, { memo } from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import LogIn from '../LogIn';
// import Navigation from '../Navigation';
// import { showModal } from '../../actions/home';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <ul className="footer-menu">
        <li className="footer-menu__item">
          <Link to="#Турниры" className="footer-menu__link">Фото</Link>

          <ul className="footer-submenu">
            <li className="footer-submenu__item">
              <Link to="tournaments" className="footer-submenu__link">Кибер-Арена, Ростов-на-Дону</Link>
            </li>
            {/* <li className="footer-submenu__item">
                <Link to="#" className="footer-submenu__link">Legion Cyber Arena, Таганрог</Link>
              </li>
              <li className="footer-submenu__item">
                <Link to="#" className="footer-submenu__link">Pride & FF15, Online</Link>
              </li>
              <li className="footer-submenu__item">
                <Link to="#" className="footer-submenu__link">Solo Cup, Online 2</Link>
              </li>
              <li className="footer-submenu__item">
                <Link to="#" className="footer-submenu__link">Solo Cup, Online</Link>
              </li>
              <li className="footer-submenu__item">
                <Link to="#" className="footer-submenu__link">Team Cup, Online</Link>
              </li>
              <li className="footer-submenu__item">
                <Link to="#" className="footer-submenu__link">Кибер-Арена, Ростов-на-Дону</Link>
              </li>
              <li className="footer-submenu__item">
        <Link to="#" className="footer-submenu__link">Лаборатория Inostudio, ИКТИБ, Таганрог</Link>
              </li>
              <li className="footer-submenu__item">
                <Link to="#" className="footer-submenu__link">ТРЦ Мармелад, Таганрог</Link>
              </li>
              <li className="footer-submenu__item">
                <Link to="#" className="footer-submenu__link">Cyber Club, Таганрог</Link>
              </li> */}
          </ul>
        </li>
        <li className="footer-menu__item">
          <Link to="#События" className="footer-menu__link">События</Link>

          <ul className="footer-submenu">
            <li className="footer-submenu__item">
              <Link to="tournaments#" className="footer-submenu__link">Финал ЧМ 2019</Link>
            </li>
            <li className="footer-submenu__item">
              <Link to="tournaments" className="footer-submenu__link">Праздничная трансляция</Link>
            </li>
          </ul>
        </li>
        <li className="footer-menu__item">
          <Link to="#Поддержать" className="footer-menu__link">Поддержать</Link>
        </li>
        <li className="footer-menu__item">
          <Link to="#Игроки" className="footer-menu__link">Игроки</Link>
        </li>
        <li className="footer-menu__item">
          <Link to="#Клубы" className="footer-menu__link">Клубы</Link>
        </li>
        <li className="footer-menu__item">
          <Link to="#vk" className="footer-menu__social"><svg width="35" height="21"><use xlinkHref="img/icons.svg#vk" /></svg></Link>
          <Link to="#telegram" className="footer-menu__social"><svg width="29" height="26"><use xlinkHref="img/icons.svg#telegram" /></svg></Link>
          <Link to="#youtube" className="footer-menu__social"><svg width="32" height="21"><use xlinkHref="img/icons.svg#youtube" /></svg></Link>
          <Link to="#intagram" className="footer-menu__social"><svg width="26" height="26"><use xlinkHref="img/icons.svg#instagram" /></svg></Link>
        </li>
      </ul>
    </div>
  </footer>
);
export default memo(Footer);
