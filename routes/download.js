var express = require('express');
var router = express.Router();
let ytdl = require('ytdl-core');
const Spotify = require('spotifydl-core').default

const credentials = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
}

const spotify = new Spotify(credentials); 

/* GET users listing. */
router.post('/youtube', function (req, res, next) {
  try {
    res.header('Content-Disposition', 'attachment; filename="YouTube - ' + new Date() + '- twitio.thintry.com.mp4"');
    ytdl(req.body.url, { format: 'mp4', filter: 'audioandvideo', quality: 'highest' }).pipe(res);
    res.end()
  } catch (error) {
    res.status(500).send('500')
  }
});

router.post('/spotify', async (req, res, next) => {
  try {
    res.header('Content-Disposition', 'attachment; filename="Spotify - ' + new Date() + ' - twitio.thintry.com.mp3"');
    let song = await spotify.downloadTrack(req.body.url);
    res.write(song, 'binary');
    res.end();
  } catch (error) {
    res.status(500).send('500')
  }
})

module.exports = router;
