import {createMovieCardPopupTemplate} from "../components/movie-card-popup.js";
import {createMovieCommentsTemplate} from '../components/movie-coment.js';
import {siteBodyElement} from "../main.js";
import {renderTemplate, initPopup} from "../utils.js";

/**
 * Добавляет обработчики событий к карточкам фильмов.
 * При клике на карточку открывается попап с детальной информацией о фильме и комментариями.
 *
 * @param {Element} moviesCardContainer - Контейнер, содержащий все карточки фильмов.
 * @param {Array} moviesCardArray - Массив объектов с данными о фильмах.
 */
export const attachMovieCardEvents = (moviesCardContainer, moviesCardArray) => {
  moviesCardContainer.addEventListener(`click`, (evt) => {
    const clickedMovieCard = evt.target.closest(`.film-card`);
    if (!clickedMovieCard) {
      return;
    }
    const clickedMovieIndex = Array.from(moviesCardContainer.querySelectorAll(`.film-card`)).indexOf(clickedMovieCard);
    const clickedMovieData = moviesCardArray[clickedMovieIndex];
    if (!clickedMovieData) {
      return;
    }
    renderTemplate(siteBodyElement, createMovieCardPopupTemplate(clickedMovieData));
    initPopup(siteBodyElement, `.film-details`, `.film-details__close-btn`);
    const popupCommentsContainer = siteBodyElement.querySelector(`.film-details__comments-list`);
    if (Array.isArray(clickedMovieData.comments)) {
      popupCommentsContainer.replaceChildren();
      renderTemplate(popupCommentsContainer, clickedMovieData.comments.map(createMovieCommentsTemplate).join(``));
    }
  });
};
