var express = require("express");
var router = express.Router();
const AudioPlayer = require("../audioplayer");

/* GET request for listening to audio stream. */
router.get("/", function (req, res, next) {
  const { id, stream } = AudioPlayer.openStream();
  res.set("accept-ranges", "bytes");
  res.setHeader("Content-Type", "audio/mp3");
  stream.pipe(res);
  res.on("close", () => {
    AudioPlayer.closeStream(id);
  });
});

module.exports = router;
