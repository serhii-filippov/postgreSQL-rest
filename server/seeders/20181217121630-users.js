'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        login: 'admin',
        password: 'odmen',
        isAdmin: true,
        accessToken: 'someAccessToken',
        refreshToken: 'someRefreshToken'
      },
      {
        login: 'not admin',
        password: 'password',
        isAdmin: false,
        accessToken: 'someAccessToken',
        refreshToken: 'someRefreshToken'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
  }
};
