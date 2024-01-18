import { notFoundError } from "@/errors";
import { notEnoughBalanceError } from "@/errors";
import { Bet } from "@/protocols";
import { betsRepository, gamesRepository, participantsRepository } from "@/repositories";

async function createBet(bet: Bet) {
    const participant = await participantsRepository.getParticipantById(bet.participantId);
    const game = await gamesRepository.getGameById(bet.gameId);
    
    if (!participant) {
        throw notFoundError(`participant`);
    }

    if (!game) {
        throw notFoundError(`game`);
    }

    if (participant.balance < bet.amountBet) {
        throw notEnoughBalanceError();
    }
    
    participant.balance = participant.balance - bet.amountBet;

    await participantsRepository.updateParticipant(participant);
    return await betsRepository.createBet(bet);
}

export const betsService = {
    createBet,
}