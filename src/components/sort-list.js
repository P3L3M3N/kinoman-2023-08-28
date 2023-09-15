const createSortButtonTemplate = ({
  sortType,
  isActive
}) => {
  return (/* html */
    `<li><a href="#" class="sort__button ${isActive ? `sort__button--active` : ``}">${sortType}</a></li>`
  );
};

export const createSortListTemplate = () => {
  const sortButtons = sortOptions.map(createSortButtonTemplate).join(``);
  return (/* html */
    `<ul class="sort">
      ${sortButtons}
    </ul>`
  );
};

const sortOptions = [{
  sortType: `Sort by default`,
  isActive: true
}, {
  sortType: `Sort by date`,
  isActive: false
}, {
  sortType: `Sort by rating`,
  isActive: false
}];
