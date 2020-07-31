import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import './MovieCard.css';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
    };
  }

  render() {
    const { movie } = this.props;
    const { favourite } = this.state;
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
          <li>
            <button
              type="button"
              onClick={() => {
                this.setState({
                  favourite: !favourite,
                });
              }}
            >
              {favourite ? 'Remove from favourite' : 'Add to favourite'}
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
};

export default MovieCard;
