var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("index", { title: "Chore Chart Main" });
});

module.exports = router;
