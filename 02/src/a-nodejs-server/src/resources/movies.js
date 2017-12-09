const dal = require('../dal/dal');

let cache = null;

const initCache = () => { 
  if(!cache) 
    cache = dal.getMovies(); 
  return cache;
};

const rate = (id, rating) => {
  initCache();
  cache[id] = dal.rate(id, rating);
  return cache[id];
}

const getMovies = () => {
  initCache();
  return cache;
};

module.exports = { getMovies, rate };