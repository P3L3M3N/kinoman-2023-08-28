import {rankThreshold} from './constants.js';

/**
 * Генерирует ранг пользователя на основе количества просмотренных фильмов.
 *
 * @param {number} watchedMoviesCount - Количество просмотренных фильмов.
 * @return {string} Ранг пользователя.
 */
export const getUserRank = (watchedMoviesCount) => {
  for (let i = 0; i < rankThreshold.breakpoints.length; i++) {
    if (watchedMoviesCount <= rankThreshold.breakpoints[i]) {

      return rankThreshold.names[i];
    }
  }

  return rankThreshold.names[rankThreshold.names.length - 1];
};

/**
 * Создает DOM-элемент на основе переданного шаблона.
 *
 * @param {string} template - Шаблон, на основе которого создается DOM-элемент.
 * @return {Node} - Возвращает созданный DOM-элемент.
 */
export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

/**
 * Отрисовывает элемент в контейнере на указанном месте.
 *
 * @param {Element} container - Контейнер, в который добавляется элемент.
 * @param {Element} element - Элемент, который нужно добавить в контейнер.
 * @param {string} [place='beforeend'] - Место в контейнере, куда добавить элемент. По умолчанию 'beforeend'.
 */
export const render = (container, element, place = `beforeend`) => {
  switch (place) {
    case `afterbegin`:
      container.prepend(element);
      break;
    case `beforeend`:
      container.append(element);
      break;
  }
};

/**
 * Отрисовывает HTML-шаблон в заданный контейнер.
 *
 * @param {Element} container - DOM-элемент, в который будет отрисован шаблон.
 * @param {string|string[]} template - HTML-шаблон для вставки. Может быть массивом шаблонов.
 * @param {string} [place=beforeend] - Позиция вставки (по умолчанию "beforeend").
 */
export const renderTemplate = (container, template, place = `beforeend`) => {
  if (Array.isArray(template)) {
    template.forEach((element) => {
      container.insertAdjacentHTML(place, element);
    });
  } else {
    container.insertAdjacentHTML(place, template);
  }
};

/**
 * Обрабатывает событие нажатия клавиши Escape.
 *
 * @param {Event} evt - Событие.
 * @param {Function} action - Действие для выполнения.
 * @return {void}
 */
export const onEscKeyDown = (evt, action) => onKeyDown(evt, action, `Escape`, `Esc`);

/**
 * Общий обработчик нажатия клавиш.
 *
 * @param {Event} evt - Событие.
 * @param {Function} action - Функция, которая будет вызвана при срабатывании события.
 * @param {...string} keys - Клавиши, на которые нужно реагировать.
 * @return {void}
 */
export const onKeyDown = (evt, action, ...keys) => {
  if (keys.includes(evt.key)) {
    action();
  }
};

/**
 * Инициализация всплывающего окна.
 * При вызове этой функции всплывающее окно может быть закрыто
 * либо кликом по кнопке закрытия, либо нажатием клавиши Esc.
 *
 * @param {string} popupSelector - CSS-селектор всплывающего окна.
 * @param {string} closeButtonSelector - CSS-селектор кнопки закрытия внутри всплывающего окна.
 */
export const initPopup = (popupSelector, closeButtonSelector) => {
  const popupElement = document.querySelector(popupSelector);
  const closePopupButton = popupElement.querySelector(closeButtonSelector);
  const closePopup = () => popupElement.remove();
  const onEscClick = (evt) => onEscKeyDown(evt, closePopup);
  window.addEventListener(`keydown`, onEscClick);
  closePopupButton.addEventListener(`click`, () => {
    closePopup();
    window.removeEventListener(`keydown`, onEscClick);
  });
};

/**
 * Возвращает случайное целое число между min и max (включительно).
 *
 * @param {number} min - Минимальное значение.
 * @param {number} max - Максимальное значение.
 * @return {number} Случайное целое число.
 */
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Возвращаетслучайное число с плавающей точкой между min и max.
 *
 * @param {number} min - Минимальное значение.
 * @param {number} max - Максимальное значение.
 * @param {number} [precision=1] - Количество знаков после запятой.
 * @return {number} Случайное число с плавающей точкой.
 */
export const getRandomFloat = (min, max, precision = 1) => parseFloat((Math.random() * (max - min) + min).toFixed(precision));

/**
 * Возвращает случайный элемент массива.
 *
 * @param {Array} array - Массив, из которого нужно выбрать элемент.
 * @return {*} Случайный элемент массива.
 */
export const getRandomElement = (array) => array[getRandomInt(0, array.length - 1)];

/**
 * Генерирует случайную дату между заданными датами.
 *
 * @param {Date} [startDateTime] - Начальная дата для генерации. По умолчанию это текущая дата минус 2 недели.
 * @param {Date} [endDateTime] - Конечная дата для генерации. По умолчанию это текущая дата.
 * @return {Date} Случайная дата между заданными датами.
 */
export const getRandomDate = (
    startDateTime = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
    endDateTime = new Date()
) => {

  return new Date(getRandomInt(startDateTime.getTime(), endDateTime.getTime()));
};

/**
 * Возвращает отформатированную строку даты и времени.
 *
 * @param {Date} date - Объект даты для форматирования.
 * @param {String} [format='DD MM YYYY HH:mm'] - Строка формата даты и времени по умолчанию.
 * @return {String} Отформатированная строка даты.
 */
export const getFormattedDate = (date, format = `DD MM YYYY HH:mm`) => {
  const day = String(date.getDate()).padStart(2, `0`);
  const month = String(date.getMonth() + 1).padStart(2, `0`);
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, `0`);
  const minutes = String(date.getMinutes()).padStart(2, `0`);
  const longMonth = date.toLocaleString(`en-US`, {month: `long`});

  return format
    .replace(`DD`, day)
    .replace(`MM`, month)
    .replace(`YYYY`, year)
    .replace(`HH`, hours)
    .replace(`mm`, minutes)
    .replace(`Month`, longMonth);
};

/**
 * Возвращает перемешанный массив на основе исходного.
 *
 * @param {Array} array - Исходный массив.
 * @return {Array} Перемешанный массив.
 */
export const toShuffledArray = (array) => [...array].sort(() => Math.random() - 0.5);

/**
 * Возвращает случайный подмассив из заданного массива с заданным максимальным количеством элементов.
 *
 * @param {Array} array - Исходный массив.
 * @param {number} n - Максимальное количество элементов в подмассиве.
 * @return {Array} Подмассив, состоящий из случайных элементов исходного массива.
 */
export const getRandomShuffledSubarray = (array, n) => {
  const shuffled = toShuffledArray(array);
  const arrayLength = getRandomInt(1, n);

  return shuffled.slice(0, arrayLength);
};

/**
 * Форматирует продолжительность в минутах в строку формата "Xh Ym".
 *
 * @param {number} durationMinutes - Продолжительность в минутах.
 * @return {string} Отформатированная строка с продолжительностью.
 */
export const getFormatDuration = (durationMinutes) => {
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;

  return `${hours ? `${hours}h` : ``} ${minutes}m`;
};
