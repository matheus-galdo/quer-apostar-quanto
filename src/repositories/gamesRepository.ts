import prisma from "@/database";
import { Game, GameTeamsNames } from "@/protocols";

async function getGames() {
    return prisma.game.findMany();
}

async function getGameById(id: number) {
    return prisma.game.findUnique({
        where: { id: id, },
        include: { bets: true },
    });
}

async function createGame(game: GameTeamsNames) {
    return prisma.game.create({ data: game });
}

export const gamesRepository = {
    getGames,
    createGame,
    getGameById,
}