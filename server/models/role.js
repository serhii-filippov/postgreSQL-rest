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
      // foreignKey: 'fk_actors'
    });
    Role.belongsTo(models.Film);
  };
  return Role;
};