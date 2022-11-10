var express = require('express');
var router = express.Router();

/* test rout */
router.get('/', function (req, res, next) {
  res.render('t', { a1: 77, b2: 'This variable pug' });
});

module.exports = router;
