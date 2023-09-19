/**
* @fileOverview Модуль констант.
* Для определения логики отображения и работы с пользовательским интерфейсом.
*/

/**
* Количество карточек, отображаемых в разделе "Upcoming movies".
* При нажатии на кнопку "Show More" показывается дополнительно ITEMS_PER_PAGE карточек.
* @constant {number}
*/
export const ITEMS_PER_PAGE = 5;

/**
* Количество карточек, отображаемых в дополнительных блоках 'Top rated' и "Most commented".
* @constant {number}
*/
export const ITEMS_PER_EXTRA_BLOCKS = 2;

/**
* Объект, хранящий доступные эмодзи для сайта.
* @typedef {Object} Emojis
* @property {string} Smile - Эмодзи улыбки.
* @property {string} Sleeping - Эмодзи сна.
* @property {string} Puke - Эмодзи рвоты.
* @property {string} Angry - Эмодзи злости.
*/
export const Emojis = {
  Smile: `smile`,
  Sleeping: `sleeping`,
  Puke: `puke`,
  Angry: `angry`,
};
