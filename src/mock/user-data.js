export const generateUserRank = (watchedMoviesCount) => {
  if (watchedMoviesCount === 0) {
    return ``;
  } else if (watchedMoviesCount <= 10) {
    return `Novice`;
  } else if (watchedMoviesCount <= 20) {
    return `Fan`;
  } else {
    return `Movie Buff`;
  }
};

export const generateIsWatched = () => {
  return Math.random() > 0.8;
};

export const generateWatchedMoviesCount = () => {
  let watchedMoviesCount = 0;
  for (let i = 0; i < 100; i++) {
    if (generateIsWatched()) {
      watchedMoviesCount++;
    }
  }
  return watchedMoviesCount;
};

export const watchedMoviesCount = generateWatchedMoviesCount();
