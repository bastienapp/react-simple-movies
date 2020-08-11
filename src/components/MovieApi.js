import axios from 'axios';
import Movie from './Movie';

const API_KEY = 'b5c85bc6';
const API = axios.create({
  baseURL: `https://www.omdbapi.com/?apikey=${API_KEY}`,
});
let cancelToken;

class MovieApi {
  static async findAll() {
    cancelToken = axios.CancelToken.source();
    const callBladeRunner = API.get('', {
      params: {
        t: 'blade runner',
        type: 'movie',
      },
    });
    const callAlien = API.get('', {
      params: {
        t: 'alien',
        type: 'movie',
      },
    });
    const callTheThing = API.get('', {
      params: {
        t: 'the thing',
        type: 'movie',
      },
    });

    const responses = await axios
      .all([callBladeRunner, callAlien, callTheThing])
      .catch((error) => error);
    cancelToken = undefined;
    return responses.map(({ data }) => this.parseData(data));
  }

  static async findById(id) {
    cancelToken = axios.CancelToken.source();
    const { data } = await API.get('', {
      params: {
        i: id,
      },
    }).catch((error) => error);
    cancelToken = undefined;
    return this.parseData(data);
  }

  static cancel(message) {
    if (typeof cancelToken !== typeof undefined) {
      cancelToken.cancel(message);
      cancelToken = undefined;
    }
  }

  static parseData(data) {
    if (!data) {
      return null;
    }
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
