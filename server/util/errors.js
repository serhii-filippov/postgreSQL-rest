'use strict';

const winston = require('winston');
const winstonLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {service: 'user-service'},
  transports: [
    new winston.transports.File({
        filename: '../logs/error.log',
        level: 'error' 
    }),
    new winston.transports.File({
        filename: '../logs/combined.log'
    })
  ]
});

// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (process.env.NODE_ENV !== 'production') {
//   winstonLogger.add(new winston.transports.Console({
//     format: winston.format.simple()
//   }));
}

class ServerError extends Error {
    constructor(code, name, message, route) {
        super();
        this.code = code || null;
        this.name = name || null;
        this.message = message || null;
        this.route = route || null;
    }

    static handle404Error(req, res, next) {
        const route = req.originalUrl;
        // this.route = route;

        next(new ServerError(404, 'Page not found', 'Page you requested was not found', route))
    }

    static errorLogger(err, req, res, next) {
        const isServerError = err instanceof ServerError;
        const route = req.originalUrl;
        // this.route = route;

        if (isServerError) {
            console.log('Date: ' + new Date().toUTCString() + '; error code: ' + err.code + '; error name: ' + err.name + '; route: ' + err.route);
            next(err)
        } else {
            console.log(new Date().toUTCString() + ' ' + err);
            next(new ServerError(500, 'Internal server error', 'Server is currently unable to handle your request'));
        }
    }

    static errorHandler(err, req, res, next) {
        const status = err.code || 500;
        res.status(status).json(err);  
    }
    
    static winstonLogging(err, req, res, next){
        winstonLogger.log({
            level: 'error', 
            message: 'privet'
        });
        next(err)
    }
}
module.exports = { ServerError, winstonLogger }