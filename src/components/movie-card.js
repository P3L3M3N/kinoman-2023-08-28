import {
  getFormatDuration
} from '../utils.js';


export const MAX_DESCRIPTION_LENGTH = 140;

export const createMovieCardTemplate = ({
  title,
  rating,
  releaseDate,
  duration,
  mainGenre,
  posterLink,
  description,
  comments
}) => {

  return (/* html */
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${releaseDate.getFullYear()}</span>
        <span class="film-card__duration">${getFormatDuration(duration)}</span>
        <span class="film-card__genre">${mainGenre}</span>
      </p>
      <img src="./images/posters/${posterLink}" alt="" class="film-card__poster">
      <p class="film-card__description">${description.join(` `).length > MAX_DESCRIPTION_LENGTH ? `${description.join(` `).slice(0, MAX_DESCRIPTION_LENGTH)}...` : description.join(` `)}</p>
      <a class="film-card__comments">${comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};
