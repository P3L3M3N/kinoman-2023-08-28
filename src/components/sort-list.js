export const sortButtonStaticData = [{
  type: `default`,
  name: `Sort by default`
}, {
  type: `date`,
  name: `Sort by date`
}, {
  type: `rating`,
  name: `Sort by rating`
}];

export const sortButtonDynamicData = {
  activeButtonType: `date`
};

const createSortButtonTemplate = (button, isActive) => {
  return (/* html */
    `<li><a href="#" class="sort__button ${isActive ? `sort__button--active` : ``}">${button.name}</a></li>`
  );
};

export const createSortListTemplate = (staticData, dynamicData) => {
  const sortButtons = [];

  for (const button of staticData) {
    const isActive = button.type === dynamicData.activeButtonType;
    sortButtons.push(createSortButtonTemplate(button, isActive));
  }

  const sortButtonsTemplate = sortButtons.join(``);

  return (/* html */
    `<ul class="sort">
      ${sortButtonsTemplate}
    </ul>`
  );
};
