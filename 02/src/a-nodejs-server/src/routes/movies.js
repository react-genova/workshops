var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const data = {
    "1": {
      id: "1",
      title: "Il grande Lebowski",
      original: "The Big Lebowski",
      rate: 5,
      year: 1998,
    },
    "2": {
      id: "2",
      title: "Ave, Cesare!",
      original: "Hail, Caesar!",
      rate: 3,
      year: 2016,
    },
    "3": {
      id: "3",
      title: "Frantic",
      original: "Frantic",
      rate: 3,
      year: 1988,
    },
    "4": {
      id: "4",
      title: "Il ritorno dello Jedi",
      original: "Return of the Jedi",
      rate: 4,
      year: 1983,
    },
    "5": {
      id: "5",
      title: "Blade Runner",
      original: "Blade Runner",
      rate: 4,
      year: 1982,
    },
  };
  res.send(data);
});

module.exports = router;
