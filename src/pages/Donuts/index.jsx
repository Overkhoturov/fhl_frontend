import React from 'react';

import Header from '../../components/Header';

import './index.css';

export default (() => {
  const danatPeople = [
    { name: 'Алексей', foto: 'user.svg' },
    { name: 'Лиза', foto: 'user.svg' },
    { name: 'Степан', foto: 'user.svg' },
    { name: 'Николай', foto: 'user.svg' },
    { name: 'Николай', foto: 'user.svg' },
    { name: 'Эмилия', foto: 'user.svg' },
    { name: 'Алексей', foto: 'user.svg' },
    { name: 'Стас', foto: 'user.svg' },
    { name: 'Алексей', foto: 'user.svg' },
    { name: 'Евгения', foto: 'user.svg' },
  ];

  return (
    <>
      <Header />
      <div classNameName="danate-service">
        <div className="container">
          <h1 className="title-line">
            ПОДДЕРЖАТЬ ПРОЕКТ
          </h1>
          <p className="title-line__description">
            Мы проводим турниры, трансляции, тренировки,
            и просто встречи единомышленников по League of Legends.
            Если вам нравится наша деятельность, вы можете поддержать нас через VK Donut.
          </p>
          <p className="danate-service__btn">
            Поддержать
          </p>
        </div>
      </div>

      <div className="container">
        <h2 className="title-line">
          ДОНЫ НАШЕГО СООБЩЕСТВА
        </h2>
        <div className="danate-cards">
          {danatPeople.foreach((el) => {
            <div className="danate-card">
              <img className="danate-card__image" alt="" />
              <p className="danate-card__title">
                {el.name}
              </p>
            </div>;
          })}
        </div>
      </div>
    </>
  );
});
