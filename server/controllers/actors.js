'use strict';

const Actor = require('../models').Actor;

module.exports = {
    create(req, res) {
        return Actor
                .upsert({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    birth_year: req.body.birth_year,
                    birthplace: req.body.birthplace
                })
                .then(actor => res.status(201).send('Created new actor: \n' + actor))
                .catch(error => res.status(400).send('Error occurred: ' + error));
    },

    readAll(req, res) {
        return Actor
                .findAll()
                .then(actors => res.status(200).send(actors))
                .catch(error => res.status(400).send('Error occurred: ' + error));
    },

    readOne(req, res) {
        return Actor
                .findByPk(req.params.id)
                .then(actor => {
                    if (!actor) {
                        return res.status(404).send('Actor with id: ' + req.params.id + ' wasn\'t found');
                    }
                    res.status(200).send(actor);
                })
                .catch(err => res.status(400).send('Error occurred: ' + err));
    },

    update(req, res) {
        return Actor
                .findByPk(req.params.id)
                .then(actor => {
                    if (!actor) {
                        return res.status(404).send('Actor with id: ' + req.params.id + ' wasn\'t found');
                    }
                    return actor
                        .update({
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            birth_year: req.body.birth_year,
                            birthplace: req.body.birthplace
                        })
                        .then(() => res.status(200).send(actor))
                        .catch((error) => res.status(400).send('Error occurred: ' + error));
                })
                .catch((error) => res.status(400).send('Error occurred: ' + error));
    },

    delete(req, res) {
        return Actor
                .findByPk(req.params.id)
                .then(actor => {
                    if (!actor) {
                        return res.status(404).send('Actor with id: ' + req.params.id + ' wasn\'t found');
                    }
                    return actor
                            .destroy()
                            .then(() => res.status(204).send('Successfuly deleted Actor with id: ' + req.params.id))
                            .catch(error => res.status(400).send('Error occurred: ' + error));
                })
                .catch(err => res.status(400).send('Error occurred: ' + err));
    }
}