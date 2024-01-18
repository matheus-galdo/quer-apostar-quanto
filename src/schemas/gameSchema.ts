import { Game } from "@/protocols";
import joi from "joi";

export const gameSchema = joi.object<Game>({
    homeTeamName: joi.string().required(),
    awayTeamName: joi.string().required()
});