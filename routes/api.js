var express = require('express');
var router = express.Router();

/* GET API listing. */
router.get('/', function(req, res, next) {
  res.send('This is the API!');
});

module.exports = router;
