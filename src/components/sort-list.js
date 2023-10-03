export const sortCategories = [{
  type: `default`,
  name: `Sort by default`
}, {
  type: `date`,
  name: `Sort by date`
}, {
  type: `rating`,
  name: `Sort by rating`
}];

const createSortButtonTemplate = (button, isActive) => {
  return (/* html */
    `<li><a href="#" class="sort__button ${isActive ? `sort__button--active` : ``}">${button.name}</a></li>`
  );
};

export const createSortListTemplate = (sortType = `default`) => {
  const sortButtons = [];

  for (const button of sortCategories) {
    const isActive = button.type === sortType;
    sortButtons.push(createSortButtonTemplate(button, isActive));
  }

  return (/* html */
    `<ul class="sort">
      ${sortButtons.join(``)}
    </ul>`
  );
};
