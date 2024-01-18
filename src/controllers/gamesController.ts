import { Game } from "@/protocols";
import { gamesService } from "@/services/gamesService";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function getGames(req: Request, res: Response) {
    const games = await gamesService.getGames();
    return res.status(httpStatus.OK).send(games);
}

async function createGame(req: Request, res: Response) {
    const { awayTeamName, homeTeamName } = req.body as Game;

    const participant = await gamesService.createGame({ awayTeamName, homeTeamName });
    return res.status(httpStatus.CREATED).send(participant);
}

export const gamesController = {
    getGames,
    createGame,
}