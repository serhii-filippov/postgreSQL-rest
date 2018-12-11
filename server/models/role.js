'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    // actor_id: DataTypes.INTEGER,
    // film_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  Role.associate = (models) => {
    Role.belongsTo(models.Actor, {
      foreignKey: 'actorId',
      onDelete: 'CASCADE'
    });
    Role.hasOne(models.Film, {
      // foreignKey: 'filmId',
      // as: 'roleInFilm'
    });
  };
  return Role;
};