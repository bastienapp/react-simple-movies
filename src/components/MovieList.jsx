import React, { useState, useEffect } from 'react';
import MovieApi from './MovieApi';
import MovieCard from './MovieCard';
import Movie from './Movie';

const MovieList = () => {
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    let cancelled = false;
    MovieApi.findAll().then((allMovies) => {
      if (cancelled) {
        return;
      }
      if (
        allMovies === null ||
        allMovies.length === 0 ||
        allMovies instanceof Error
      ) {
        setError(true);
      } else {
        setMovies(allMovies);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const filterMovies = (event) => {
    const { target } = event;
    const { value } = target;
    setFilter(value);
  };

  return (
    <div className="MovieList">
      {!error || <div>Error</div>}
      {movies.length === 0 || (
        <label htmlFor="filter-movies">
          <span>Search a movie: </span>
          <input
            id="filter-movies"
            name="filter"
            onChange={(event) => filterMovies(event)}
            value={filter}
          />
        </label>
      )}
      {movies.length === 0 ||
        movies
          .filter(
            (movie) =>
              !filter.length ||
              (movie instanceof Movie &&
                movie.title.toLowerCase().includes(filter.toLowerCase()))
          )
          .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      {movies.length !== 0 || error || <div>Loading...</div>}
    </div>
  );
};

export default MovieList;
