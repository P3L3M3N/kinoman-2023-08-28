export const menuItemCategories = [{
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

const createMenuItemTemplate = (item, isActive, count) => {
  return (/* html */
    `<a href="#${item.anchor}" class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">
      ${item.name} ${count !== null ? `<span class="main-navigation__item-count">${count}</span>` : ``}
    </a>`
  );
};

export const createMenuTemplate = (itemsCount, activeItemType = `all`) => {
  const menuItems = [];

  for (const item of menuItemCategories) {
    const isActive = item.type === activeItemType;
    const count = itemsCount[item.type];
    menuItems.push(createMenuItemTemplate(item, isActive, count));
  }

  return (/* html */
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${menuItems.join(``)}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};
