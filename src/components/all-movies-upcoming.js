export const createAllMoviesSectionTemplate = () => {
  return (/* html */
    `<section class="films"></section>`
  );
};

export const createUpcomingMoviesListTemplate = () => {
  return (/* html */
    `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </section>`
  );
};

export const createExtraMoviesListTemplate = (title) => {
  return (/* html */
    `<section class="films-list--extra">
      <h2 class="films-list__title">${title}</h2>
    </section>`
  );
};

export const createFilmListContainerTemplate = () => {
  return (/* html */
    `<div class="films-list__container"></div>
  `);
};

export const createLoadMoreButtonTemplate = () => {
  return (/* html */
    `<button class="films-list__show-more">Show more</button>`
  );
};
