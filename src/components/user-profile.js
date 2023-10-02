export const createUserProfileTemplate = ({
  avatar,
  rank
}) => {

  return (/* html */
    `<section class="header__profile profile">
      ${rank ? `<p class="profile__rating">${rank}</p>` : ``}
      <img class="profile__avatar" src="./images/${avatar}" alt="Avatar" width="35" height="35">
    </section>`
  );
};
