const Sequelize = require('sequelize');
const db = require('../database');

const Candy = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
    notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
      }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10,
      min: 0
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://cdn.shopify.com/s/files/1/0150/8992/6198/products/2020-01-23-DCB-AF12401_1024x.jpg?v=1619208212.jpg'
  }
});

module.exports = Candy
