import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Game } from '@/protocols';
import { gamesService } from '@/services';

async function getGames(req: Request, res: Response) {
    const games = await gamesService.getGames();
    return res.status(httpStatus.OK).send(games);
}

async function getGameById(req: Request, res: Response) {
    const { id } = req.params;

    const game = await gamesService.getGameById(Number(id));
    return res.status(httpStatus.OK).send(game);
}

async function createGame(req: Request, res: Response) {
    const { awayTeamName, homeTeamName } = req.body as Game;

    const participant = await gamesService.createGame({ awayTeamName, homeTeamName });
    return res.status(httpStatus.CREATED).send(participant);
}

async function finishGame(req: Request, res: Response) {
    const { id } = req.params;
    const { awayTeamScore, homeTeamScore } = req.body;

    const game = await gamesService.finishGame(id, {awayTeamScore, homeTeamScore});
    return res.status(httpStatus.OK).send(game);
}

export const gamesController = {
    getGames,
    createGame,
    getGameById,
    finishGame,
};
