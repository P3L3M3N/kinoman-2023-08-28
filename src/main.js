import {renderTemplate} from './utils.js';
import {createUserProfileTemplate} from './components/user-profile.js';
import {userProfileData} from './interface-logic/user-profile-logic.js';
import {
  createMenuTemplate,
  menuItemsStaticData,
  menuItemsDynamicData
} from './components/menu.js';
import {
  createSortListTemplate,
  sortButtonStaticData,
  sortButtonDynamicData
} from './components/sort-list.js';
import {renderUpcomingMoviesContent} from './components/all-movies-upcoming.js';
import {renderExtraMoviesContent} from './components/extra-movies.js';
import {movieCardsData} from './mock-data/movie-card-data.js';
import {createFooterStatisticTemplate} from './components/footer-statistic.js';

export const siteBodyElement = document.querySelector(`body`);
export const siteHeaderElement = document.querySelector(`.header`);
export const siteMainElement = document.querySelector(`.main`);
export const siteFooterElement = document.querySelector(`.footer`);

renderTemplate(siteHeaderElement, createUserProfileTemplate(userProfileData));

renderTemplate(siteMainElement, [
  createMenuTemplate(menuItemsStaticData, menuItemsDynamicData),
  createSortListTemplate(sortButtonStaticData, sortButtonDynamicData)
]);
renderUpcomingMoviesContent(siteMainElement, movieCardsData);
renderExtraMoviesContent(siteMainElement, movieCardsData);

siteFooterElement.replaceChildren();
renderTemplate(siteFooterElement, createFooterStatisticTemplate(movieCardsData.length));


