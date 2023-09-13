import {
  getRandomElement,
  getRandomDate,
} from '../utils.js';

const START_COMMENT_YEAR = 2022;

export const movieEmojis = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];

export const movieCommentMessages = [
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

export const movieCommentAuthors = [
  `Cinephile42`,
  `MovieBuff1995`,
  `ScreenQueen`,
  `FilmFanatic`,
  `PopcornLover`,
  `SilverScreenAddict`,
  `ReelLifeCritic`
];

export const generatePopapComment = () => {
  const generatedDate = getRandomDate(START_COMMENT_YEAR, new Date());

  return {
    emoji: getRandomElement(movieEmojis),
    message: getRandomElement(movieCommentMessages),
    author: getRandomElement(movieCommentAuthors),
    date: generatedDate
  };
};

