'use strict';

const actorsController = require('../controllers').actors;
const rolesController = require('../controllers').roles;
const filmsController = require('../controllers').films;
const genresController = require('../controllers').genres;
const rewardsController = require('../controllers').rewards;
const reviewsController = require('../controllers').reviews;
const usersController = require('../controllers').users;
const validateToken = require('../auth/tokens-actions').validateToken;
const ServerError = require('../util/errors').ServerError;
const winstonLogger = require('../util/errors').winstonLogger;

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send('Welcome to the Films library REST API');
    });

    app.post('/actors', actorsController.create);
    app.get('/actors', actorsController.readAll);
    app.get('/actors/:id', actorsController.readOne);
    app.put('/actors/:id', actorsController.update);
    app.delete('/actors/:id', actorsController.delete);

    app.post('/roles', rolesController.create);
    app.get('/roles', rolesController.readAll);
    app.get('/roles/:id', rolesController.readOne);
    app.put('/roles/:id', rolesController.update);
    app.delete('/roles/:id', rolesController.delete);

    app.post('/films', filmsController.create);
    app.get('/films', filmsController.readAll);
    app.get('/films/:id', filmsController.readOne);
    app.put('/films/:id', filmsController.update);
    app.delete('/films/:id', filmsController.delete);

    app.post('/genres', genresController.create);
    app.get('/genres', genresController.readAll);
    app.get('/genres/:id', genresController.readOne);
    app.put('/genres/:id', genresController.update);
    app.delete('/genres/:id', genresController.delete);

    app.post('/rewards', rewardsController.create);
    app.get('/rewards', rewardsController.readAll);
    app.get('/rewards/:id', rewardsController.readOne);
    app.put('/rewards/:id', rewardsController.update);
    app.delete('/rewards/:id', rewardsController.delete);

    app.post('/reviews', reviewsController.create);
    app.get('/reviews', reviewsController.readAll);
    app.get('/reviews/:id', reviewsController.readOne);
    app.put('/reviews/:id', reviewsController.update);
    app.delete('/reviews/:id', reviewsController.delete);

    app.post('/user', usersController.addUser);
    app.post('/user/login', usersController.login);
    app.post('/user/refresh-token', usersController.refreshTokens);
    app.get('/user', validateToken, usersController.showMyProfile);
    app.get('/users', validateToken, usersController.isAdmin, usersController.showAll);
    app.put('/user', usersController.updatePassword);
    app.get('/user/logout', usersController.logout);

    app.use(ServerError.handle404Error);
    app.use(ServerError.errorLogger);
    app.use(ServerError.winstonLogging);
    app.use(ServerError.errorHandler);
}