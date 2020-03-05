const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/connection');
const Album = require('./Album');

class Song extends Model {}

Song.init({
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
  modelName: 'Song'
});

Album.hasMany(Song);
Song.belongsTo(Album);

Song.sync({ alter: true })

module.exports = Song;
