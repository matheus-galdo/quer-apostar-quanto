import { Participant } from "@/protocols";
import { Participant as ParticipantPrisma } from "@prisma/client";
import prisma from "@/database";

async function getParticipants() {
    return prisma.participant.findMany();
}

async function getParticipantById(id: number) {
    return prisma.participant.findUnique({
        where: { id: id, }
    });
}

async function createParticipant(participant: Participant) {
    return prisma.participant.create({ data: participant });
}

async function updateParticipant(participant: ParticipantPrisma) {
    return prisma.participant.update({ data: participant, where: { id: participant.id } });
}

export const participantsRepository = {
    getParticipants,
    getParticipantById,
    createParticipant,
    updateParticipant,
}