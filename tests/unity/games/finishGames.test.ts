import app from "@/app";
import supertest from "supertest";
import { makeIncompleteParticipant, makeParticipant, makeParticipantWithLowFunds } from "../../factories/participantFactory";
import { gamesRepository } from "@/repositories";
import { Bet, Game } from "@prisma/client";
import { gamesService } from "@/services";


describe('gamesService.finishGame ', () => {
    //caminho feliz
    it('Should create a new participant and respond with status 201', async () => {
        jest.spyOn(gamesRepository, 'getGameById').mockImplementationOnce(async (id: number) => {
            const gameFalso: Game & {
                bets: Bet[];
            } = {
                awayTeamName: 'fla',
                homeTeamName: 'flu',
                awayTeamScore: 2,
                homeTeamScore: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
                id: 1,
                isFinished: true,
                bets: [],
            };

            return gameFalso;
        });

        const promise = gamesService.finishGame(1, { awayTeamScore: 2, homeTeamScore: 0 });

        const error = new Error('Jogo já finalizado');
        await expect(promise).rejects.toEqual(error);
    });
});
