import { Request, Response } from "express";
import httpStatus from "http-status";

function getGames(req: Request, res: Response) {
    return res.send('ok');
}

function createGame(req: Request, res: Response) {
    return res.status(httpStatus.CREATED).send('ok');
}

export const gamesController = {
    getGames,
    createGame,
}