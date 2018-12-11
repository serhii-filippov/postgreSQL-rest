'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Films', [
      {
        title: 'Titanic',
        release_date: '1989',
        genreId: '1'
      },
      {
        title: 'Pulp fiction',
        release_date: '1992',
        genreId: '2'
      },
      {
        title: 'Interstellar',
        release_date: '2015',
        genreId: '3'
      }
    ]);
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
