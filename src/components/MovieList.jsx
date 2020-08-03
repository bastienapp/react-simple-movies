import React from 'react';
import MovieApi from './MovieApi';
import MovieCard from './MovieCard';

const MovieList = () => {
  return (
    <div className="MovieList">
      {MovieApi.findAll().map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
