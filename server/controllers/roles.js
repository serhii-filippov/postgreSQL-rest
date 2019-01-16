'use strict';

const Role = require('../models').Role;
const Actor = require('../models').Actor;
const Film = require('../models').Film;

module.exports = {
    create(req, res) {
        return Role
                .upsert({
                    name: req.body.name,
                    description: req.body.description,
                    actorId: req.body.actorId,
                    filmId: req.body.filmId,
                })
                .then(role => res.status(201).send('Created a role: \n' + role))
                .catch(err => res.status(400).send('Error occurred: ' + err))
    },

    readAll(req, res) {
        return Role
                .findAll()
                .then(roles => res.status(200).send(roles))
                .catch(err => res.status(400).send('Error occurred: ' + err))
    },

    readOne(req, res) {
        return Role
                .findAll({
                    where: {
                        id: req.params.id
                    },
                    include: [
                        { model: Actor },
                        { model: Film }
                    ]
                })
                .then(role => {
                    if (!role) {
                        return res.status(404).send('Role with id: ' + req.params.id + ' wasn\'t found');
                    }
                    res.status(200).send(role)
                })
                .catch(err => res.status(400).send('Error occurred: ' + err))
    },

    update(req, res) {
        return Role
                .findByPk(req.params.id)
                .then(role => {
                    if (!role) {
                        return res.status(404).send('Role with id: ' + req.params.id + ' wasn\'t found')
                    }
                    return role
                            .update({
                                name: req.body.name,
                                description: req.body.description,
                                actorId: req.body.actorId,
                                filmId: req.body.filmId,
                            })
                            .then(role => res.status(200).send('Role with id: ' + req.params.id + ' was updated'))
                            .catch(err => res.status(400).send('Error occurred: ' + err))
                }).
                catch(err => res.status(400).send('Error occurred: ' + err))
    },

    delete(req, res) {
        return Role
                .findByPk(req.params.id)
                .then(role => {
                    if (!role) {
                        return res.status(404).send('Role with id: ' + req.params.id + ' wasn\'t found')
                    }
                    return role
                            .destroy()
                            .then(() => res.status(200).send('Successfuly deleted Actor with id: ' + req.params.id))
                            .catch(err => res.status(400).send('Error occurred: ' + err))
                })
                .catch(err => res.status(400).send('Error occurred: ' + err))
    }

}