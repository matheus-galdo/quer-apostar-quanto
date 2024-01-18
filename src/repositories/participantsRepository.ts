import { Participant } from "@/contracts/EntityContracts";
import prisma from "@/database";

async function createParticipant(participant: Participant) {
    return prisma.participant.create({data: participant});
}

export const participantsRepository = {
    createParticipant,
}