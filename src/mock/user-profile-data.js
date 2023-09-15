import {getRandomElement, getRandomInt} from "../utils.js";
const MAX_WATCHED_MOVIES = 25;
const RANK_NOVICE_THRESHOLD = 10;
const RANK_FAN_THRESHOLD = 20;

const userAvatar = [`bitmap@2x.png`];

export const Ranks = {
  NONE: ``,
  NOVICE: `Novice`,
  FAN: `Fan`,
  MOVIE_BUFF: `Movie Buff`,
};

export const getWatchCount = () => getRandomInt(0, MAX_WATCHED_MOVIES);

export const generateUserRank = (watchedMoviesCount) => {
  if (watchedMoviesCount === 0) {
    return Ranks.NONE;
  }
  if (watchedMoviesCount <= RANK_NOVICE_THRESHOLD) {
    return Ranks.NOVICE;
  }
  if (watchedMoviesCount <= RANK_FAN_THRESHOLD) {
    return Ranks.FAN;
  }
  return Ranks.MOVIE_BUFF;
};

export const generateUserProfile = (watchedMoviesCount) => {
  return {
    avatar: getRandomElement(userAvatar),
    rank: generateUserRank(watchedMoviesCount),
  };
};
