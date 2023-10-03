import {Emojis} from '../constants.js';
import {
  getRandomInt,
  getRandomElement,
  getRandomDate,
} from '../utils.js';

const movieCommentMessages = [
  `So confusing, I was trying to keep up with the plot.`,
  `Captivating story and excellent performances`,
  `Yawn-inducing from start to finish`,
  `The pacing was absolutely perfect`,
  `Why did this need to be so long?`,
  `Such a waste of talented actors`,
  `Feels outdated and irrelevant`,
  `A timeless classic for sure`,
  `A visual masterpiece!`,
  `Not my cup of tea`
];

const movieCommentAuthors = [
  `Cinephile42`,
  `MovieBuff1995`,
  `ScreenQueen`,
  `FilmFanatic`,
  `PopcornLover`,
  `SilverScreenAddict`,
  `ReelLifeCritic`
];

const generatePopapComments = () => {

  return {
    emoji: getRandomElement(Object.values(Emojis)),
    message: getRandomElement(movieCommentMessages),
    author: getRandomElement(movieCommentAuthors),
    date: getRandomDate(new Date(2022, 0, 1), new Date())
  };
};


export const generateCommentsArray = () => Array.from({length: getRandomInt(0, 5)}, generatePopapComments);
