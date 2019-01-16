'use strict';

// const User = require('../models').User;
// const tokensActions = require('../auth/index');
const tokensActions = require('../auth/tokens-actions');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const hashConfig = require('../auth/config');
const User = require('../models').User;

const options = {
    expiresIn: '2h', 
    issuer: 'Great and Powerfull',
};
const refreshOptions = {
    expiresIn: '5d',
    issuer: 'Great and Powerfull',
};
const secret = hashConfig.JWT_SECRET;
const refreshSecret = hashConfig.jwt_refresh_secret;

module.exports = {
    addUser(req, res) {
        return User
            .upsert({
                login: req.headers.login || req.body.login,
                password: req.headers.password || req.body.password
            })
            .then(() => res.status(201).send('New user has been created'))
            .catch((err) => res.status(400).send('During creation new user an Error occurred: ' + err))        
    },

    showAll(req, res) {
        return User
            .findAll()
            .then(users => res.status(200).send(users))
            .catch((err) => res.status(400).send(err));
    },

    showMyProfile(req, res) {
        const token = req.headers.authorization || req.body.authorization;

        return User
            .findOne({
                where: {
                    accessToken: token
                }
            })
            .then(user => {
                if (user) {
                    tokensActions.isAccessTokenValid(req, res)
                        .then(result => {
                            const { id, login, isAdmin, createdAt, updatedAt } = user.toJSON();
                            const userData =  { id, login, isAdmin, createdAt, updatedAt };
                            const date = (d) => {
                                if (!d) return null;
                                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                                return d.toLocaleDateString('en', options);
                            }
                            res.status(200).send('Welcome Mr. ' + userData.login + '! Your profile was created: ' + date(userData.createdAt) + '. Last modified: ' + date(userData.updatedAt));
                        })
                        .catch(err => res.status(500).send('Error during access token validation in showMyProfile method. ' + err))
                } else {
// add here redirection to /login route in front-end
                    return res.status(401).send('You are not authenticated. You will be redirected to log in page')
                }
            })
    },

    updatePassword(req, res) {
        const token = req.headers.authorization || req.body.authorization;
        const password = req.headers.password || req.body.password;

        return User
            .findOne({
                where: {
                    accessToken: token
                }
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send('You need to be loged in to update password');
                }
                tokensActions.isAccessTokenValid(req, res)
                    .then(result => {
                        console.log('мы здесь');
                        if (result.status) {
                            return user
                                .update({
                                    password: password
                                })
                                .then(() => res.status(200).send('Your password was updated successfully'))
                                .catch(err => res.status(400).send('An error ocured during password update. ' + err))
                        } else {
                            return res.status(401).send('Your access token isn\'t valid. Try to refresh it or go to log in page');
                        }
                    })
            })
            .catch(err => res.status(400).send('Error during password update occured. ' + err))
    },

    login(req, res, next) {
        tokensActions.login(req, res)
            .then(result => {
                if (result) {
                    tokensActions.emitTokens(req, res)
                        .then((tokensObject) => {
                            const access = res.access = tokensObject.token;
                            const refresh = res.refreshToken = tokensObject.refreshToken;

                            res.status(200).send({
                                access: access, 
                                refresh: refresh
                            })
                        })
                        .catch(next)
                } else {
                    res.send('Login or password is wrong. Try again');
                }
            })
            .catch(next)
    },

    logout(req, res, next) {
        const token = req.headers.authorization || req.body.authorization;

        return User
            .findOne({
                where: {
                    accessToken: token
                }
            })
            .then(user => {
                if (!user) {
                    return res.status(401).send('You are not logged in. So you can not logout. Go to log in page');
                }
                tokensActions.isAccessTokenValid(req, res)
                    .then(result => {
                        if (result.status) {
                            
                            return user
                                .update({
                                    accessToken: '',
                                    refreshToken: ''
                            })
// add here redirection to / route in front-end
                            .then(() => res.status(200).send('Successfully logged out'))
                            .catch(err => res.status(500).send('Error during logging out occured. ' + err))
                        } else {
                            return res.status(401).send('Access token is not valid. Try to refresh it or go to log in page')
                        }
                    })
                    .catch(err => res.status(500).send('Error during validation access token in logout method. ' + err))
            })
            .catch(err => res.status(500).send('Error during finding access token in DB in logout method. ' + err))
    },

    refreshTokens(req, res, next) {
        tokensActions.isRefreshTokenValid(req, res)
            .then(result => {
                if (result.status) {
                    tokensActions.emitTokens(req, res)
                        .then(tokensObject => {
                            const access = res.access = tokensObject.token;
                            const refresh = res.refreshToken = tokensObject.refreshToken;

                            res.status(200).send({
                                access: access, 
                                refresh: refresh
                            });
                        })
                        .catch(next)
                } else {
// add here redirection to /login route in front-end
                    res.status(401).send('Provided refresh token is not valid. You will be redirected to log in page.');
                }
            })
            .catch(next)
    },

    isAdmin(req, res, next) {
        const token = req.headers.authorization || req.body.authorization;

        return User
            .findOne({
                where: {
                    accessToken: token
                }
            })
            .then(user => {
                if (!user) {
                    res.status(401).send('You are not logged in. Go to log in page')
                }
                if (user.isAdmin) {
                    next();
                    return true
                }
                return false
            })
            .catch(next)
    },

    validateToken(req, res, next) {
        let result;
        const token = req.headers.authorization || req.body.authorization;

        if (token) {
            try {
                result = jwt.verify(token, secret, options);
                res.isAdmin = result.isAdmin;
                console.log(result);
                next();
            }
            catch(err) {
                result = {
                    error: `Your token has been expired. Go to login page to authentication`,
                    code: 401
                };
                res.status(result.code).send(result);
            }
        } else {
            result = {
                error: `Authentication error. Token required.`,
                code: 401
            };
            res.status(result.code).send(result);
        }
    }
}