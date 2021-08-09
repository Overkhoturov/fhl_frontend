export default {
  // routes
  HOME: '/',
  TOURNAMENTS: '/tournaments',
  EVENTS: '/events',
  DONATES: '/donates',
  CLUBS: '/clubs',
  PLAYERS: '/players',
  PROFILE: '/profile',
  REGISTRATION: '/registration',
  FORGOT: '/forgot',
  RESET_PASSWORD: '/reset-password',
  CONFIRM_EMAIL: '/auth/confirm',

  SERVER: process.env.REACT_APP_SERVER,
  ROLES: {
    TOP: 'Топ',
    JUNGLE: 'Лес',
    MID: 'Мид',
    BOT: 'Бот',
    SUPPORT: 'Саппорт',
  },

  RANKS: {
    IRON: ['IRON', 'Железо'],
    BRONZE: ['BRONZE', 'Бронза'],
    SILVER: ['SILVER', 'Серебро'],
    GOLD: ['GOLD', 'Золото'],
    PLATINUM: ['PLATINUM', 'Платина'],
    DIAMOND: ['DIAMOND', 'Алмаз'],
    MASTER: ['MASTER', 'Мастер'],
    GRANDMASTER: ['GRANDMASTER', 'Грандмастер'],
    CHALLENGER: ['CHALLENGER', 'Претендент'],
  },

  DIVISIONS: {
    4: [4, 'IV'],
    3: [3, 'III'],
    2: [2, 'II'],
    1: [1, 'I'],
  },

  TOURNAMENTS_TABS: [
    { text: 'сетка', name: 'challonge_link' },
    { text: 'составы', name: 'teams' },
    { text: 'регламент', name: 'regulations' },
    { text: 'фотогалерея', name: 'photos' },
  ],
};
