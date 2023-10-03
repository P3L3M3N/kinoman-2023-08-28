export const createFooterStatisticTemplate = (movieCount) => {
  return (/* html */
    `<section class="footer__logo logo logo--smaller">Cinemaddict</section>
    <section class="footer__statistics">
      <p>${movieCount} movies inside</p>
    </section>`
  );
};
