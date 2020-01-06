import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { Utility } from './classes/helpers/utility';

class App {

    public express: express.Application;

    constructor() {

        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {

        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        this.setAllRoutes();
        this.setDefaultRoute();
    }

    private setAllRoutes(): void {

        const utility = new Utility();
        let arrayFileRoutes = utility.readRecursiveDirectory('routes');

        arrayFileRoutes.forEach(file => {

            let routeInstance = require(`./${file.replace(/\.[^/.]+$/, '')}`);
            let fn = file.replace('routes', '').split('\\').join('/').replace(/\.[^/.]+$/, '');

            this.express.use(fn, routeInstance.default.getRouter());
            console.log(`Route ${fn} --> OK`);
        });
    }

    private setDefaultRoute(): void {

        this.express.get('/api', (req, res, next) => {

            res.status(200).json({
                title: 'API Test',
                version: '1.0.0',
                path: '/api/v1'
            });
        });
    }
}

export default new App().express;