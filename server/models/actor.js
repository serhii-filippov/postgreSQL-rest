'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    birthplace: DataTypes.STRING
  }, {
    getterMethods: {
      fullName() {
        return this.firstName + ' ' + this.lastName
      }
    }
  });

  Actor.associate = (models) => {
    Actor.hasOne(models.Role);
  };
  return Actor;
};