import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Movie from './Movie';

const MovieCard = (props) => {
  const { movie } = props;
  const [favourite, setFavourite] = useState(false);

  return (
    <div className="MovieCard">
      <ul>
        <li>
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.poster} alt={movie.title} />
          </Link>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              setFavourite(!favourite);
            }}
          >
            {favourite ? 'Remove from favourite' : 'Add to favourite'}
          </button>
        </li>
      </ul>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
};

export default MovieCard;
