import { NextFunction, Request, Response } from "express";
import { ClientService } from '../../services/v1/ClientService';

export class ClientController {
    
    public getClients(req: Request, res: Response, next: NextFunction): void {

        const clientService = new ClientService();
        res.status(200).json(clientService.searchClients());
    }
}