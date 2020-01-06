import { NextFunction, Request, Response } from "express";

export class ClientController {
    
    public getClients(req: Request, res: Response, next: NextFunction): void {

        res.status(200).json({
            message: 'Cliente'
        });
    }
}