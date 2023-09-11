const createSortButtonTemplate = ({
  text,
  isActive = false
}) => {
  return (/* html */
    `<li>
      <a href="#" class="sort__button ${isActive ? `sort__button--active` : ``}">${text}</a>
    </li>`
  );
};

export const createSortListTemplate = () => {
  const sortButtons = [
    {text: `Sort by default`, isActive: true},
    {text: `Sort by date`},
    {text: `Sort by rating`}
  ];

  const sortButtonsTemplate = sortButtons
  .map((button) => createSortButtonTemplate(button))
  .join(`\n`);


  return (/* html */
    `<ul class="sort">
      ${sortButtonsTemplate}
    </ul>`
  );
};
