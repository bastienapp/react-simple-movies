import Movie from './Movie';

const movies = [
  new Movie(
    'tt0083658',
    'Blade Runner',
    'Ridley Scott',
    1982,
    8.1,
    'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.'
  ),
  new Movie(
    'tt0078748',
    'Alien',
    'Ridley Scott',
    1979,
    8.4,
    'https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    'After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.'
  ),
  new Movie(
    'tt0084787',
    'The Thing',
    'John Carpenter',
    1982,
    8.1,
    'https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.'
  ),
];

let favourites = [];

const MovieApi = {
  findAll: () => {
    return movies;
  },

  findById: (id) => {
    return movies.find((movie) => movie.id === id);
  },

  isFavorite: (movie) => {
    return favourites.includes(movie);
  },

  toggleFavourite: (movie) => {
    if (favourites.includes(movie)) {
      favourites = favourites.filter((search) => search !== movie);
    } else {
      favourites.push(movie);
    }
  },
};

export default MovieApi;
