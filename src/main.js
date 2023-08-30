import { render } from './utils/utils.js';
import { createUserRankTmplate } from './layout/user-rank.js';
import { createMenuTmplate } from './layout/menu.js';
import { createSortListTmplate } from './layout/sort-list.js';
import { createUpcomingMoviesTmplate } from './layout/upcoming-movies.js'

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, createUserRankTmplate());
render(siteMainElement, createMenuTmplate());
render(siteMainElement, createSortListTmplate());
render(siteMainElement, createUpcomingMoviesTmplate());
