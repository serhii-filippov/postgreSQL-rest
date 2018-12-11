'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  
  Genre.associate = (models) => {
    Genre.hasMany(models.Film, {
      foreignKey: 'genreId',
      as: 'filmGenre'
    });
  };
  return Genre;
};