import { Participant } from "@/contracts/EntityContracts";
import { participantsRepository } from "@/repositories";


async function createParticipant(participant: Participant) {
    if (participant.balance < 1000) {
        throw new Error('Invalid Balance Amount');
    }

    return await participantsRepository.createParticipant(participant);
}

export const participantsService = {
    createParticipant,
}