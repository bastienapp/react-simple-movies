class Movie {
  constructor(id, title, director, year, rating, poster, plot) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.year = year;
    this.rating = rating;
    this.poster = poster;
    this.plot = plot;
    this.favourite = false;
  }
}

export default Movie;
