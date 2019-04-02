const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'toulouse',
  database : 'BIGSIS'
});
module.exports  =  connection;


