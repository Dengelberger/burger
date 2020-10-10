// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // ADD A BURGER
    create: function(value, cb) {
      orm.create("burgers", "burger_name", value, function(res) {
        cb(res);
      });
    },

    // EAT A BURGER
    update: function(objColVals, condition,  cb) {
      orm.update("burgers", condition, objColVals, function(res) {
        cb(res);
      });
    }
  };


// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
