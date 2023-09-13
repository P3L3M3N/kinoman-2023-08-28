import {
  formatDate
} from '../utils.js';

export const createMovieInfoCommentsTemplate = ({
  emoji,
  message,
  author,
  date
}) => {
  return (/* html */
    `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji-${emoji}">
    </span>
    <div>
      <p class="film-details__comment-text">${message}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${author}</span>
        <span class="film-details__comment-day">${formatDate(date, {day: true, month: true, year: true})}</td></span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`
  );
};
