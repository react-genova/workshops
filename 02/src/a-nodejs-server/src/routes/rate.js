const express = require('express');
const { rate } = require('../resources/movies');

const router = express.Router();

router.post('/', function(req, res) {
    const { body: {rating, id} } = req;
    const movie = rate(id, rating);
    res.send(movie);
});

module.exports = router;