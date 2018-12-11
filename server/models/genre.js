'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  
  Genre.associate = (models) => {
    Genre.hasMany(models.Film);
  };
  return Genre;
};