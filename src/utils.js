const START_YEAR_DAY = 1;
const START_YEAR_MONTH = 0;
const RANDOM_SORT_THRESHOLD = 0.5;
const MIN_HOURS = 1;
const MINUTES_IN_HOUR = 60;

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
 * Генерирует случайную дату между заданными годами.
 *
 * @param {number} [startYear=new Date().getFullYear()] - Начальный год для генерации случайной даты.
 * @param {Date} [endDateTime=new Date()] - Конечная дата и время для генерации случайной даты.
 * @return {Date} Случайная дата между заданными годами.
 */
export const getRandomDate = (startYear = new Date().getFullYear(), endDateTime = new Date()) => {
  const start = new Date(startYear, START_YEAR_MONTH, START_YEAR_DAY);

  return new Date(start.getTime() + Math.random() * (endDateTime.getTime() - start.getTime()));
};

/**
 * Форматирует объект Date в строку в соответствии с заданным форматом.
 *
 * @param {Date} date - Объект Date, который нужно отформатировать.
 * @param {Object} formatOptions - Объект с параметрами форматирования.
 * @return {string} Отформатированная строка с датой.
 */
export const getFormatDate = (date, formatOptions) => assembleDate(date, formatOptions);

/**
 * Собирает отформатированную дату из объекта Date и опций форматирования.
 *
 * @param {Date} date - Объект Date, который нужно отформатировать.
 * @param {Object} options - Объект с параметрами форматирования.
 * @return {string} Отформатированная строка с датой.
 */
const assembleDate = (date, options) => {
  const assembledDate = [];

  if (options.day) {
    assembledDate.push(date.getDate());
  }

  if (options.month) {
    assembledDate.push(date.toLocaleString(`en-US`, {month: `long`}));
  }

  if (options.year) {
    assembledDate.push(date.getFullYear());
  }

  return assembledDate.join(` `);
};

/**
 * Возвращает перемешанный массив на основе исходного.
 *
 * @param {Array} array - Исходный массив.
 * @return {Array} Перемешанный массив.
 */
export const toShuffledArray = (array) => [...array].sort(() => Math.random() - RANDOM_SORT_THRESHOLD);

/**
 * Возвращает случайный подмассив из заданного массива с заданным максимальным количеством элементов.
 *
 * @param {Array} array - Исходный массив.
 * @param {number} n - Максимальное количество элементов в подмассиве.
 * @return {Array} Подмассив, состоящий из случайных элементов исходного массива.
 */
export const getRandomSubarray = (array, n) => {
  const shuffled = toShuffledArray(array);
  const arrayLength = getRandomInt(1, n);

  return shuffled.slice(0, arrayLength);
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
 * Форматирует продолжительность в минутах в строку формата "Xh Ym".
 *
 * @param {number} durationMinutes - Продолжительность в минутах.
 * @return {string} Отформатированная строка с продолжительностью.
 */
export const getFormatDuration = (durationMinutes) => {
  const hours = Math.max(MIN_HOURS, Math.floor(durationMinutes / MINUTES_IN_HOUR));
  const minutes = durationMinutes % MINUTES_IN_HOUR;

  return `${hours}h ${minutes}m`;
};
