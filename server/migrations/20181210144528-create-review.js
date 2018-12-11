'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Reviews', {
			film_id: {
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				references: {
					model: 'Films',
					key: 'id'
				}
			}
		})
	},

	down: (queryInterface, Sequelize) => {

	}

};
