'use strict';

const actorsController = require('../controllers').actors;

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send('Welcome to the Film\'s REST API');
    });

    app.post('actors', actorsController.create);
    app.get('/actors', actorsController.read);
    app.put('/actors/:id', actorsController.update);
    app.delete('/actors/:id', actorsController.delete);
}