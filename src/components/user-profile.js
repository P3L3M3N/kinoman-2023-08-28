import {createElement} from "../utils.js";

export default class UserProfile {
  constructor(userProfileData) {
    this._avatar = userProfileData.avatar;
    this._rank = userProfileData.rank;
    this._element = null;
  }

  getTemplate() {
    return (/* html */
      `<section class="header__profile profile">
        ${this._rank ? `<p class="profile__rating">${this._rank}</p>` : ``}
        <img class="profile__avatar" src="./images/${this._avatar}" alt="Avatar" width="35" height="35">
      </section>`
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
