import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div className="MovieCard">
      <ul>
        <li>
          <a
            href={`https://www.imdb.com/title/${props.movie.id}/`}
            target="_blank"
            rel="noreferrer"
          >
            {props.movie.title}
          </a>
        </li>
        <li>
          <img src={props.movie.poster} alt={props.movie.title} />
        </li>
        <li>{props.movie.director}</li>
        <li>{props.movie.year}</li>
      </ul>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.instanceOf(Movie),
};

export default MovieCard;
