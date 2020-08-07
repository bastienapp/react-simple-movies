import Movie from './Movie';

const favourites = localStorage.getItem('favourites')
  ? JSON.parse(localStorage.getItem('favourites')).map((obj) =>
      Object.assign(new Movie(), obj)
    )
  : [];

class MovieFavourites {
  static isFavorite(movie) {
    return favourites.find((favourite) => favourite.id === movie.id);
  }

  static toggleFavourite(movie) {
    const i = favourites.findIndex((favourite) => favourite.id === movie.id);
    if (i > -1) {
      favourites.splice(i, 1);
    } else {
      favourites.push(movie);
    }
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }
}

export default MovieFavourites;
