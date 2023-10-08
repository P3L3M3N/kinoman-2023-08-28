import {createElement} from "../utils.js";

export default class FooterStatistic {
  constructor(movieCount) {
    this._movieCount = movieCount;
    this._element = null;
  }

  getTemplate() {
    return /* html */`
      <section class="footer__statistics">
        <p>${this._movieCount} movies inside</p>
      </section>`;
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
