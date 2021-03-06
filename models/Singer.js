const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/connection');

class Singer extends Model {}

Singer.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Singer'
});

Singer.sync({ alter: true })

module.exports = Singer;
