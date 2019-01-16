'use strict';

const Review = require('../models').Review;

module.exports = {
    create(req, res) {
        return Review
                .upsert({
                    title: req.body.title,
                    description: req.body.description,
                    filmId: req.body.filmId
                })
                .then(review => res.status(201).send('Created new Review: \n' + review))
                .catch(err => res.status(400).send('Error occurred: ' + err));
    },

    readAll(req, res) {
        return Review
                .findAll()
                .then(reviews => res.status(200).send(reviews))
                .catch(err => res.status(400).send('Error occurred: ' + err));
    },

    readOne(req, res) {
        return Review
                .findByPk(req.params.id)
                .then(review => {
                    if (!review) {
                        return res.status(404).send('Review with id: ' + req.params.id + ' wasn\'t found');
                    }
                    res.status(200).send(review);
                })
                .catch(err => res.status(400).send('Error occurred: ' + err));
    },

    update(req, res) {
        return Review
                .findByPk(req.params.id)
                .then(review => {
                    if (!review) {
                        return res.status(404).send('Review with id: ' + req.params.id + ' wasn\'t found');
                    }
                    return review
                        .update({
                            title: req.body.title,
                            description: req.body.description,
                            filmId: req.body.filmId
                        })
                        .then(() => res.status(200).send('Successfuly updated Review with id: ' + req.params.id))
                        .catch((err) => res.status(400).send('Error occurred: ' + err));
                })
                .catch((err) => res.status(400).send('Error occurred: ' + err));
    },

    delete(req, res) {
        return Review
                .findByPk(req.params.id)
                .then(review => {
                    if (!review) {
                        return res.status(404).send('Review with id: ' + req.params.id + ' wasn\'t found');
                    }
                    return review
                            .destroy()
                            .then(() => res.status(204).send('Successfuly deleted Review with id: ' + req.params.id))
                            .catch(err => res.status(400).send('Error occurred: ' + err));
                })
                .catch(err => res.status(400).send('Error occurred: ' + err));
    }
}