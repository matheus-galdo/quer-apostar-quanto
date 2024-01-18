import joi from 'joi';
import { Game } from '@/protocols';

export const gameSchema = joi.object<Game>({
    homeTeamName: joi.string().required(),
    awayTeamName: joi.string().required(),
});
