import { render } from './utils/utils.js';
import { createUserRankTmplate } from './layout/user-rank.js';
import { createMenuTmplate } from './layout/menu.js';
import { createSortListTmplate } from './layout/sort-list.js';
import { createUpcomingMoviesTmplate, createMovieCardTemplate, createВuttonShowMoreTemplate } from './layout/upcoming-movies.js'

const UPCOMING_MOVIES_CARD_COUNT = 5;

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, createUserRankTmplate());
render(siteMainElement, createMenuTmplate());
render(siteMainElement, createSortListTmplate());
render(siteMainElement, createUpcomingMoviesTmplate());

const moviesBlockElement = siteMainElement.querySelector(`.films`);
const moviesListElement = moviesBlockElement.querySelector(`.films-list`);
const moviesContainerElement = moviesListElement.querySelector(`.films-list__container`);

render(moviesContainerElement, createMovieCardTemplate (), UPCOMING_MOVIES_CARD_COUNT);
render(moviesListElement, createВuttonShowMoreTemplate ());
