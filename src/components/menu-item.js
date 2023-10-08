import {createElement} from "../utils";

export default class MenuItem {
  constructor(item, isActive, count) {
    this._item = item;
    this._isActive = isActive;
    this._count = count;
    this._element = null;
  }

  getTemplate() {
    return (/* html */
      `<a href="#${this._item.anchor}" class="main-navigation__item ${this._isActive ? `main-navigation__item--active` : ``}">
        ${this._item.name} ${this._count !== null ? `<span class="main-navigation__item-count">${this._count}</span>` : ``}
      </a>`
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
