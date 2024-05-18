const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'db',
    user: 'user',
    password: 'root',
    database: 'jt',
    port: 3306
});

connection.connect(function(err) {
  if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log(`Connected to jt`);
});

module.exports = connection;
