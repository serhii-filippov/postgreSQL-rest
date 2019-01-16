'use strict';

const Film = require('../models').Film;

module.exports = {
    create(req, res) {
        return Film
                .upsert({
                    title: req.body.title,
                    release_date: req.body.release_date,
                    genreId: req.body.genreId
                })
                .then(film => res.status(201).send('Created new film: \n' + film))
                .catch(err => res.status(400).send('Error occurred: ' + err))
    },

    readAll(req, res) {
        return Film
                .findAll()
                .then(films => res.status(200).send(films))
                .catch(err => res.status(404).send(err))
    },

    readOne(req, res) {
        return Film
                .findByPk(req.params.id)
                .then(film => {
                    if (!film) {
                        return res.status(404).send('Film with id: ' + req.params.id + ' was not found')
                    }
                    res.status(200).send(film);
                })
                .catch(err => res.status(400).send('Error occurred: ' + err))
    },

    update(req, res) {
        return Film
                .findByPk(req.params.id)
                .then(film => {
                    if (!film) {
                        return res.status(404).send('Film with id: ' + req.params.id + ' wasn\'t found')
                    }
                    return film
                            .update({
                                title: req.body.title,
                                release_date: req.body.release_date,
                                genreId: req.body.genreId
                            })
                            .then(() => res.status(200).send('Film with id: ' + req.params.id + ' was updated'))
                            .catch(err => res.status(400).send('Error occurred: ' + err))
                })
                .catch(err => res.status(400).send('Error occurred: ' + err));
    },

    delete(req, res) {
        return Film
                .findByPk(req.params.id)
                .then(film => {
                    if (!film) {
                        return res.status(404).send('Film with id: ' + req.params.id + ' was not found')
                    }
                    return film
                            .destroy()
                            .then(() => res.status(204).send('Successfuly deleted Actor with id: ' + req.params.id))
                            .catch(err => res.status(400).send('Error occurred: ' + err))
                })
                .catch(err => res.status(400).send('Error occurred: ' + err))
    }
}