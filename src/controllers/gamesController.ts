import { gamesService } from "@/services/gamesService";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function getGames(req: Request, res: Response) {
    const games = await gamesService.getGames();
    return res.status(httpStatus.OK).send(games);
}

function createGame(req: Request, res: Response) {
    return res.status(httpStatus.CREATED).send('ok');
}

export const gamesController = {
    getGames,
    createGame,
}