import axios from 'axios';
import Movie from './Movie';

const API_KEY = 'b5c85bc6';
const API = axios.create({
  baseURL: `https://www.omdbapi.com/?apikey=${API_KEY}`,
});

class MovieApi {
  static async findAll() {
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
    return responses.map(({ data }) => this.parseData(data));
  }

  static async findById(id) {
    const { data } = await API.get('', {
      params: {
        i: id,
      },
    }).catch((error) => error);
    return this.parseData(data);
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
