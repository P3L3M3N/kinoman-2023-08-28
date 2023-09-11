import {createUserRankTemplate} from './components/user-rank.js';
import {createMenuTemplate} from './components/menu.js';
import {createSortListTemplate} from './components/sort-list.js';
import {
  createUpcomingMoviesTemplate,
  createButtonShowMoreTemplate
} from './components/upcoming-movies.js';
import {createMovieCardTemplate} from './components/movie-card.js';
import {createExtraMoviesTemplate} from './components/extra-movies.js';
import {createFooterStatisticTemplate} from './components/footer-statistic.js';
import {
  createMovieInformationTemplate,
  createMovieInfoCommentsTemplate
} from './components/movie-info-popap.js';
import {movieCardsData} from './mock/movie-card-data.js';

const UPCOMING_MOVIES_CARD_COUNT = 5;
const TOP_RATED_MOVIES_CARD_COUNT = 2;
const MOST_COMMENTED_MOVIES_CARD_COUNT = 2;
const FOOTER_MOVIES_COUNT = 130291;

const siteBodyElement = document.querySelector(`body`);
const siteHeaderElement = siteBodyElement.querySelector(`.header`);
const siteMainElement = siteBodyElement.querySelector(`.main`);
const siteFooterElement = siteBodyElement.querySelector(`.footer`);

/**
 * Отрисовывает HTML-шаблон в заданный контейнер.
 * Если передан объект movieCardInfo, добавляет обработчик событий для показа подробной информации о фильме.
 *
 * @param {Element} container DOM-элемент, в который будет отрисован шаблон.
 * @param {string|string[]} template HTML-шаблон или массив шаблонов для вставки.
 * @param {Object|null} [movieCardInfo=null] Информация о карточке фильма для обработки событий (необязательный параметр).
 * @param {string} [place=`beforeend`] Позиция вставки (соответствует параметрам метода `Element.insertAdjacentHTML`).
 *                                     По умолчанию "beforeend". Может принимать значение: "afterbegin".
 */
const render = (container, template, movieCardInfo = null, place = `beforeend`) => {
  if (Array.isArray(template)) {
    template.forEach((element) => {
      container.insertAdjacentHTML(place, element);
    });
  } else {
    container.insertAdjacentHTML(place, template);
  }

  if (movieCardInfo) {
    const lastAddedCard = container.lastElementChild;
    lastAddedCard.addEventListener(`click`, () => {
      const movieCardDetails = createMovieInformationTemplate(movieCardInfo);
      siteBodyElement.insertAdjacentHTML(`beforeend`, movieCardDetails);

      const comments = movieCardInfo.comments;
      const renderedComments = comments.map(createMovieInfoCommentsTemplate).join(`\n`);
      const commentsListElement = document.querySelector(`.film-details__comments-list`);
      if (commentsListElement) {
        commentsListElement.insertAdjacentHTML(`beforeend`, renderedComments);
      }
    });
  }
};

render(siteHeaderElement, createUserRankTemplate());
render(siteMainElement, [createMenuTemplate(), createSortListTemplate(), createUpcomingMoviesTemplate()]);

const moviesBlockElement = siteMainElement.querySelector(`.films`);
const moviesListElement = moviesBlockElement.querySelector(`.films-list`);
const moviesContainerElement = moviesListElement.querySelector(`.films-list__container`);

movieCardsData.slice(0, UPCOMING_MOVIES_CARD_COUNT).forEach((movieCardInfo) => {
  render(moviesContainerElement, createMovieCardTemplate(movieCardInfo), movieCardInfo);
});

render(moviesListElement, createButtonShowMoreTemplate());

const topRatedTemplate = createExtraMoviesTemplate(`Top rated`);
const mostCommentedTemplate = createExtraMoviesTemplate(`Most commented`);
render(moviesBlockElement, [topRatedTemplate, mostCommentedTemplate]);

const [topRatedContainer, mostCommentedContainer] = moviesBlockElement.querySelectorAll(`.films-list--extra .films-list__container`);

const topRatedMovies = movieCardsData.sort((a, b) => b.rating - a.rating).slice(0, TOP_RATED_MOVIES_CARD_COUNT);
topRatedMovies.forEach((movieCardInfo) => {
  render(topRatedContainer, createMovieCardTemplate(movieCardInfo), movieCardInfo);
});

const mostCommentedMovies = movieCardsData.sort((a, b) => b.comments.length - a.comments.length).slice(0, MOST_COMMENTED_MOVIES_CARD_COUNT);
mostCommentedMovies.forEach((movieCardInfo) => {
  render(mostCommentedContainer, createMovieCardTemplate(movieCardInfo), movieCardInfo);
});

const footerStatisticElement = siteFooterElement.querySelector(`.footer__statistics`);
render(footerStatisticElement, createFooterStatisticTemplate(FOOTER_MOVIES_COUNT));

siteBodyElement.addEventListener(`click`, (event) => {
  if (event.target.matches(`.film-details__close-btn`)) {
    document.querySelector(`.film-details`).remove();
  }
});

