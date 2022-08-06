const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'ndiamond71',
    email: 'diamond71@sample.com',
    password: 'pwd1111'
  },
  {
    username: 'jms55',
    email: 'jackyboy@sample.com',
    password: 'staplerhorse'
  },
  {
    username: 'kirbyOne',
    email: 'littlepink@sample.com',
    password: 'pinkyk1'
  },
  {
    username: 'codergirl',
    email: 'ksmithy@sample.com',
    password: 'password123'
  },
  {
    username: 'technerd455',
    email: 'example@sample.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
