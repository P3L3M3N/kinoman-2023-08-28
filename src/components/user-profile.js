import {Ranks} from "../mock/user-profile-data.js";

export const createUserProfileTemplate = ({
  avatar,
  rank
}) => {
  let rankTemplate = ``;
  if (rank !== Ranks.NONE) {
    rankTemplate = `<p class="profile__rating">${rank}</p>`;
  }

  return (/* html */
    `<section class="header__profile profile">
      ${rankTemplate}
      <img class="profile__avatar" src="./images/${avatar}" alt="Avatar" width="35" height="35">
    </section>`
  );
};
