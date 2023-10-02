import {getRandomElement, getRandomInt, getUserRank} from "../utils.js";

const MAX_WATCHED_MOVIES = 25;

export const userAvatar = [`bitmap@2x.png`];

export const getWatchCount = () => getRandomInt(0, MAX_WATCHED_MOVIES);

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
