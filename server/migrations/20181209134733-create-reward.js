'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Rewards', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      filmId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Films',
          key: 'id',
          as: 'filmId',
        },
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
    return queryInterface.dropTable('Rewards');
  }
};