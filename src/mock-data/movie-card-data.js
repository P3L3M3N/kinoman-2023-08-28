import {
  getRandomInt,
  getRandomFloat,
  getRandomElement,
  getRandomShuffledSubarray,
  getRandomDate,
} from '../utils.js';
import {generateCommentsArray} from './movie-comment-data.js';

const movieTitles = [
  `Made for Each`,
  `Popeye Meets`,
  `Sagebrush Trail`,
  `Santa Claus`,
  `Dance of Life`,
  `Great Flamarion`,
  `Golden Arm`,
  `Sky Warriors`,
  `Lost Voyage`,
  `Moon Quest`
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
  0,
  6,
  12,
  16,
  18
];

const movieDirectors = [
  `Steven Spielberg`,
  `Martin Scorsese`,
  `Quentin Tarantino`,
  `Christopher Nolan`,
  `James Cameron`,
  `Francis Ford Coppola`,
  `Clint Eastwood`,
  `Peter Jackson`,
  `Alfred Hitchcock`,
  `Stanley Kubrick`,
];

const movieWriters = [
  `William Goldman`,
  `Charlie Kaufman`,
  `Quentin Tarantino`,
  `Woody Allen`,
  `Joel Coen`,
  `Ethan Coen`,
  `Nora Ephron`,
  `Oliver Stone`,
  `Robert Towne`,
  `Billy Wilder`
];

const movieActors = [
  `Robert De Niro`,
  `Tom Hanks`,
  `Denzel Washington`,
  `Leonardo DiCaprio`,
  `Morgan Freeman`,
  `Brad Pitt`,
  `Julianne Moore`,
  `Johnny Depp`,
  `Kate Winslet`,
  `Nicole Kidman`,
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
  `Fantasy`,
  `Western`,
  `Animation`,
  `History`,
  `Sci-Fi`,
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
  const randomGenres = getRandomShuffledSubarray(movieGenres, 3);

  return {
    title: getRandomElement(movieTitles),
    posterLink: getRandomElement(moviePosters),
    ageLimit: getRandomElement(movieAgeLimits),
    rating: getRandomFloat(0, 10),
    director: getRandomElement(movieDirectors),
    writers: getRandomShuffledSubarray(movieWriters, 3),
    actors: getRandomShuffledSubarray(movieActors, 3),
    releaseDate: getRandomDate(new Date(1950, 0, 1), new Date()),
    duration: getRandomInt(0, 180),
    country: getRandomElement(movieCountries),
    mainGenre: randomGenres[0],
    otherGenres: randomGenres.slice(1),
    description: getRandomShuffledSubarray(movieDescriptions, 5),
    comments: generateCommentsArray()
  };
};

export const movieCardsData = Array.from({length: getRandomInt(15, 20)}, generateMovieCard);


