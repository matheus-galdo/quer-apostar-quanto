import { Participant, Prisma } from "@prisma/client";
import joi from "joi";

type GameSchema = Omit<Participant, 'id' | 'updatedAt' | 'createdAt'>;
export const gameSchema = joi.object<GameSchema>({
    name: joi.string().required(),
    balance: joi.number().required(),
});