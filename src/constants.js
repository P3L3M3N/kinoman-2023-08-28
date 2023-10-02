/**
* @fileOverview Модуль констант.
* Для определения логики отображения и работы с пользовательским интерфейсом.
*/

/**
* Количество карточек, отображаемых в разделе "All movies. Upcoming".
* При нажатии на кнопку "Show More" показывается дополнительно ITEMS_PER_PAGE карточек.
* @constant {number}
*/
export const ITEMS_PER_PAGE = 5;

/**
* Количество карточек, отображаемых в дополнительных разделах "Top rated" и "Most commented".
* @constant {number}
*/
export const ITEMS_PER_EXTRA_BLOCKS = 2;

/**
* Объект, хранящий доступные эмодзи для сайта.
* @typedef {Object} Emojis
* @property {string} SMILE - Эмодзи улыбки.
* @property {string} SLEEPING - Эмодзи сна.
* @property {string} PUKE - Эмодзи рвоты.
* @property {string} ANGRY - Эмодзи злости.
*/
export const Emojis = {
  SMILE: `smile`,
  SLEEPING: `sleeping`,
  PUKE: `puke`,
  ANGRY: `angry`
};

/**
 * Объект с пороговыми значениями и названиями рангов для определения ранга пользователя.
 * @type {{breakpoints: number[], names: string[]}}
 */
export const rankThreshold = {
  breakpoints: [0, 10, 20],
  names: [``, `Novice`, `Fan`, `Movie Buff`]
};

