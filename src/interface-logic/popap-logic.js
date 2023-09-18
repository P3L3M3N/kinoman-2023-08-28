import {onEscKeyDown} from '../utils.js';

/**
 * Инициализация всплывающего окна
 * @param {Element} siteBodyElement - DOM-элемент, в котором нужно искать всплывающее окно
 * @param {string} popupSelector - CSS-селектор для поиска всплывающего окна
 * @param {string} closeButtonSelector - CSS-селектор для поиска кнопки закрытия всплывающего окна
 * @param {Function} closePopupCallback - коллбек-функция, которая будет вызвана при закрытии всплывающего окна
 */
export const initPopup = (siteBodyElement, popupSelector, closeButtonSelector, closePopupCallback) => {
  const closePopup = () => {
    const popupElement = siteBodyElement.querySelector(popupSelector);
    if (popupElement) {
      popupElement.remove();
      siteBodyElement.removeEventListener(`keydown`, onEscKeyDown);
      if (typeof closePopupCallback === `function`) {
        closePopupCallback();
      }
    }
  };

  /**
 * Закрывает всплывающее окно при клике на кнопку закрытия.
 *
 * @param {Event} evt - Объект события клика.
 */
  const closePopupOnClick = (evt) => {
    if (evt.target.matches(closeButtonSelector)) {
      closePopup();
    }
  };

  siteBodyElement.addEventListener(`keydown`, (evt) => onEscKeyDown(evt, closePopup));
  siteBodyElement.addEventListener(`click`, closePopupOnClick);
};


