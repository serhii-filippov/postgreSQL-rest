'use strict';
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    title: DataTypes.STRING,
    release_date: DataTypes.INTEGER
    // genre_id: DataTypes.INTEGER
  }, {});

  Film.associate = (models) => {
    Film.hasMany(models.Reward, {
      foreignKey: 'filmId',
      as: 'filmReward'
    });
    Film.hasMany(models.Review, {
      foreignKey: 'filmId',
      as: 'filmReview'
    });
    Film.belongsTo(models.Genre, {
      foreignKey: 'genreId',
      onDelete: 'CASCADE'
    });
    Film.belongsTo(models.Role, {
      foreignKey: 'filmId',
      onDelete: 'CASCADE'
    });
  };
  return Film;
};