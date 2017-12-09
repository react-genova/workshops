const dal = require('../dal/dal');

let cache = null;

const rate = (id, rating) => {
  if(!cache)
    cache = dal.getMovies();
  cache[id] = dal.rate(id, rating);
  return cache[id];
}

const getMovies = () => {
  if(!cache)
    cache = dal.getMovies();
  return cache;
};

module.exports = { getMovies, rate };