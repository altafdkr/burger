
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const db = require(path.join(__dirname, 'models/burger.js'));

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

const routes = require(path.join(__dirname, 'controllers', 'burgers_controller.js'));
app.use(routes);

app.use(express.static(path.join(__dirname, 'public')));

app.set("port", process.env.PORT || 8080);
 
    app.listen(app.get("port"), function () {
        console.log("Listening on port " + app.get("port"));
    });