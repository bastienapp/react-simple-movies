import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Movie from './Movie';

const MovieCard = (props) => {
  const { movie } = props;

  return (
    <div className="MovieCard">
      <ul>
        <li>
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.poster} alt={movie.title} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
};

export default MovieCard;
