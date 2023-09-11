import {
  getRandomInt,
  getRandomFloat,
  getRandomElement,
  getRandomArray,
} from '../utils.js';


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

const movieReleasDates = [
  {fullDate: `30 March 1945`, year: `1945`},
  {fullDate: `12 November 1971`, year: `1971`},
  {fullDate: `25 December 1993`, year: `1993`},
  {fullDate: `16 July 1965`, year: `1965`},
  {fullDate: `19 December 1983`, year: `1983`},
  {fullDate: `1 October 1974`, year: `1974`},
  {fullDate: `15 December 1979`, year: `1979`}
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

const movieEmojis = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];

const movieCommentMessages = [
  `So confusing, I was trying to keep up with the plot.`,
  `Captivating story and excellent performances`,
  `Yawn-inducing from start to finish`,
  `The pacing was absolutely perfect`,
  `Why did this need to be so long?`,
  `Such a waste of talented actors`,
  `Feels outdated and irrelevant`,
  `A timeless classic for sure`,
  `A visual masterpiece!`,
  `Not my cup of tea`
];

const movieCommentAuthors = [
  `Cinephile42`,
  `MovieBuff1995`,
  `ScreenQueen`,
  `FilmFanatic`,
  `PopcornLover`,
  `SilverScreenAddict`,
  `ReelLifeCritic`
];

const movieCommentDates = [
  `Jast now`,
  `45 minutes ago`,
  `6 hours ago`,
  `Yesterday`,
  `2 days ago`,
  `2020/05/18 16:20`,
  `2021/11/11 00:01`,
  `2022/07/08 04:20`,
  `2022/12/31 23:59`
];

const generateMovieCard = () => {
  const randomDateObject = getRandomElement(movieReleasDates);
  return {
    title: getRandomElement(movieTitles),
    poster: `./images/posters/${getRandomElement(moviePosters)}`,
    year: randomDateObject.year,
    ageLimit: getRandomElement(movieAgeLimits),
    rating: getRandomFloat(0, 10),
    director: getRandomElement(movieDirectors),
    writers: getRandomArray(movieWriters, 3).join(`, `),
    actors: getRandomArray(movieActors, 3).join(`, `),
    releaseDate: randomDateObject.fullDate,
    duration: `${getRandomInt(1, 2)}h ${getRandomInt(0, 59)}m`,
    country: getRandomElement(movieCountries),
    genre: getRandomElement(movieGenres),
    otherGenre: getRandomArray(movieOtherGenres, 2).join(`, `),
    description: getRandomArray(movieDescriptions, 5).join(` `),
    comments: Array.from({length: getRandomInt(0, 5)}, generatePopapComment)
  };
};

const generatePopapComment = () => ({
  emoji: getRandomElement(movieEmojis),
  message: getRandomElement(movieCommentMessages),
  author: getRandomElement(movieCommentAuthors),
  date: getRandomElement(movieCommentDates)
});

export const movieCardsData = Array.from({length: getRandomInt(15, 20)}, generateMovieCard);

