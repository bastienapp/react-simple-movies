import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieApi from './MovieApi';
import MovieFavourites from './MovieFavourites';

const MovieCard = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    let cancelled = false;
    MovieApi.findById(id).then((item) => {
      if (cancelled) {
        return;
      }
      if (item === null || item instanceof Error || !item.id) {
        setError(true);
      } else {
        setMovie(item);
        setFavourite(MovieFavourites.isFavorite(item));
      }
    });

    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <div className="MovieCard">
      {!error || <div>Error!</div>}
      {movie === null || (
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
                MovieFavourites.toggleFavourite(movie);
                setFavourite(!favourite);
              }}
            >
              {favourite ? 'Remove from favourite' : 'Add to favourite'}
            </button>
          </li>
        </ul>
      )}
      {movie !== null || error || <div>loading</div>}
      <Link to="/">Return to movie&apos;s list</Link>
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
