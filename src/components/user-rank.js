import {generateUserRank} from '../mock/user-data.js';

export const createUserRankTemplate = (watchedMoviesCount) => {
  const userRank = generateUserRank(watchedMoviesCount);

  if (!userRank) {
    return ``;
  }

  return (/* html */
    `<section class="header__profile profile">
      <p class="profile__rating">${userRank}</p>
      <img class="profile__avatar" src="./images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

