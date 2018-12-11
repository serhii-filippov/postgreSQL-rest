'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        title: 'Good film',
        description: 'its the first review text',
        filmId: '1'
      },
      {
        title: 'Nice stuff',
        description: 'its the second review text',
        filmId: '2'
      },
      {
        title: 'Awesome one',
        description: 'its the third review text',
        filmId: '3'
      },
      {
        title: 'Didn\'t like it',
        description: 'its the fourth review text',
        filmId: '1'
      },
      {
        title: 'Random review title',
        description: 'its the fiveth review text',
        filmId: '2'
      },
      {
        title: 'Don\'t mind me',
        description: 'its the sixth review text',
        filmId: '3'
      },
      {
        title: 'Nicely done',
        description: 'its the seventh review text',
        filmId: '1'
      },
      {
        title: 'Hold my beer',
        description: 'its the eigth review text',
        filmId: '2'
      },
      {
        title: 'Did you see that?',
        description: 'its the nineth review text',
        filmId: '3'
      },
      {
        title: 'Yolo',
        description: 'its the tenth review text',
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
