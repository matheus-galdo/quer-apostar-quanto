import joi from 'joi';
import { Participant } from '@/protocols';

export const participantSchema = joi.object<Participant>({
    name: joi.string().required(),
    balance: joi.number().required(),
});
