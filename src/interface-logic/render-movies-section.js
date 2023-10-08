import {createMovieCardTemplate} from "../components/movie-card.js";
import FilmsSection from "../components/films-section.js";
import FilmsList from "../components/films-list.js";
import FilmsListExtra from "../components/films-list-extra.js";
import FilmsListContainer from "../components/films-list-container.js";
import ShowMoreButton from "../components/show-more-button.js";
import {
  createElement,
  render
} from "../utils.js";
import {
  ITEMS_PER_EXTRA_BLOCKS,
  ITEMS_PER_PAGE
} from "../constants.js";

/**
 * Создает и возвращает раздел с предстоящими фильмами "All movies. Upcoming".
 * После показа всех карточек с фильмами, кнопка «Show more» исчезает.
 * @param {Array} moviesCardsData - массив данных о фильмах
 * @return {Element} - DOM-элемент раздела с предстоящими фильмами
 */
export const getUpcomingMoviesBlock = (moviesCardsData) => {
  const showMoreButton = new ShowMoreButton().getElement();
  const moviesCards = moviesCardsData.map((card) => createElement(createMovieCardTemplate(card)));
  const filmCardWrap = new FilmsListContainer().getElement();
  const upcomingMoviesBlock = new FilmsList().getElement();

  let cardsRendered = 0;
  const renderMoviesCards = () => {
    moviesCards.slice(cardsRendered, cardsRendered + ITEMS_PER_PAGE).forEach((card) => render(filmCardWrap, card));
    cardsRendered += ITEMS_PER_PAGE;
  };

  showMoreButton.addEventListener(`click`, () => {
    renderMoviesCards();
    if (moviesCards.length <= cardsRendered) {
      showMoreButton.remove();
    }
  });

  renderMoviesCards();
  render(upcomingMoviesBlock, filmCardWrap);
  if (moviesCards.length > cardsRendered) {
    render(upcomingMoviesBlock, showMoreButton);
  }
  return upcomingMoviesBlock;
};
/**
 * Создает и возвращает дополнительный раздел "Top rated", имеющими наивысший рейтинг.
 * @param {Array} moviesCardsData - массив данных о фильмах
 * @return {Element} - DOM-элемент раздела с фильмами с наивысшим рейтингом
 */
export const getTopRatedMoviesBlock = (moviesCardsData) => {
  const topRatedMoviesCardsData = moviesCardsData.filter((movieCard) => movieCard.rating > 0).sort((a, b) => b.rating - a.rating).slice(0, ITEMS_PER_EXTRA_BLOCKS);
  const moviesCards = topRatedMoviesCardsData.map((card) => createElement(createMovieCardTemplate(card)));

  const filmCardWrap = new FilmsListContainer().getElement();
  const topRatedMoviesBlock = new FilmsListExtra(`Top rated`).getElement();

  moviesCards.forEach((card) => render(filmCardWrap, card));
  render(topRatedMoviesBlock, filmCardWrap);

  return topRatedMoviesBlock;
};

/**
 * Создает и возвращает дополнительный раздел  "Most commented", имеющими наибольшее количество комментариев.
 * @param {Array} moviesCardsData - массив данных о фильмах
 * @return {Element} - DOM-элемент раздела с фильмами с наибольшим количеством комментариев
 */
export const getMostCommentedMoviesBlock = (moviesCardsData) => {
  const mostCommentedMoviesData = moviesCardsData.filter((movieCard) => movieCard.comments.length > 0).sort((a, b) => b.comments.length - a.comments.length).slice(0, ITEMS_PER_EXTRA_BLOCKS);
  const moviesCards = mostCommentedMoviesData.map((card) => createElement(createMovieCardTemplate(card)));

  const filmCardWrap = new FilmsListContainer().getElement();
  const mostCommentedMoviesBlock = new FilmsListExtra(`Most commented`).getElement();

  moviesCards.forEach((card) => render(filmCardWrap, card));
  render(mostCommentedMoviesBlock, filmCardWrap);

  return mostCommentedMoviesBlock;
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
  const filmsSection = new FilmsSection().getElement();

  render(filmsSection, getUpcomingMoviesBlock(moviesCardsData));
  render(filmsSection, getTopRatedMoviesBlock(moviesCardsData));
  render(filmsSection, getMostCommentedMoviesBlock(moviesCardsData));

  return filmsSection;
};
