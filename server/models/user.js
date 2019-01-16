'use strict';

const bcrypt = require('bcrypt');
const hashConfig = require('../auth/config');

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    accessToken: DataTypes.STRING,
    refreshToken: DataTypes.STRING
  }, {
    
    hooks: {
      beforeSave: (user, options) => {
        return bcrypt.hash(user.password, hashConfig.saltRounds)
          .then((hash) => {
            user.password = hash;
          })
          .catch(err => console.log('Error occured during creating password (beforeSave). ', err))
      },
    }
  
  });

  User.associate = (models) => {
    
  };

  return User;
};