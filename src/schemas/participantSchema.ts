import { ParticipantType } from "@/contracts/EntityContracts";
import joi from "joi";

export const participantSchema = joi.object<ParticipantType>({
    name: joi.string().required(),
    balance: joi.number().required(),
});