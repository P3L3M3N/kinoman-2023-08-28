import {render} from './utils.js';
import UserProfile from './components/user-profile.js';
import {userProfileData} from './mock-data/user-profile-data';
import Menu from './components/menu.js';
import {menuData} from './mock-data/menu-data.js';
import SortList from './components/sort-list.js';
import {getFilmsSection} from "./interface-logic/render-movies-section";
import {movieCardsData} from './mock-data/movie-card-data.js';
import FooterStatistic from './components/footer-statistic.js';

export const siteBodyElement = document.querySelector(`body`);
export const siteHeaderElement = document.querySelector(`.header`);
export const siteMainElement = document.querySelector(`.main`);
export const siteFooterElement = document.querySelector(`.footer`);

render(siteHeaderElement, new UserProfile(userProfileData).getElement());

render(siteMainElement, new Menu(menuData).getElement());
render(siteMainElement, new SortList().getElement());
render(siteMainElement, getFilmsSection(movieCardsData));

render(siteFooterElement, new FooterStatistic(movieCardsData.length).getElement());

