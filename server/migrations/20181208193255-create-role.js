'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      actorId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'Actors',
          key: 'id',
          as: 'actorId',
        },
      },
      filmId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
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
    return queryInterface.dropTable('Roles');
  }
};