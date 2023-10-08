import {createElement} from "../utils.js";
import SortButton from "./sort-button.js";

export const sortCategories = [{
  type: `default`,
  name: `Sort by default`
}, {
  type: `date`,
  name: `Sort by date`
}, {
  type: `rating`,
  name: `Sort by rating`
}];

export default class SortList {
  constructor(sortType = `default`) {
    this._sortType = sortType;
    this._element = null;
    this._buttons = sortCategories.map((button) => {
      const isActive = button.type === this._sortType;
      return new SortButton(button, isActive);
    });
  }

  getTemplate() {
    const sortButtons = this._buttons.map((button) => button.getTemplate());

    return (/* html */
      `<ul class="sort">
        ${sortButtons.join(``)}
      </ul>`
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

