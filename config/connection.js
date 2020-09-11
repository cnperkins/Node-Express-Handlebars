var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connenction = mysql.createConnection.Connection(process.env.JAWSDB_URL);
} else {

    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Peaches04$",
        database: "burgers_db"
    });
};




module.exports = connection;