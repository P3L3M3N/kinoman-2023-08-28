import {getRandomInt} from "../utils.js";

const MAX_WATCHED_MOVIES = 25;

export const userAvatar = [`bitmap@2x.png`];

export const getWatchCount = () => getRandomInt(0, MAX_WATCHED_MOVIES);
