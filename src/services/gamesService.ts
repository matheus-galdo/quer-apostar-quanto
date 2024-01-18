import { gamesRepository } from "@/repositories/gamesRepository";

async function getGames() {
    return await gamesRepository.getGames();
}

export const gamesService = {
    getGames,
}