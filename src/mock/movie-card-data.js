import {
  getRandomInt,
  getRandomFloat,
  getRandomElement,
  getRandomArray,
  getRandomDate,
} from '../utils.js';
import {generatePopapComment} from './movie-comment-data.js';

const START_MOVIE_YEAR = 1930;

const movieTitles = [
  `Made for Each`,
  `Popeye Meets`,
  `Sagebrush Trail`,
  `Santa Claus`,
  `Dance of Life`,
  `Great Flamarion`,
  `Golden Arm`
];

const moviePosters = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const movieAgeLimits = [
  `0+`,
  `6+`,
  `12+`,
  `16+`,
  `18+`
];

const movieDirectors = [
  `Steven Spielberg`,
  `Martin Scorsese`,
  `Quentin Tarantino`,
  `Christopher Nolan`,
  `James Cameron`,
  `Francis Ford Coppola`,
  `Clint Eastwood`
];

const movieWriters = [
  `Aaron Sorkin`,
  `William Goldman`,
  `Charlie Kaufman`,
  `Quentin Tarantino`,
  `Woody Allen`,
  `Joel Coen`,
  `Ethan Coen`,
  `Nora Ephron`,
  `Paul Thomas Anderson`,
  `Oliver Stone`,
  `John Hughes`,
  `David Mamet`,
  `Paddy Chayefsky`,
  `Robert Towne`,
  `Billy Wilder`
];
const movieActors = [
  `Robert De Niro`,
  `Meryl Streep`,
  `Tom Hanks`,
  `Denzel Washington`,
  `Leonardo DiCaprio`,
  `Cate Blanchett`,
  `Morgan Freeman`,
  `Natalie Portman`,
  `Brad Pitt`,
  `Julianne Moore`,
  `Johnny Depp`,
  `Kate Winslet`,
  `Joaquin Phoenix`,
  `Nicole Kidman`,
  `Christian Bale`
];

const movieCountries = [
  `USA`,
  `Canada`,
  `Russia`,
  `Australia`,
  `Germany`,
  `France`
];

const movieGenres = [
  `Drama`,
  `Comedy`,
  `Action`,
  `Thriller`,
  `Horror`,
  `Adventure`,
  `Fantasy`,
  `Western`
];

const movieOtherGenres = [
  `Documentary`,
  `Biography`,
  `Animation`,
  `Musical`,
  `Western`,
  `Mystery`,
  `Romance`,
  `Sci-Fi`,
  `War`,
];

const movieDescriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.`,
  `Eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  `Et tortor at risus viverra adipiscing at in tellus integer.`,
  `Nisi porta lorem mollis aliquam ut porttitor leo a.`,
  `Dictumst quisque sagittis purus sit amet volutpat.`,
  `Id velit ut tortor pretium viverra suspendisse.`,
  `Neque sodales ut etiam sit amet nisl purus.`,
  `Netus et malesuada fames ac.`
];

const generateMovieCard = () => {
  const generatedDate = getRandomDate(START_MOVIE_YEAR, new Date());
  const fullDescription = getRandomArray(movieDescriptions, 5).join(` `);
  const limitedDescription = fullDescription.length > 140 ? fullDescription.slice(0, 139) + `…` : fullDescription;

  return {
    title: getRandomElement(movieTitles),
    poster: `./images/posters/${getRandomElement(moviePosters)}`,
    ageLimit: getRandomElement(movieAgeLimits),
    rating: getRandomFloat(0, 10),
    director: getRandomElement(movieDirectors),
    writers: getRandomArray(movieWriters, 3).join(`, `),
    actors: getRandomArray(movieActors, 3).join(`, `),
    releaseDate: generatedDate,
    duration: `${getRandomInt(1, 2)}h ${getRandomInt(0, 59)}m`,
    country: getRandomElement(movieCountries),
    genre: getRandomElement(movieGenres),
    otherGenre: getRandomArray(movieOtherGenres, 2).join(`, `),
    description: limitedDescription,
    fullDescription,
    comments: Array.from({length: getRandomInt(0, 5)}, generatePopapComment)
  };
};

export const movieCardsData = Array.from({length: getRandomInt(15, 20)}, generateMovieCard);

