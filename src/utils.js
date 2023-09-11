
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
 * Возвращает случайный подмассив из заданного массива в виде строки.
 *
 * @param {Array} array - Массив, из которого нужно выбрать элементы.
 * @param {number} n - Максимальное количество элементов в подмассиве.
 * @return {string} Строка, состоящая из случайных элементов исходного массива.
 */
export const getRandomArray = (array, n) => {
  const shuffled = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const arrayLength = Math.floor(Math.random() * n) + 1;

  return shuffled.slice(0, arrayLength);
};

/**
 * Обработчик событий для клавиши "Escape"
 *
 * @param {KeyboardEvent} evt - Объект события клавиши.
 * @param {Function} action - Функция, которая будет вызвана при нажатии клавиши "Escape"
 */
export const onEscKeyDown = (evt, action) => {
  if (evt.key === `Escape` || evt.key === `Esc`) {
    action();
  }
};

