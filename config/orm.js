// Import MySQL connection.
var connection = require("../config/connection.js");

  var orm = {
  //SEE ALL BURGERS
    
    all: function(whichTable, cb) {
      connection.query("SELECT * FROM ??", [whichTable], function (err, data) {
      
        if (err) {
          throw err;
        }

      console.log(data);

        cb(data);
      });
    },

    //ADD A BURGER
    create: function(whichTable, whichCol, value, cb) {
       connection.query("INSERT INTO ?? (??) VALUES (?)", [whichTable, whichCol, value],  function(err, result) {
        if (err) {
          throw err;
        }
        // console.log(result);
        cb(result);
      });
    },
    //UPDATE A BURGER
    update: function(whichTable, whichID, burgerID, whichCol, cb) {
      connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?", [whichTable, whichCol, true, whichID, burgerID], function(err, result) {
        if (err) {
          throw err;
        }
  // console.log(result);
        cb(result);
      });
    },  
    //  //DELETE A BURGER (THIS IS EXTRA)
    remove: function(whichTable, whichID, burgerID, cb) {
        connection.query("DELETE FROM ?? WHERE ?? = ?", [whichTable, whichID, burgerID], function(err, result) {
          if (err) {
            throw err;
          }
    // console.log(result);
          cb(result);
        });
      },  
  };



// Export the orm object for the model (burger.js).
module.exports = orm;
