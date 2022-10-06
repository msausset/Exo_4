var express = require("express");
var router = express.Router();

const UserController = require("../controllers/user.controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Exercice livres" });
});

router.get("/", UserController.allUsers);

module.exports = router;
