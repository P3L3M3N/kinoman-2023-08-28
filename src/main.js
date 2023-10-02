import {
  render,
  renderTemplate
} from './utils.js';
import {createUserProfileTemplate} from './components/user-profile.js';
import {userProfileData} from './mock-data/user-profile-data';
import {createMenuTemplate} from './components/menu.js';
import {menuData} from './mock-data/menu-data.js';
import {createSortListTemplate} from './components/sort-list.js';
import {createFooterStatisticTemplate} from './components/footer-statistic.js';
import {getFilmsSection} from "./interface-logic/render-movies-section";
import {movieCardsData} from './mock-data/movie-card-data.js';

export const siteBodyElement = document.querySelector(`body`);
export const siteHeaderElement = document.querySelector(`.header`);
export const siteMainElement = document.querySelector(`.main`);
export const siteFooterElement = document.querySelector(`.footer`);

renderTemplate(siteHeaderElement, createUserProfileTemplate(userProfileData));

renderTemplate(siteMainElement, [
  createMenuTemplate(menuData),
  createSortListTemplate()
]);
render(siteMainElement, getFilmsSection(movieCardsData));

renderTemplate(siteFooterElement, createFooterStatisticTemplate(movieCardsData.length));
