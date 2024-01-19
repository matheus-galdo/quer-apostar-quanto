import prisma from '@/database';
import { GameTeamsNames } from '@/protocols';

async function getGames() {
    return prisma.game.findMany();
}

async function getGameById(id: number) {
    return prisma.game.findUnique({
        where: { id: id },
        include: { bets: true },
    });

    prisma.game.findOne();
    4 -> 5
}

async function createGame(game: GameTeamsNames) {
    return prisma.game.create({ data: game });
}

export const gamesRepository = {
    getGames,
    createGame,
    getGameById,
};
