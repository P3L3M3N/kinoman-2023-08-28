export const createUpcomingMoviesTemplate = () => {
  return (/* html */
    `<section class="films">
        <section class="films-list">
          <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
          <div class="films-list__container">
          </div>
        </section>
      </section>`
  );
};

export const createButtonShowMoreTemplate = () => {
  return (/* html */
    `<button class="films-list__show-more">Show more</button>`
  );
};
