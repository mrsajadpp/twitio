var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { description: "Download video's from your favourite social media" });
});

router.get('/youtube', (req, res, next) => {
  res.render('youtube', { title: "YouTube Video Downloader", description: "Download YouTube video with twitio" })
})

router.get('/spotify', (req, res, next) => {
  res.render('spotify', { title: "Spotify Song Downloader", description: "Download your favourite spotify song with twitio" })
})

module.exports = router; 
