var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burgersModel.js");

//CREATE ROUTES
//GET ALL BURGERS
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//CREATE A BURGER
router.post("/api/burgers", function(req, res) {
    console.log("hit posts burger")
    console.log(req.body)
    burger.create(req.body.name
    ,(function(result){
    //   console.log(result);  
        res.json(result);
    
        }));
});

//UPDATE A BURGER (DEVOUR A BURGER)
router.put("/api/burgers/:id", function(req, res) {

    var burgerID = req.params.id;

    console.log("burgerID", burgerID);

burger.update(burgerID, function(result) {
    if(result.changedRows == 0) {
        return res.status(404).end();
    } else {
       res.status(200).end();
    }
});
});

//DELETE A BURGER
router.delete("/api/burgers/:id", function(req, res) {

    var burgerID = req.params.id;

    console.log("burgerID", burgerID);

burger.remove(burgerID, function(result) {
    if(result.affectedRows == 0) {
        return res.status(404).end();
    } else {
       res.status(200).end();
    }
});
});


// Export routes for server.js to use.
module.exports = router;

