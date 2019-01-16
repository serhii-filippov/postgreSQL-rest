'use strict';

const Reward = require('../models').Reward;

module.exports = {
    create(req, res) {
        return Reward
                .upsert({
                    name: req.body.name,
                    date: req.body.date,
                    filmId: req.body.filmId
                })
                .then(reward => res.status(201).send('Created new Reward: \n' + reward))
                .catch(err => res.status(400).send('Error occurred: ' + err));
    },

    readAll(req, res) {
        return Reward
                .findAll()
                .then(rewards => res.status(200).send(rewards))
                .catch(err => res.status(400).send('Error occurred: ' + err));
    },

    readOne(req, res) {
        return Reward
                .findByPk(req.params.id)
                .then(reward => {
                    if (!reward) {
                        return res.status(404).send('Reward with id: ' + req.params.id + ' wasn\'t found');
                    }
                    res.status(200).send(reward);
                })
                .catch(err => res.status(400).send('Error occurred: ' + err));
    },

    update(req, res) {
        return Reward
                .findByPk(req.params.id)
                .then(reward => {
                    if (!reward) {
                        return res.status(404).send('Reward with id: ' + req.params.id + ' wasn\'t found');
                    }
                    return reward
                        .update({
                            name: req.body.name,
                            date: req.body.date,
                            filmId: req.body.filmId
                        })
                        .then(() => res.status(200).send('Successfuly updated Reward with id: ' + req.params.id))
                        .catch((err) => res.status(400).send('Error occurred: ' + err));
                })
                .catch((err) => res.status(400).send('Error occurred: ' + err));
    },

    delete(req, res) {
        return Reward
                .findByPk(req.params.id)
                .then(reward => {
                    if (!reward) {
                        return res.status(404).send('Reward with id: ' + req.params.id + ' wasn\'t found');
                    }
                    return reward
                            .destroy()
                            .then(() => res.status(204).send('Successfuly deleted Reward with id: ' + req.params.id))
                            .catch(err => res.status(400).send('Error occurred: ' + err));
                })
                .catch(err => res.status(400).send('Error occurred: ' + err));
    }
}