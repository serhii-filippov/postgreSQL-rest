'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reward = sequelize.define('Reward', {
    name: DataTypes.STRING,
    // film_id: DataTypes.INTEGER,
    date: DataTypes.INTEGER
  }, {});

  Reward.associate = (models) => {
    Reward.belongsTo(models.Film, {
      foreignKey: 'filmId',
      onDelete: 'CASCADE'
    });
  };
  return Reward;
};