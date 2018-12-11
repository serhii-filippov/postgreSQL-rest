'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  
  actor_id: DataTypes.INTEGER,
  film_id: DataTypes.INTEGER,
  name: DataTypes.STRING,
  description: DataTypes.STRING
}, {});

  Role.associate = (models) => {
    Role.belongsTo(models.Actor, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
  };

  return Role;
};