import {createMovieCardTemplate} from "./movie-card.js";
import {movieCardsData} from '../mock-data/movie-card-data.js';
import {renderTemplate} from '../utils.js';
import {attachMovieCardEvents} from "../interface-logic/movie-card-events.js";
import {ITEMS_PER_PAGE} from '../constants.js';

const createAllMoviesSectionTemplate = (moviesCardsList) => {
  return (/* html */
    `<section class="films">${moviesCardsList}</section>`
  );
};

const createUpcomingMoviesListTemplate = (movieCard) => {
  return (/* html */
    `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container">${movieCard}</div>
      <button class="films-list__show-more">Show more</button>
    </section>`
  );
};

export const renderUpcomingMoviesContent = (moviesCardsSection, moviesCards) => {
  let shownMoviesCardsCount = 0;

  const showMoreCards = (moviesCardsListContainer) => {
    const nextMovieCards = moviesCards.slice(shownMoviesCardsCount, shownMoviesCardsCount + ITEMS_PER_PAGE);
    const moviesCardsTemplate = nextMovieCards.map(createMovieCardTemplate).join(``);
    renderTemplate(moviesCardsListContainer, moviesCardsTemplate);

    attachMovieCardEvents(moviesCardsListContainer, movieCardsData, shownMoviesCardsCount, shownMoviesCardsCount + nextMovieCards.length);
    shownMoviesCardsCount += nextMovieCards.length;

    if (shownMoviesCardsCount >= moviesCards.length) {
      showMoreButton.style.display = `none`;
    }
  };

  renderTemplate(moviesCardsSection, createAllMoviesSectionTemplate(createUpcomingMoviesListTemplate(``)));

  const moviesCardsList = moviesCardsSection.lastElementChild;
  const moviesCardsListContainer = moviesCardsList.querySelector(`.films-list__container`);
  const showMoreButton = moviesCardsList.querySelector(`.films-list__show-more`);

  moviesCardsList.addEventListener(`click`, (evt) => {
    if (evt.target === showMoreButton) {
      showMoreCards(moviesCardsListContainer);
    }
  });

  showMoreCards(moviesCardsListContainer);
};
