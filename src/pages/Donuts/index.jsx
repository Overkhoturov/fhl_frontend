import React, { memo } from 'react';

import Header from '../../components/Header';

import './index.css';

export default memo(() => {
  const danatPeople = [
    { id: 1, name: 'Алексей', foto: 'Alexey_1.jpg' },
    { id: 2, name: 'Лиза', foto: 'Liza.jpg' },
    { id: 3, name: 'Степан', foto: 'Stepan.jpg' },
    { id: 4, name: 'Николай', foto: 'Nikolai_1.jpg' },
    { id: 5, name: 'Николай', foto: 'Nilokai_2.jpg' },
    { id: 6, name: 'Эмилия', foto: 'Emilia.jpg' },
    { id: 7, name: 'Алексей', foto: 'Alexey_2.jpg' },
    { id: 8, name: 'Стас', foto: 'Stas.jpg' },
    { id: 9, name: 'Алексей', foto: 'Alexey_3.jpg' },
    { id: 10, name: 'Евгения', foto: 'Eugenia.jpg' },
  ];

  return (
    <>
      <Header isShowNavigation />
      <div className="danate-service">
        <div className="container">
          <h1 className="title-line">
            ПОДДЕРЖАТЬ ПРОЕКТ
          </h1>
          <p className="title-line__description">
            Мы проводим турниры, трансляции, тренировки,
            и просто встречи единомышленников по League of Legends.
            Если вам нравится наша деятельность, вы можете поддержать нас через VK Donut.
          </p>
          <a className="danate-service__btn" href="https://vk.com/firehorn?source=description&w=donut_payment-186885826">
            Поддержать
          </a>
        </div>
      </div>
      <div className="container">
        <h2 className="title-line">
          ДОНЫ НАШЕГО СООБЩЕСТВА
        </h2>
        <div className="danate-cards">
          {danatPeople.map((el) => (
            <div key={el.id} className="danate-card">
              <img className="danate-card__image" alt="" style={{ backgroundImage: `url(../../assets/img/${el.foto})` }} />
              <p className="danate-card__title">
                {el.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
