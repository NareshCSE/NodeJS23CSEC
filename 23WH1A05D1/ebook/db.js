// src/db.js
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',   // Database host (usually localhost for local development)
  user: 'root',   // Your MySQL username
  password: '1210',   // Your MySQL password
  database: 'ebook'   // The name of your database
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export the connection for use in other files
module.exports = connection;
