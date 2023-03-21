const mysql = require('mysql2/promise'); 
const {host , user , password , database} = require('../');
const UMIQuery = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database
  });
  module.exports = UMIQuery;