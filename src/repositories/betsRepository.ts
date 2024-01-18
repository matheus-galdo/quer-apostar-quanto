import { Bet } from "@/protocols";
import prisma from "@/database";

async function createBet(bet: Bet) {
    return prisma.bet.create({data: bet});
}

export const betsRepository = {
    createBet,
}