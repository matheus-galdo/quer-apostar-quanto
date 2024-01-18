import { notFoundError } from '@/errors';
import { GameTeamsNames } from '@/protocols';
import { gamesRepository } from '@/repositories';

async function getGames() {
    return await gamesRepository.getGames();
}

async function getGameById(id: number) {
    const game = await gamesRepository.getGameById(id);

    if (!game) {
        throw notFoundError('game');
    }

    return game;
}

async function createGame(game: GameTeamsNames) {
    return await gamesRepository.createGame(game);
}

async function finishGame(id: number, {awayTeamScore, homeTeamScore}) {
    //id 
    //checar no banco de dados se esse jogo foi finalizado

    const game = await gamesRepository.getGameById(id); //mock
    if (game.isFinished) {
        throw new Error('Jogo já finalizado');
    }
    //se foi finalizado, lançar um erro

    return;
}

export const gamesService = {
    getGames,
    createGame,
    getGameById,
    finishGame,
};
