import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieApi from './MovieApi';
import MovieFavourites from './MovieFavourites';

const MovieCard = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [movie, setMovie] = useState(null);
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    async function callMovies() {
      if (!loaded && !mounted) {
        setMounted(true);
        MovieApi.findById(id).then((item) => {
          setMovie(item);
          setFavourite(MovieFavourites.isFavorite(item));
          setLoaded(true);
          setMounted(false);
        });
      }
    }
    callMovies();
  }, [id, loaded, mounted]);

  return loaded ? (
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
              MovieFavourites.toggleFavourite(movie);
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
  ) : (
    <div>Loading...</div>
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
