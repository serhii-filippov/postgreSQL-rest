'use strict';

const Genre = require('../models').Genre;

module.exports = {
    create(req, res) {
        return Genre
                .upsert({
                    name: req.body.name,
                    description: req.body.description
                })
                .then(genre => res.status(201).send('New Genre has been created'))
                .catch(err => res.status(400).send('Error occurred: ' + err))
    },

    readAll(req, res) {
        return Genre
                .findAll()
                .then(genres => res.status(200).send(genres))
                .catch(err => res.status(400).send('Error occurred: ' + err));
    },

    readOne(req, res) {
        return Genre
                .findByPk(req.params.id)
                .then(genre => {
                    if (!genre) {
                        return res.status(404).send('Genre with id: ' + req.params.id + ' wasn\'t found');
                    }
                    res.status(200).send(genre);
                })
                .catch(err => res.status(400).send('Error occurred: ' + err));
    },

    update(req, res) {
        return Genre
                .findByPk(req.params.id)
                .then(genre => {
                    if (!genre) {
                        return res.status(404).send('Genre with id: ' + req.params.id + ' wasn\'t found')
                    }
                    return genre
                            .update({
                                name: req.body.name,
                                description: req.body.description
                            })
                            .then(() => res.status(200).send('Genre with id: ' + req.params.id + ' was updated'))
                            .catch(err => res.status(400).send('Error occurred: ' + err));
                })
                .catch(err => res.status(400).send('Error occurred: ' + err));
    },

    delete(req, res) {
        return Genre
                .findByPk(req.params.id)
                .then(genre => {
                    if (!genre) {
                        return res.status(404).send('Genre with id: ' + req.params.id + ' wasn\'t found')
                    }
                    return genre
                            .destroy()
                            .then(() => res.status(204).send('Successfuly deleted Genre with id: ' + req.params.id))
                            .catch(err => res.status(400).send('Error occurred: ' + err))
                })
                .catch(err => res.status(400).send('Error occurred: ' + err))
    }
}