export const createUserProfileTemplate = ({
  avatar,
  rank
}) => {
  let optionalRank = `<p class="profile__rating">${rank}</p>`;

  if (rank === ``) {
    optionalRank = ``;
  }

  return (/* html */
    `<section class="header__profile profile">
      ${optionalRank}
      <img class="profile__avatar" src="./images/${avatar}" alt="Avatar" width="35" height="35">
    </section>`
  );
};
