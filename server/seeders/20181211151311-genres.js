'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      {
        name: 'Drama',
        description: 'Descrition of drama films'
      },
      {
        name: 'Comedy',
        description: 'Some funny sitiations'
      },
      {
        name: 'Scince fiction',
        description: 'Interesting film about outer space and other worlds'
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
