import React, { useState, useEffect } from 'react';
import MovieApi from './MovieApi';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let cancelled = false;
    MovieApi.findAll().then((items) => {
      if (cancelled) {
        return;
      }
      if (items instanceof Error) {
        setError(true);
      } else {
        setMovies(items);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return <div>Error!</div>;
  }
  return movies.length > 0 ? (
    <div className="MovieList">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default MovieList;
