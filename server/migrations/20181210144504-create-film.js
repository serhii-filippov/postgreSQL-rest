'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.update('Films', {
			genre_id: {
				type: Sequelize.INTEGER,
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				references: {
					model: 'Genres',
					key: 'id'
				}
			}
		})
	},

	down: (queryInterface, Sequelize) => {

	}

};
