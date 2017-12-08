let movies = {
  "1": {
    id: "1",
    title: "Il grande Lebowski",
    original: "The Big Lebowski",
    rating: 5,
    year: 1998,
  },
  "2": {
    id: "2",
    title: "Ave, Cesare!",
    original: "Hail, Caesar!",
    rating: 3,
    year: 2016,
  },
  "3": {
    id: "3",
    title: "Frantic",
    original: "Frantic",
    rating: 3,
    year: 1988,
  },
  "4": {
    id: "4",
    title: "Il ritorno dello Jedi",
    original: "Return of the Jedi",
    rating: 4,
    year: 1983,
  },
  "5": {
    id: "5",
    title: "Blade Runner",
    original: "Blade Runner",
    rating: 4,
    year: 1982,
  },
};

const rate = (id, rating) => {
  const movie = movies[id];
  if(movie) {
    movie.rating = rating;
    return movie;
  }
  else {
    return null;
  }
}

module.exports = { movies, rate };