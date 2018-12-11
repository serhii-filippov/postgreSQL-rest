'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Films', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      release_date: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      genreId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Films');
  }
};