import {
  getRandomElement,
  getUserRank
} from "../utils.js";
import {
  userAvatar,
  getWatchCount
} from "../mock-data/user-profile-data.js";

/**
* Генерирует профиль пользователя.
*
* @param {number} watchedMoviesCount - Количество просмотренных фильмов.
* @return {Object} Профиль пользователя, включая аватар и ранг.
*/
const generateUserProfile = (watchedMoviesCount) => {
  return {
    avatar: getRandomElement(userAvatar),
    rank: getUserRank(watchedMoviesCount),
  };
};

/**
* Данные профиля пользователя, сгенерированные на основе количества просмотренных фильмов.
* @type {Object}
*/
export const userProfileData = generateUserProfile(getWatchCount());
