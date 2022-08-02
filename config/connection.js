const Sequelize = require('sequelize');
require('dotenv').config();

// connection to mysql db with username and password
const sequelize = new Sequelize('all_coders_blog_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;