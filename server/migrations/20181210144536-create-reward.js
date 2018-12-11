'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Rewards', {
			film_id: {
				type: Sequelize.INTEGER,
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				references: {
				  model: 'Films',
				  key: 'id'
				}
			},
		})
	},

	down: (queryInterface, Sequelize) => {

	}
	
};
