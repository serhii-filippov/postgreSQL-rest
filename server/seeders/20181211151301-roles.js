'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        name: 'that guy',
        description: 'main character',
        actorId: '1',
        filmId: '1'
      },
      {
        name: 'Juddy',
        description: 'wife of main character',
        actorId: '2',
        filmId: '2'
      },
      {
        name: 'Donny Darko',
        description: 'as Donny',
        actorId: '3',
        filmId: '3'
      },
      {
        name: 'Frank',
        description: 'friend of Joe',
        actorId: '4',
        filmId: '1'
      },
      {
        name: 'hiller',
        description: 'good guy who heal main hero',
        actorId: '5',
        filmId: '2'
      },
      {
        name: 'bread',
        description: 'pretending low IQ guy',
        actorId: '6',
        filmId: '3'
      },
      {
        name: 'no name dude',
        description: 'try to guess',
        actorId: '7',
        filmId: '1'
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
