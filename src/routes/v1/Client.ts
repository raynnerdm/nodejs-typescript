import * as express from 'express';
import { ClientController } from '../../controllers/v1/ClientController';
import { IRouterApi } from '../../classes/interfaces/IRouterApi';

class ClientRouter implements IRouterApi {

    public getRouter(): express.Router {

        const clientController = new ClientController();
        
        let router = express.Router();
        router.route('/').get(clientController.getClients);

        return router;
    }
}

export default new ClientRouter();