import { notFoundError } from "@/errors";
import { Game, GameTeamsNames } from "@/protocols";
import { gamesRepository } from "@/repositories/gamesRepository";

async function getGames() {
    return await gamesRepository.getGames();
}

async function getGameById(id: number) {
    const game = await gamesRepository.getGameById(id);

    if (!game) {
        throw notFoundError('Game not found');
    }

    return game;
}

async function createGame(game: GameTeamsNames) {
    return await gamesRepository.createGame(game);
}

export const gamesService = {
    getGames,
    createGame,
    getGameById,
}