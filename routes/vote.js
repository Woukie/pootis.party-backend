var express = require("express");
var router = express.Router();

/* GET vote page. */
router.get("/", function (req, res, next) {
  res.render("vote", {});
});

module.exports = router;
