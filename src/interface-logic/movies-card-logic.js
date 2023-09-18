import {createExtraMoviesTemplate} from '../components/extra-movies-wrap.js';
import {createButtonShowMoreTemplate} from '../components/upcoming-movies-wrap.js';
import {
  UPCOMING_MOVIES_CARD_COUNT,
  EXTRA_MOVIES_CARD_COUNT,
  SHOW_MORE_COUNT
} from '../constants.js';

// Переменная для отслеживания текущего количества отображаемых карточек.
let currentShowCount = UPCOMING_MOVIES_CARD_COUNT;

// Функция для отображения первых 5 карточек в разделе "Upcoming movies".
export const initUpcomingMovieCards = (
    moviesContainer,
    movieCardsData,
    showElement,
    cardTemplate
) => {
  movieCardsData.slice(0, UPCOMING_MOVIES_CARD_COUNT).forEach((movieCardInfo) => {
    showElement(moviesContainer, cardTemplate(movieCardInfo), movieCardInfo);
  });
};

// Функция для динамического отображения дополнительных карточек при нажатии на кнопку "Show More".
const showMoreUpcomingMovies = (
    moviesContainer,
    movieCardsData,
    showElement,
    cardTemplate,
    showMoreButton
) => {
  // Выбираем следующие 5 карточек для отображения.
  const additionalMoviesCard = movieCardsData.slice(currentShowCount, currentShowCount + SHOW_MORE_COUNT);
  // Отображаем их.
  additionalMoviesCard.forEach((movieCardInfo) => {
    showElement(moviesContainer, cardTemplate(movieCardInfo), movieCardInfo);
  });
  // Обновляем счетчик текущего количества отображенных карточек.
  currentShowCount += SHOW_MORE_COUNT;
  // Проверяем, все ли карточки уже отображены.
  if (currentShowCount >= movieCardsData.length) {
    // Если все карточки отображены, удаляем кнопку "Show More".
    showMoreButton.remove();
  }
};

// Функция для инициализации кнопки "Show More" и установки обработчика события клика.
export const initShowMoreButton = (
    moviesList,
    moviesContainer,
    movieCardsData,
    showElement,
    cardTemplate
) => {
  // Вставляем кнопку "Show More" в DOM
  showElement(moviesList, createButtonShowMoreTemplate());
  // Находим кнопку в DOM.
  const showMoreButton = moviesList.querySelector(`.films-list__show-more`);
  // Если кнопка найдена, устанавливаем обработчик события клика.
  if (showMoreButton) {
    showMoreButton.addEventListener(`click`, () => {
      showMoreUpcomingMovies(moviesContainer, movieCardsData, showElement, cardTemplate, showMoreButton);
    });
  }
};
// Инициализирует дополнительные блоки для отображения фильмов в разделе "Extra movies".
export const initExtraMovieBlocks = (
    extraBlockElement,
    movieCardsData,
    showElement,
    cardTemplate
) => {
  // Вставляем шаблоны для дополнительных блоков раздела и находим контейнеры для них.
  showElement(extraBlockElement, [
    createExtraMoviesTemplate(`Top rated`),
    createExtraMoviesTemplate(`Most commented`)
  ]);

  const [topRatedContainer, mostCommentedContainer] = extraBlockElement.querySelectorAll(`.films-list--extra .films-list__container`);

  // Функция для отображения карточек в блоках "Top rated" и "Most commented".
  // Сортирует карточки по заданному критерию и добавляет первые "EXTRA_MOVIES_CARD_COUNT" в DOM.
  const displayExtraMoviesCards = (
      moviesContainer,
      sortCriteria
  ) => {
    [...movieCardsData]
      .sort(sortCriteria)
      .slice(0, EXTRA_MOVIES_CARD_COUNT)
      .forEach((selectedMovie) => showElement(moviesContainer, cardTemplate(selectedMovie), selectedMovie));
  };

  // Отображение карточек в блоке "Top rated", отсортированных по убыванию рейтинга
  displayExtraMoviesCards(topRatedContainer, (a, b) => b.rating - a.rating, EXTRA_MOVIES_CARD_COUNT);

  // Отображение карточек в блоке "Most commented", отсортированных по убыванию количества комментариев
  displayExtraMoviesCards(mostCommentedContainer, (a, b) => b.comments.length - a.comments.length, EXTRA_MOVIES_CARD_COUNT);
};
