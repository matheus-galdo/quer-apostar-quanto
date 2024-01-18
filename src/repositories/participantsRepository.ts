import { Participant } from "@/protocols";
import prisma from "@/database";

async function getParticipants() {
    return prisma.participant.findMany();
}

async function createParticipant(participant: Participant) {
    return prisma.participant.create({data: participant});
}

export const participantsRepository = {
    createParticipant,
    getParticipants,
}