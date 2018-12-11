'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  Review.associate = (models) => {
    Review.belongsTo(models.Film);
  };
  return Review;
};