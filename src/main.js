import {render} from './components/utils.js';
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
// Отключено: попап с информацией о фильме не рендерится в текущей версии.
// Для включения раскомментируйте следующую строку.
// import {createMovieInformationTemplate} from './components/movie-info-popap.js';

const UPCOMING_MOVIES_CARD_COUNT = 5;
const TOP_RATED_MOVIES_CARD_COUNT = 2;
const MOST_COMMENTED_MOVIES_CARD_COUNT = 2;
const FOOTER_MOVIES_COUNT = 130291;

const siteBodyElement = document.querySelector(`body`);
const siteHeaderElement = siteBodyElement.querySelector(`.header`);
const siteMainElement = siteBodyElement.querySelector(`.main`);
const siteFooterElement = siteBodyElement.querySelector(`.footer`);

render(siteHeaderElement, createUserRankTemplate());
render(siteMainElement, [createMenuTemplate(), createSortListTemplate(), createUpcomingMoviesTemplate()]);

const moviesBlockElement = siteMainElement.querySelector(`.films`);
const moviesListElement = moviesBlockElement.querySelector(`.films-list`);
const moviesContainerElement = moviesListElement.querySelector(`.films-list__container`);

render(moviesContainerElement, new Array(UPCOMING_MOVIES_CARD_COUNT).fill(``).map(createMovieCardTemplate));
render(moviesListElement, createButtonShowMoreTemplate());

const topRatedTemplate = createExtraMoviesTemplate(`Top rated`);
const mostCommentedTemplate = createExtraMoviesTemplate(`Most commented`);

render(moviesBlockElement, [topRatedTemplate, mostCommentedTemplate]);

const topRatedContainer = moviesBlockElement.querySelectorAll(`.films-list--extra`)[0].querySelector(`.films-list__container`);
const mostCommentedContainer = moviesBlockElement.querySelectorAll(`.films-list--extra`)[1].querySelector(`.films-list__container`);

render(topRatedContainer, new Array(TOP_RATED_MOVIES_CARD_COUNT).fill(``).map(createMovieCardTemplate));
render(mostCommentedContainer, new Array(MOST_COMMENTED_MOVIES_CARD_COUNT).fill(``).map(createMovieCardTemplate));

const footerStatisticElement = siteFooterElement.querySelector(`.footer__statistics`);

render(footerStatisticElement, createFooterStatisticTemplate(FOOTER_MOVIES_COUNT));
// Отключено: попап с информацией о фильме не рендерится в текущей версии.
// Для включения раскомментируйте следующую строку.
// render(siteBodyElement, createMovieInformationTemplate());
