'use strict';
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    title: DataTypes.STRING,
    release_date: DataTypes.INTEGER
    // genre_id: DataTypes.INTEGER
  }, {});

  Film.associate = (models) => {
    Film.hasMany(models.Reward);
    Film.hasMany(models.Review);
    Film.belongsTo(models.Genre);
    Film.hasOne(models.Role);
  };
  return Film;
};