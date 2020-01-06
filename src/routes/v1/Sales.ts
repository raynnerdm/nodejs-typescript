import { IRouterApi } from "../../classes/interfaces/IRouterApi";
import * as express from 'express';
import { SalesController } from "../../controllers/v1/SalesController";

class SalesRouter implements IRouterApi {

    getRouter(): express.Router {

        const salesController = new SalesController();

        let router = express.Router();
        router.route('/').get(salesController.buy);

        return router;
    }
}

export default new SalesRouter();