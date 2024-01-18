import { Participant } from '@prisma/client';
import joi from 'joi';

type BetSchema = Omit<Participant, 'id' | 'updatedAt' | 'createdAt'>;
export const betSchema = joi.object<BetSchema>({
    name: joi.string().required(),
    balance: joi.number().required(),
});
