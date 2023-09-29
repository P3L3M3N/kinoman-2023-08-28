import {createMovieCardTemplate} from "./movie-card.js";
import {renderTemplate} from '../utils.js';
import {attachMovieCardEvents} from "../interface-logic/movie-card-events.js";
import {ITEMS_PER_EXTRA_BLOCKS} from "../constants.js";

const createExtraMoviesListTemplate = (title, movieCard) => {
  return (/* html */
    `<section class="films-list--extra">
      <h2 class="films-list__title">${title}</h2>
      <div class="films-list__container">${movieCard}</div>
    </section>`
  );
};

export const renderExtraMoviesContent = (moviesCardsContainer, moviesCardsData) => {
  const moviesCardsSection = moviesCardsContainer.querySelector(`.films`);

  const initExtraMoviesBlock = (title, filterCriteria, sortCriteria) => {
    const filteredMoviesCards = moviesCardsData
    .filter(filterCriteria)
    .sort(sortCriteria)
    .slice(0, ITEMS_PER_EXTRA_BLOCKS);

    if (filteredMoviesCards.length) {
      const moviesCardsTemplate = filteredMoviesCards.map(createMovieCardTemplate).join(``);
      renderTemplate(moviesCardsSection, createExtraMoviesListTemplate(title, moviesCardsTemplate));

      const moviesCardsListContainer = moviesCardsSection.lastElementChild.querySelector(`.films-list__container`);
      attachMovieCardEvents(moviesCardsListContainer, filteredMoviesCards);
    }
  };

  initExtraMoviesBlock(
      `Top rated`,
      (movieCard) => movieCard.rating > 0,
      (a, b) => b.rating - a.rating
  );

  initExtraMoviesBlock(
      `Most commented`,
      (movieCard) => movieCard.comments.length > 0,
      (a, b) => b.comments.length - a.comments.length
  );
};
