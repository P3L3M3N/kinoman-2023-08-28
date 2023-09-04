const createMenuItemTemplate = (name, count, isActive) => {
  return (/* html */
    `<a href="#${name.toLowerCase()}" class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">
      ${name} ${count !== null ? `<span class="main-navigation__item-count">${count}</span>` : ``}
    </a>`
  );
};

export const createMenuTemplate = () => {

  const menuItems = [
    {name: `All movies`, count: null, isActive: true},
    {name: `Watchlist`, count: 13, isActive: false},
    {name: `History`, count: 4, isActive: false},
    {name: `Favorites`, count: 8, isActive: false}
  ];

  const menuItemsTemplate = menuItems
    .map((item) => createMenuItemTemplate(item.name, item.count, item.isActive))
    .join(``);

  return (/* html */
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${menuItemsTemplate}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};
