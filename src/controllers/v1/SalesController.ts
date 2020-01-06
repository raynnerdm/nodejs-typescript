import { NextFunction, Request, Response } from "express";

export class SalesController {

    public buy(req: Request, res: Response, next: NextFunction): void {

        res.status(200).json({
            message: 'Venda'
        });
    }
}