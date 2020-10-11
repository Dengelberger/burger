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
    update: function(burgerID, cb) {
      orm.update("burgers", "id", burgerID, "devoured", function(res) {
        // console.log(res);
        cb(res);
      });
    },

    // DELETE A BURGER
    remove: function(burgerID, cb) {
      orm.remove("burgers", "id", burgerID, function(res) {
        console.log(res);
        cb(res);
      });
    }
  };


// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
