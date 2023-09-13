/**
 * Создаёт HTML-шаблон для пункта меню.
 *
 * @param {string} name - Название пункта меню.
 * @param {?number} [count=null] - Количество элементов, связанных с пунктом меню (null, если пкнкт не имеет элементов).
 * @param {boolean} [isActive=false] - Указывает, активен ли пункт меню. По умолчанию "false".
 * @return {string} HTML-шаблон пункта меню.
 */
const createMenuItemTemplate = ({
  name,
  count = null,
  isActive = false
}) => {
  return (/* html */
    `<a href="#" class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">
      ${name} ${count !== null ? `<span class="main-navigation__item-count">${count}</span>` : ``}
    </a>`
  );
};

export const createMenuTemplate = () => {
  const menuItems = [
    {name: `All movies`, count: null, isActive: true},
    {name: `Watchlist`, count: 13},
    {name: `History`, count: 4},
    {name: `Favorites`, count: 8}
  ];

  const menuItemsTemplate = menuItems
    .map(createMenuItemTemplate)
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
