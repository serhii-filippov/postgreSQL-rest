'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Actors', [
      {
        firstName: 'John',
        lastName: 'Doe',
        birth_year: '1987',
        birthplace: 'Alaska'
      },
      {
        firstName: 'Nat',
        lastName: 'Last',
        birth_year: '1953',
        birthplace: 'Braska'
      },
      {
        firstName: 'Matt',
        lastName: 'Cat',
        birth_year: '1912',
        birthplace: 'Paris'
      },
      {
        firstName: 'Grass',
        lastName: 'Green',
        birth_year: '1939',
        birthplace: 'Amsterdam'
      },{
        firstName: 'Matt',
        lastName: 'Net',
        birth_year: '1965',
        birthplace: 'Berlin'
      },
      {
        firstName: 'Past',
        lastName: 'Bread',
        birth_year: '1977',
        birthplace: 'London'
      },
      {
        firstName: 'Good',
        lastName: 'Night',
        birth_year: '1995',
        birthplace: 'Nevada'
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
