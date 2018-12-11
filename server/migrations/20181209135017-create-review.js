'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filmId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'Films',
          key: 'id',
          as: 'FilmId',
        }
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
    return queryInterface.dropTable('Reviews');
  }
};