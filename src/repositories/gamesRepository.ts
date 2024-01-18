import prisma from "@/database";

async function getGames() {
    return prisma.game.findMany();
}

export const gamesRepository = {
    getGames,
}