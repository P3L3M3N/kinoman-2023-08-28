import {createElement} from "../utils.js";

export default class FilmsSection {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return (/* html */
      `<section class="films"></section>`
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
