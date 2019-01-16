'use stict';

const actors = require('../controllers/actors');
const roles = require('../controllers/roles');
const films = require('../controllers/films');
const genres = require('../controllers/genres');
const rewards = require('../controllers/rewards');
const reviews = require('../controllers/reviews');
const users = require('../controllers/users');

module.exports = {
    actors, roles, films, genres, rewards, reviews, users
};