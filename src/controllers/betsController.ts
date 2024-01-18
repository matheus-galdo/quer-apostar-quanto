import { Request, Response } from "express";
import httpStatus from "http-status";

export function getBets(req: Request, res: Response) {
    return res.send('ok');
}

export function createBet(req: Request, res: Response) {
    return res.status(httpStatus.CREATED).send('ok');
}