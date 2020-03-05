const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/connection');
const Singer = require('./Singer');

class Album extends Model {}

Album.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publishedAt: {
    type: DataTypes.DATEONLY,
  }
}, {
  sequelize,
  modelName: 'Album'
});

Singer.hasMany(Album);
Album.belongsTo(Singer);

Album.sync({ alter: true })

module.exports = Album;
