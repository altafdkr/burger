var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var burgerObject = {
        burger: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {

      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(
      {
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {

          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });

  router.delete("/api/burgers/:id", function(req, res) {
    burger.delete(req.params.id, function(err, result) {
      if (err) {
        return res.status(500).end();
      }
      return res.status(200).end();
    });
  });

  module.exports = router;