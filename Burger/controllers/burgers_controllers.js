var express = require("express");
var burgersCtrl = require("../models/burger.js");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burgersCtrl.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burgersCtrl.insertOne([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
    console.log("User added: " + req.body.burger_name)
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burgersCtrl.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burgersCtrl.deleteOne(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            return res.status(200).end();
        };
    });
});

module.exports = router;