import {getRandomInt} from "../utils.js";
import {MAX_WATCHED_MOVIES} from '../constants.js';

export const userAvatar = [`bitmap@2x.png`];

export const getWatchCount = () => getRandomInt(0, MAX_WATCHED_MOVIES);
