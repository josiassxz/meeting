const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");


router.get("/", (req, res) => {
  res.render("home/sign", {

  });
});
module.exports = router;
