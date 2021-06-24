var express = require('express');
var router = express.Router();

/* GET jobs listing. */
router.get('/', function(req, res, next) {
  res.send('job info will be sent sometime');
});

module.exports = router;
