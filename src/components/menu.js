const createMenuItemTemplate = ({
  anchor,
  name,
  isActive,
  count
}) => {
  return (/* html */
    `<a href="#${anchor}" class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">
    ${name}
    ${count !== null ? `<span class="main-navigation__item-count">${count}</span>` : ``}
    </a>`
  );
};

const itemElements = [{
  anchor: `all`,
  name: `All movies`,
  isActive: true,
  count: null
}, {
  anchor: `watchlist`,
  name: `Watchlist`,
  isActive: false,
  count: 13
}, {
  anchor: `history`,
  name: `History`,
  isActive: false,
  count: 4
}, {
  anchor: `favorites`,
  name: `Favorites`,
  isActive: false,
  count: 8
}];

export const createMenuTemplate = () => {
  const menuItems = itemElements.map(createMenuItemTemplate).join(``);
  return (/* html */
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${menuItems}
      </div>
      <a href="#stats" class="main-navigation__additional"> Stats </a>
    </nav>`
  );
};
