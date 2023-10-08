import {createElement} from "../utils";

export default class SortButton {
  constructor(button, isActive) {
    this._button = button;
    this._isActive = isActive;
    this._element = null;
  }

  getTemplate() {
    return (/* html */
      `<li><a href="#" class="sort__button ${this._isActive ? `sort__button--active` : ``}">${this._button.name}</a></li>`
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
