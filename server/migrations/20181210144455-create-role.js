'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.update('Roles', {
			actor_id: {
				type: Sequelize.INTEGER,
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				references: {
				  model: 'Actors',
				  key: 'id'
				}
			},
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
