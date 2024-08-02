var express = require("express");
var router = express.Router();

/* GET endpoints page. */
router.get("/", function (req, res, next) {
  res.render("endpoints", { title: "Endpoints" });
});

module.exports = router;
