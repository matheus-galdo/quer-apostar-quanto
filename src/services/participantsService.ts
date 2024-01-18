import { invalidParticipantBalanceAmount } from "@/errors";
import { Participant } from "@/protocols";
import { participantsRepository } from "@/repositories";

async function createParticipant(participant: Participant) {
    if (participant.balance < 1000) {
        console.log('aqui');
        
        throw invalidParticipantBalanceAmount();
    }

    return await participantsRepository.createParticipant(participant);
}

export const participantsService = {
    createParticipant,
}