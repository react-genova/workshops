const express = require('express');
const { getMovies } = require('../resources/movies');

const router = express.Router();

router.get('/', (req, res, next) => res.send(getMovies()));

module.exports = router;