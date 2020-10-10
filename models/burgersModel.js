// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(value, cb) {
      orm.create("burgers", "burger_name", value, function(res) {
        cb(res);
      });
    },

    // This is to change a burger to devoured.
    update: function(value, cb) {
      orm.update("burgers", "id", "devoured", value, function(res) {
        cb(res);
      });
    }
  };


// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
