'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rewards', [
      {
        name: 'Emmy for best man role',
        date: '1997',
        filmId: '1'
      },
      {
        name: 'Grammy for best woman role',
        date: '1999',
        filmId: '2'
      },
      {
        name: 'Oscar for second plan role',
        date: '2001',
        filmId: '3'
      },
      {
        name: 'Emmy for sound',
        date: '2002',
        filmId: '1'
      },
      {
        name: 'Oscar for scenario',
        date: '2003',
        filmId: '2'
      }
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
