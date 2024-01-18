import { Participant, Prisma } from "@prisma/client";
import joi from "joi";

type ParticipantSchema = Omit<Participant, 'id' | 'updatedAt' | 'createdAt'>;
export const participantSchema = joi.object<ParticipantSchema>({
    name: joi.string().required(),
    balance: joi.number().required(),
});