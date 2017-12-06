var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const data = {
    "1": {
      text: "Welcome",
      id: "1",
      time: 32131545632
    },
    "2": {
      text: "Let's play master and servant",
      id: "2",
      time: 13132123132,
    }
  };
  res.send(data);
});

module.exports = router;
