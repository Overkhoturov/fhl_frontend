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
};
