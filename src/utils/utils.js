export const render = (container, template, place = `beforeend`) => {
  if (Array.isArray(template)) {
    template.forEach((element) => {
      container.insertAdjacentHTML(place, element);
    });
    return;
  }
  container.insertAdjacentHTML(place, template);
};
