import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import './MovieCard.css';

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div className="MovieCard">
      <ul>
        <li>
          <a
            href={`https://www.imdb.com/title/${movie.id}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {movie.title}
          </a>
        </li>
        <li>
          <img src={movie.poster} alt={movie.title} />
        </li>
        <li>{movie.director}</li>
        <li>{movie.year}</li>
      </ul>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
};

export default MovieCard;
