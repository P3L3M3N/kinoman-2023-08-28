import {createMovieCardTemplate} from "../components/movie-card";
import {
  ITEMS_PER_EXTRA_BLOCKS,
  ITEMS_PER_PAGE
} from "../constants";
import {
  createAllMoviesSectionTemplate,
  createExtraMoviesListTemplate,
  createFilmListContainerTemplate,
  createLoadMoreButtonTemplate,
  createUpcomingMoviesListTemplate
} from "../components/all-movies-upcoming";
import {
  createElement,
  render
} from "../utils";

/**
 * Создает и возвращает раздел с предстоящими фильмами "All movies. Upcoming".
 * После показа всех карточек с фильмами, кнопка «Show more» исчезает.
 * @param {Array} moviesCardsData - массив данных о фильмах
 * @return {Element} - DOM-элемент раздела с предстоящими фильмами
 */
export const getUpcomingMoviesSection = (moviesCardsData) => {
  const showMoreButton = createElement(createLoadMoreButtonTemplate());
  const moviesCards = moviesCardsData.map((card) => createElement(createMovieCardTemplate(card)));
  const moviesListContainer = createElement(createFilmListContainerTemplate());
  const upcomingMoviesSection = createElement(createUpcomingMoviesListTemplate());

  let cardsRendered = 0;
  const renderMoviesCards = () => {
    moviesCards.slice(cardsRendered, cardsRendered + ITEMS_PER_PAGE).forEach((card) => render(moviesListContainer, card));
    cardsRendered += ITEMS_PER_PAGE;
  };

  showMoreButton.addEventListener(`click`, () => {
    renderMoviesCards();
    if (moviesCards.length <= cardsRendered) {
      showMoreButton.remove();
    }
  });

  renderMoviesCards();
  render(upcomingMoviesSection, moviesListContainer);
  if (moviesCards.length > cardsRendered) {
    render(upcomingMoviesSection, showMoreButton);
  }
  return upcomingMoviesSection;
};

/**
 * Создает и возвращает дополнительный раздел "Top rated", имеющими наивысший рейтинг.
 * @param {Array} moviesCardsData - массив данных о фильмах
 * @return {Element} - DOM-элемент раздела с фильмами с наивысшим рейтингом
 */
export const getTopRatedMoviesCardsSection = (moviesCardsData) => {
  const topRatedMoviesCardsData = moviesCardsData.filter((movieCard) => movieCard.rating > 0).sort((a, b) => b.rating - a.rating).slice(0, ITEMS_PER_EXTRA_BLOCKS);
  const moviesCards = topRatedMoviesCardsData.map((card) => createElement(createMovieCardTemplate(card)));
  const moviesListContainer = createElement(createFilmListContainerTemplate());
  const topRatedMovesSection = createElement(createExtraMoviesListTemplate(`Top rated`));

  moviesCards.forEach((card) => render(moviesListContainer, card));
  render(topRatedMovesSection, moviesListContainer);
  return topRatedMovesSection;
};

/**
 * Создает и возвращает дополнительный раздел  "Most commented", имеющими наибольшее количество комментариев.
 * @param {Array} moviesCardsData - массив данных о фильмах
 * @return {Element} - DOM-элемент раздела с фильмами с наибольшим количеством комментариев
 */
export const getMostCommentedMoviesCardsSection = (moviesCardsData) => {
  const mostCommentedMoviesCardsData = moviesCardsData.filter((movieCard) => movieCard.comments.length > 0).sort((a, b) => b.comments.length - a.comments.length).slice(0, ITEMS_PER_EXTRA_BLOCKS);
  const moviesCards = mostCommentedMoviesCardsData.map((card) => createElement(createMovieCardTemplate(card)));
  const moviesListContainer = createElement(createFilmListContainerTemplate());
  const topRatedMovesSection = createElement(createExtraMoviesListTemplate(`Most commented`));

  moviesCards.forEach((card) => render(moviesListContainer, card));
  render(topRatedMovesSection, moviesListContainer);
  return topRatedMovesSection;
};

/**
 * Создает секцию с карточеми фильмов, включающий в себя три раздела:
 * "All movies. Upcoming", "Top rated" и "Most commented".
 * Все эти разделы отрисовываются непосредственно в секцию с карточками фильмов.
 *
 * @param {Array} moviesCardsData - Массив объектов, содержащий информацию о фильмах.
 * @return {Element} - Возвращает DOM-элемент секции, в которой расположены карточки фильмов из трех разделов.
 */

export const getFilmsSection = (moviesCardsData) => {
  const allMoviesSection = createElement(createAllMoviesSectionTemplate());

  render(allMoviesSection, getUpcomingMoviesSection(moviesCardsData));
  render(allMoviesSection, getTopRatedMoviesCardsSection(moviesCardsData));
  render(allMoviesSection, getMostCommentedMoviesCardsSection(moviesCardsData));
  return allMoviesSection;
};
