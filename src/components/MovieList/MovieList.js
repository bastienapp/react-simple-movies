import React from "react";
import Movie from "models/Movie";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = () => {
  const movies = [
    new Movie(
      "tt0083658",
      "Blade Runner",
      "Ridley Scott",
      1982,
      8.1,
      "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    ),
    new Movie(
      "tt0078748",
      "Alien",
      "Ridley Scott",
      1979,
      8.4,
      "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    ),
    new Movie(
      "tt0084787",
      "The Thing",
      "John Carpenter",
      1982,
      8.1,
      "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    ),
  ];

  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
