import {createExtraMoviesTemplate} from '../components/extra-movies-wrap.js';
import {createButtonShowMoreTemplate} from '../components/upcoming-movies-wrap.js';

import {
  ITEMS_PER_PAGE,
  ITEMS_PER_EXTRA_BLOCKS
} from '../constants.js';

/**
* Переменная для отслеживания текущего количества отображаемых карточек.
* @type {number}
*/
let currentShowCount = ITEMS_PER_PAGE;

/**
* Инициализация первых карточек в разделе "Upcoming movies".
* @param {HTMLElement} moviesContainer - Контейнер для карточек фильмов.
* @param {Array} movieCardsData - Массив с данными карточек фильмов.
* @param {Function} showElement - Функция для отображения элементов.
* @param {Function} cardTemplate - Шаблон карточки фильма.
*/
export const initUpcomingMovieCards = (
    moviesContainer,
    movieCardsData,
    showElement,
    cardTemplate
) => {
  movieCardsData.slice(0, ITEMS_PER_PAGE).forEach((movieCardInfo) => {
    showElement(moviesContainer, cardTemplate(movieCardInfo), movieCardInfo);
  });
};

/**
* Отображение дополнительных карточек при нажатии на кнопку "Show More".
* @private
* @param {HTMLElement} moviesContainer - Контейнер для карточек фильмов.
* @param {Array} movieCardsData - Массив с данными карточек фильмов.
* @param {Function} showElement - Функция для отображения элементов.
* @param {Function} cardTemplate - Шаблон карточки фильма.
* @param {HTMLElement} showMoreButton - Кнопка "Show More".
*/
const showMoreUpcomingMovies = (
    moviesContainer,
    movieCardsData,
    showElement,
    cardTemplate,
    showMoreButton
) => {
  const additionalMoviesCard = movieCardsData.slice(currentShowCount, currentShowCount + ITEMS_PER_PAGE);
  additionalMoviesCard.forEach((movieCardInfo) => {
    showElement(moviesContainer, cardTemplate(movieCardInfo), movieCardInfo);
  });

  currentShowCount += ITEMS_PER_PAGE;

  if (currentShowCount >= movieCardsData.length) {
    showMoreButton.remove();
  }
};

/**
* Инициализация кнопки "Show More" и установка обработчика события.
* @param {HTMLElement} moviesList - Список карточек фильмов.
* @param {HTMLElement} moviesContainer - Контейнер для карточек фильмов.
* @param {Array} movieCardsData - Массив с данными карточек фильмов.
* @param {Function} showElement - Функция для отображения элементов.
* @param {Function} cardTemplate - Шаблон карточки фильма.
*/
export const initShowMoreButton = (
    moviesList,
    moviesContainer,
    movieCardsData,
    showElement,
    cardTemplate
) => {
  showElement(moviesList, createButtonShowMoreTemplate());
  const showMoreButton = moviesList.querySelector(`.films-list__show-more`);
  if (showMoreButton) {
    showMoreButton.addEventListener(`click`, () => {
      showMoreUpcomingMovies(moviesContainer, movieCardsData, showElement, cardTemplate, showMoreButton);
    });
  }
};

/**
* Инициализация дополнительных блоков для отображения фильмов в разделе "Extra movies".
* @param {HTMLElement} extraBlockElement - Элемент для дополнительных блоков.
* @param {Array} movieCardsData - Массив с данными карточек фильмов.
* @param {Function} showElement - Функция для отображения элементов.
* @param {Function} cardTemplate - Шаблон карточки фильма.
*/
export const initExtraMovieBlocks = (
    extraBlockElement,
    movieCardsData,
    showElement,
    cardTemplate
) => {
  showElement(extraBlockElement, [
    createExtraMoviesTemplate(`Top rated`),
    createExtraMoviesTemplate(`Most commented`)
  ]);

  const [topRatedContainer, mostCommentedContainer] = extraBlockElement.querySelectorAll(`.films-list--extra .films-list__container`);

  /**
  * Отображение карточек в дополнительных блоках, таких как "Top rated" и "Most commented".
  * @private
  * @param {HTMLElement} moviesContainer - Контейнер для карточек фильмов в дополнительных блоках.
  * @param {Function} sortCriteria - Функция для сортировки карточек фильмов.
  */
  const displayExtraMoviesCards = (
      moviesContainer,
      sortCriteria
  ) => {
    [...movieCardsData]
      .sort(sortCriteria)
      .slice(0, ITEMS_PER_EXTRA_BLOCKS)
      .forEach((selectedMovie) => showElement(moviesContainer, cardTemplate(selectedMovie), selectedMovie));
  };

  displayExtraMoviesCards(topRatedContainer, (a, b) => b.rating - a.rating, ITEMS_PER_EXTRA_BLOCKS);
  displayExtraMoviesCards(mostCommentedContainer, (a, b) => b.comments.length - a.comments.length, ITEMS_PER_EXTRA_BLOCKS);
};
