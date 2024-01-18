import { Game, GameTeamsNames } from "@/protocols";
import { gamesRepository } from "@/repositories/gamesRepository";

async function getGames() {
    return await gamesRepository.getGames();
}

async function createGame(game: GameTeamsNames) {
    return await gamesRepository.createGame(game);
}

export const gamesService = {
    getGames,
    createGame,
}