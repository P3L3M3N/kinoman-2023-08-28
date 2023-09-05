import {render} from './utils/utils.js';
import {createUserRankTemplate} from './layout/user-rank.js';
import {createMenuTemplate} from './layout/menu.js';
import {createSortListTemplate} from './layout/sort-list.js';
import {
  createUpcomingMoviesTemplate,
  createMovieCardTemplate,
  createButtonShowMoreTemplate
} from './layout/upcoming-movies.js';
import {createExtraMoviesTemplate} from './layout/extra-movies.js';

const UPCOMING_MOVIES_CARD_COUNT = 5;
const TOP_RATED_MOVIES_CARD_COUNT = 2;
const MOST_COMMENTED_MOVIES_CARD_COUNT = 2;

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);


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
