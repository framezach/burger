// ============================
// Import MySQL connection
// ============================

var connection = require("../config/connection.js");
// ============================
// Functions
// ============================
var orm = {
    // Return all table entries:
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            // Result callback
            cb(result);
        })
    }, // Insert single table entry
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(val.length);
        queryString += "( ";

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }, // Updates single table entry
    updateOne: function (table, objColVols, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVols);
        querySTring += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
}

module.exports = orm;