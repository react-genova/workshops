const express = require('express');
const { movies } = require('../resources/movies');

const router = express.Router();

router.get('/', (req, res, next) => res.send(movies));

module.exports = router;