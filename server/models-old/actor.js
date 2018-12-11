'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
  id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
  },

  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  birth_year: DataTypes.INTEGER,
  birthplace: DataTypes.STRING
}, {});

  Actor.associate = (models) => {
    Actor.hasMany(models.Role, {
      // foreignKey: 'id',
      // //1) foreignKey: 'actor_id'
      // as: 'roles'

      // // 1) as 'id'
      // // 2) as: 'actor_id'
      
    });
  };

  return Actor;
};