// ============================
// connect Node to MySQL
// ============================

var mysql = require("mysql");

var connection= mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) {
        console.error("error connectingL " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// ============================
// Export Connection
// ============================
module.exports = connection;