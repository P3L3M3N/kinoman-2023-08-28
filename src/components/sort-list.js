const createSortButtonTemplate = (text, isActive) => {
  return (/* html */
    `<li>
      <a href="#" class="sort__button ${isActive ? `sort__button--active` : ``}">${text}</a>
    </li>`
  );
};

export const createSortListTemplate = () => {
  const sortButtons = [
    {text: `Sort by default`, isActive: true},
    {text: `Sort by date`, isActive: false},
    {text: `Sort by rating`, isActive: false}
  ];

  const sortButtonsTemplate = sortButtons
    .map((button) => createSortButtonTemplate(button.text, button.isActive))
    .join(``);

  return (/* html */
    `<ul class="sort">
      ${sortButtonsTemplate}
    </ul>`
  );
};
