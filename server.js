var express = require("express");
var app = express();
var db = require("./cnxDB");

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file
// index page
app.get("/", function (req, res) {
  var tagline = "Testing";

  res.render("pages/index", {
    users: users,
    tagline: tagline,
  });
});
// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(8080);
console.log("Serveur démarré sur le port 8080 !");
