import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Bet } from '@/protocols';
import { betsService } from '@/services';

export async function createBet(req: Request, res: Response) {
    const { amountBet, awayTeamScore, gameId, homeTeamScore, participantId } = req.body as Bet;

    const bet = await betsService.createBet({ amountBet, awayTeamScore, gameId, homeTeamScore, participantId });
    return res.status(httpStatus.CREATED).send(bet);
}

export const betsController = {
    createBet,
};
