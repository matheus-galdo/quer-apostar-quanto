import { Request, Response } from "express";
import httpStatus from "http-status";

export function getGames(req: Request, res: Response) {
    return res.send('ok');
}

export function createGame(req: Request, res: Response) {
    return res.status(httpStatus.CREATED).send('ok');
}