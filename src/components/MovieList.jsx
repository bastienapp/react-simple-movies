import React, { useState, useEffect } from 'react';
import MovieApi from './MovieApi';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function callMovies() {
      if (!loaded && !mounted) {
        setMounted(true);
        MovieApi.findAll().then((items) => {
          setMovies(items);
          setLoaded(true);
          setMounted(false);
        });
      }
    }
    callMovies();
  }, [loaded, mounted]);

  return loaded ? (
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
