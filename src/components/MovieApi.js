import axios from 'axios';
import Movie from './Movie';

const API_URL = 'http://www.omdbapi.com/';
const API_KEY = 'b5c85bc6';

class MovieApi {
  static async findAll() {
    const callBladeRunner = axios.get(API_URL, {
      params: {
        t: 'blade runner',
        type: 'movie',
        apikey: API_KEY,
      },
    });
    const callAlien = axios.get(API_URL, {
      params: {
        t: 'alien',
        type: 'movie',
        apikey: API_KEY,
      },
    });
    const callTheThing = axios.get(API_URL, {
      params: {
        t: 'the thing',
        type: 'movie',
        apikey: API_KEY,
      },
    });

    const movies = await axios
      .all([callBladeRunner, callAlien, callTheThing])
      .then(
        axios.spread((...responses) =>
          responses.map(({ data }) => this.parseData(data))
        )
      );
    return movies;
  }

  static async findById(id) {
    const movie = await axios
      .get(API_URL, {
        params: {
          i: id,
          apikey: API_KEY,
        },
      })
      .then((response) => response.data)
      .then((data) => this.parseData(data));
    return movie;
  }

  static parseData(data) {
    return new Movie(
      data.imdbID,
      data.Title,
      data.Director,
      parseInt(data.Year, 10),
      parseFloat(data.imdbRating),
      data.Poster,
      data.Plot
    );
  }
}

export default MovieApi;
