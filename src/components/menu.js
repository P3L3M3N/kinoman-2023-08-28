import {createElement} from "../utils";
import MenuItem from "./menu-item";

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
export default class Menu {
  constructor(menuData, activeItemType = `all`) {
    this._menuData = menuData;
    this._activeItemType = activeItemType;
    this._element = null;
  }

  getTemplate() {
    const menuItems = menuItemCategories.map((item) => {
      const isActive = item.type === this._activeItemType;
      const count = this._menuData[item.type];
      const menuItem = new MenuItem(item, isActive, count);
      return menuItem.getTemplate();
    });

    return (/* html */
      `<nav class="main-navigation">
        <div class="main-navigation__items">
          ${menuItems.join(``)}
        </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
      </nav>`
    );
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

