/**
 * Отрисовывает HTML-шаблон в заданный DOM-контейнер указанное количество раз.
 *
 * @param {HTMLElement} container - DOM-элемент, в который будет отрисован шаблон.
 * @param {string} template - HTML-шаблон в виде строки для отрисовки.
 * @param {number} [count=1] - Количество раз, которое шаблон должен быть отрисован.
 * @param {InsertPosition} [place='beforeend'] - Позиция внутри контейнера, где будет отрисован шаблон. Может принимать одно из следующих значений: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'.
 */
export const render = (container, template, count = 1, place = 'beforeend') => {
  for (let i = 0; i < count; i++) {
    container.insertAdjacentHTML(place, template);
  }
};
