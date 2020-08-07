import React, { useState, useEffect } from 'react';
import MovieApi from './MovieApi';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="MovieList">
      {!error || <div>Error</div>}
      {movies.length === 0 ||
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      {movies.length !== 0 || error || <div>Loading...</div>}
    </div>
  );
};

export default MovieList;
