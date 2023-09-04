/**
 * Отрисовывает HTML-шаблон в заданный контейнер.
 *
 * @param {Element} container DOM-элемент, в который будет отрисован шаблон.
 * @param {string|string[]} template HTML-шаблон для вставки. Может быть массивом шаблонов.
 * @param {string} [place=`beforeend`] Позиция вставки (соответствует параметрам метода `Element.insertAdjacentHTML`).
 *                                     По умолчанию "beforeend". Может принимать значение: "afterbegin".
 */
export const render = (container, template, place = `beforeend`) => {
  if (Array.isArray(template)) {
    template.forEach((element) => {
      container.insertAdjacentHTML(place, element);
    });
    return;
  }
  container.insertAdjacentHTML(place, template);
};
