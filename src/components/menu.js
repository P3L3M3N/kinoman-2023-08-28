import {movieCardsData} from '../mock-data/movie-card-data.js';

export const menuItemsStaticData = [{
  type: `all`,
  anchor: `all`,
  name: `All movies`
}, {
  type: `watchlist`,
  anchor: `watchlist`,
  name: `Watchlist`
}, {
  type: `history`,
  anchor: `history`,
  name: `History`
}, {
  type: `favorites`,
  anchor: `favorites`,
  name: `Favorites`
}];

export const menuItemsDynamicData = {
  itemCounts: {
    all: movieCardsData.length,
    watchlist: 13,
    history: 4,
    favorites: 8
  },
  activeItemType: `all`
};

const createMenuItemTemplate = (item, isActive, count) => {
  return (/* html */
    `<a href="#${item.anchor}" class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">
      ${item.name} ${count !== null ? `<span class="main-navigation__item-count">${count}</span>` : ``}
    </a>`
  );
};

export const createMenuTemplate = (staticData, dynamicData) => {
  const menuItems = [];

  for (const item of staticData) {
    const isActive = item.type === dynamicData.activeItemType;
    const count = dynamicData.itemCounts[item.anchor];
    menuItems.push(createMenuItemTemplate(item, isActive, count));
  }

  const menuItemsTemplate = menuItems.join(``);

  return (/* html */
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${menuItemsTemplate}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};
