import {getRandomElement} from "../utils.js";
import {
  userAvatar,
  getWatchCount
} from "../mock-data/user-profile-data.js";
import {
  RANK_NOVICE_THRESHOLD,
  RANK_FAN_THRESHOLD
} from '../constants.js';


export const UserRanks = {
  NONE: null,
  NOVICE: `Novice`,
  FAN: `Fan`,
  MOVIE_BUFF: `Movie Buff`,
};

/**
 * Генерирует ранг пользователя на основе количества просмотренных фильмов.
 *
 * @param {number} watchedMoviesCount - Количество просмотренных фильмов.
 * @return {string} Ранг пользователя.
 */
const generateUserRank = (watchedMoviesCount) => {
  if (watchedMoviesCount === 0) {
    return UserRanks.NONE;
  }
  if (watchedMoviesCount <= RANK_NOVICE_THRESHOLD) {
    return UserRanks.NOVICE;
  }
  if (watchedMoviesCount <= RANK_FAN_THRESHOLD) {
    return UserRanks.FAN;
  }
  return UserRanks.MOVIE_BUFF;
};

/**
 * Генерирует профиль пользователя.
 *
 * @param {number} watchedMoviesCount - Количество просмотренных фильмов.
 * @return {Object} Профиль пользователя, включая аватар и ранг.
 */
const generateUserProfile = (watchedMoviesCount) => {
  return {
    avatar: getRandomElement(userAvatar),
    rank: generateUserRank(watchedMoviesCount),
  };
};
/**
 * Данные профиля пользователя, сгенерированные на основе количества просмотренных фильмов.
 * @type {Object}
 */
export const userProfileData = generateUserProfile(getWatchCount());
