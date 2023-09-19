import {getRandomElement} from "../utils.js";
import {
  userAvatar,
  getWatchCount
} from "../mock-data/user-profile-data.js";

const RANK_THRESHOLD = [10, 20];
const RANK_NAMES = [null, `Novice`, `Fan`, `Movie Buff`];

/**
* Генерирует ранг пользователя на основе количества просмотренных фильмов.
*
* @param {number} watchedMoviesCount - Количество просмотренных фильмов.
* @return {string|null} Ранг пользователя.
*/
const generateUserRank = (watchedMoviesCount) => {
  if (watchedMoviesCount === 0) {
    return RANK_NAMES[0];
  }

  for (let i = 0; i < RANK_THRESHOLD.length; i++) {
    if (watchedMoviesCount <= RANK_THRESHOLD[i]) {
      return RANK_NAMES[i + 1];
    }
  }

  return RANK_NAMES[RANK_NAMES.length - 1];
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
