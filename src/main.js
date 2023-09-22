import {createUserProfileTemplate} from './components/user-profile.js';
import {
  createMenuTemplate,
  menuItemsStaticData,
  menuItemsDynamicData
} from './components/menu.js';
import {createSortListTemplate} from './components/sort-list.js';
import {createUpcomingMoviesTemplate} from './components/upcoming-movies-wrap.js';
import {createMovieCardTemplate} from './components/movie-card.js';
import {createFooterStatisticTemplate} from './components/footer-statistic.js';
import {initPopup} from './interface-logic/popap-logic.js';
import {userProfileData} from './interface-logic/user-profile-logic.js';
import {
  renderTemplate,
  renderDynamic
} from './interface-logic/render-logic.js';
import {
  initUpcomingMovieCards,
  initShowMoreButton,
  initExtraMovieBlocks
} from './interface-logic/movies-card-logic.js';
import {movieCardsData} from './mock-data/movie-card-data.js';

const siteBodyElement = document.querySelector(`body`);
const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);


renderTemplate(siteHeaderElement, createUserProfileTemplate(userProfileData));


renderTemplate(siteMainElement, [
  createMenuTemplate(menuItemsStaticData, menuItemsDynamicData),
  createSortListTemplate(),
  createUpcomingMoviesTemplate()
]);

// Получение DOM-элементов основной секции с карточками фильмов.
const moviesBlockElement = siteMainElement.querySelector(`.films`);
const moviesListElement = moviesBlockElement.querySelector(`.films-list`);
const moviesContainerElement = moviesListElement.querySelector(`.films-list__container`);

// Инициализация карточек фильмов и кнопки "Show more".
initUpcomingMovieCards(moviesContainerElement, movieCardsData, renderDynamic, createMovieCardTemplate);
initExtraMovieBlocks(moviesBlockElement, movieCardsData, renderDynamic, createMovieCardTemplate);
initShowMoreButton(moviesListElement, moviesContainerElement, movieCardsData, renderDynamic, createMovieCardTemplate);

// Инициализация всплывающего окна с деталями фильма.
initPopup(siteBodyElement, `.film-details`, `.film-details__close-btn`);


const footerStatisticElement = siteFooterElement.querySelector(`.footer__statistics`);
renderTemplate(footerStatisticElement, createFooterStatisticTemplate(movieCardsData.length));
