var express = require("express");
var ejs = require("ejs");
var bodyParser = require("body-parser");

var app = express();

var mainRouter = require("./routes/main");

app.use(express.static("public"));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use("/", mainRouter);

module.exports = app;
