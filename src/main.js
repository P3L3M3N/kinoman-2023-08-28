import {render} from './utils/utils.js';
import {createUserRankTemplate} from './layout/user-rank.js';
import {createMenuTemplate} from './layout/menu.js';
import {createSortListTemplate} from './layout/sort-list.js';
import {
  createUpcomingMoviesTemplate,
  createMovieCardTemplate,
  createButtonShowMoreTemplate
} from './layout/upcoming-movies.js';

const UPCOMING_MOVIES_CARD_COUNT = 5;

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);


render(siteHeaderElement, createUserRankTemplate());
render(siteMainElement, createMenuTemplate());
render(siteMainElement, createSortListTemplate());
render(siteMainElement, createUpcomingMoviesTemplate());

const moviesBlockElement = siteMainElement.querySelector(`.films`);
const moviesListElement = moviesBlockElement.querySelector(`.films-list`);
const moviesContainerElement = moviesListElement.querySelector(`.films-list__container`);

render(moviesContainerElement, new Array(UPCOMING_MOVIES_CARD_COUNT).fill(``).map(createMovieCardTemplate));
render(moviesListElement, createButtonShowMoreTemplate());
