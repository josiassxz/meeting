const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Employee = mongoose.model("Employee");
const games = mongoose.model("games");

router.get("/", (req, res) => {
  games
    .find((err, docs) => {
      res.render("home/appHome", {
        listt: docs,
      });
    })
    .lean();
});


module.exports = router;
