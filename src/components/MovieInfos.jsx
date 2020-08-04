import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieApi from './MovieApi';

const MovieCard = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;

  const movie = MovieApi.findById(id);

  const [favourite, setFavourite] = useState(MovieApi.isFavorite(movie));

  return (
    <div className="MovieCard">
      <ul>
        <li>
          <img src={movie.poster} alt={movie.title} />
        </li>
        <li>{movie.director}</li>
        <li>{movie.year}</li>
        <li>
          <a
            href={`https://www.imdb.com/title/${movie.id}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to IMDB
          </a>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              MovieApi.toggleFavourite(movie);
              setFavourite(!favourite);
            }}
          >
            {favourite ? 'Remove from favourite' : 'Add to favourite'}
          </button>
        </li>
        <li>
          <Link to="/">Return to movie&apos;s list</Link>
        </li>
      </ul>
    </div>
  );
};

MovieCard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieCard;
