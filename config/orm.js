// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

var orm = {
    selectAll : function (table, cb) {
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query (dbQuery, function (err, res) {
            if (err) {
                throw (err);
            }
            cb (result);
        });
    },
    insertOne : function (table, cols, vals, cb) {
        var dbQuery = "INSERT INTO" + table;

        dbQuery += " (";
        dbQuery += cols.toString();
        dbQuery += ") ";
        dbQuery += "VALUES (";
        dbQuery += printQuestionMarks(vals.length);
        dbQuery += ") ";

        connection.query(dbQuery, vals, function (err, result){
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var dbQuery = "UPDATE " + table;

        dbQuery += "SET ";
        dbQuery += objToSql(objColVals);
        dbQuery += " WHERE ";
        dbQuery += condition;

        connection.query(dbQuery, function(err, result){
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
}


module.exports = orm;