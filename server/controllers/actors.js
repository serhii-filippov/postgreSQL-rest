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
            .then(actor => res.status(201).send(actor))
            .catch(error => res.status(400).send(error));
    },

    read(req, res) {
        return Actor
            .all()
            .then(actors => res.status(200).send(actor))
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return Actor
            .findById(req.params.id)
            .then(actor => {
                if (!actor) {
                    res.status(404).send('Actor with id: ' + req.params.id + ' wasn\'t found');
                }
                return actor
                    .update({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        birth_year: req.body.birth_year,
                        birthplace: req.body.birthplace
                    })
                    .then(() => res.status(200).send(actor))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(res, req) {
        return Actor
            .findById(req.params.id)
            .then(actor => {
                if (!actor) {
                    res.status(404).send('Actor with id: ' + req.params.id + ' wasn\'t found');
                }
                return actor
                    .destroy()
                    .then(() => res.status(204).send('Successfuly deleted Actor with id: ' + req.params.id))
                    .catch(error => res.status(400).send(error));
            })
            .catch(err => res.status(400).send(err));
    }
}