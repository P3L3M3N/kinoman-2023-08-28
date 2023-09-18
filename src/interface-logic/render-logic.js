import {createMovieCardPopapTemplate} from '../components/movie-card-popap.js';
import {createMovieCommentsTemplate} from '../components/movie-coment.js';

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
* Вставляет комментарии в заданный контейнер.
*
* @param {Element} container - DOM-элемент, в который будут вставлены комментарии.
* @param {Object[]} comments - Массив комментариев для вставки.
*/
const insertComments = (container, comments) => {
  if (container) {
    container.insertAdjacentHTML(`beforeend`, comments.map(createMovieCommentsTemplate).join(``));
  }
};

/**
* Присоединяет события к элементу карточки фильма.
*
* @param {Element} element - DOM-элемент, к которому будут присоединены события.
* @param {Object} movieCard - Объект с информацией о фильме.
*/
const attachMovieCardEvents = (element, movieCard) => {
  element.addEventListener(`click`, () => {
    document.body.insertAdjacentHTML(`beforeend`, createMovieCardPopapTemplate(movieCard));
    const commentsListElement = document.body.querySelector(`.film-details__comments-list`);
    insertComments(commentsListElement, movieCard.comments);
  });
};

/**
* Динамическая отрисовка шаблона и присоединение событий к последнему добавленному элементу.
*
* @param {Element} container - DOM-элемент, в который будет отрисован шаблон.
* @param {string|string[]} template - HTML-шаблон для вставки.
* @param {Object} movieCard - Объект с информацией о фильме.
*/
export const renderDynamic = (container, template, movieCard) => {
  renderTemplate(container, template);
  if (movieCard) {
    const lastAddedElement = container.lastElementChild;
    attachMovieCardEvents(lastAddedElement, movieCard);
  }
};
