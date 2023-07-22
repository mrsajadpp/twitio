var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { description: "Download video's from your favourite social media" });
});

module.exports = router;
