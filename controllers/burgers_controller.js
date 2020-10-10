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
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//CREATE A BURGER
router.post("/api/burgers", function(req, res) {
    console.log("hit posts burger")
    console.log(req.body)
    burger.create(req.body.name
    ,(function(result){
      console.log(result);  
        res.json(result);
    
        }));
});

//UPDATE A BURGER (DEVOUR A BURGER)
router.put("/api/burgers", function(req, res) {
    console.log("hit moves burger")
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
burger.update({
    devoured: req.body.devoured
}, condition, function(result) {
    if(result.changedRows == 0) {
        res.status(404).end();
    }
});
});

//DELETE A BURGER



// Export routes for server.js to use.
module.exports = router;

