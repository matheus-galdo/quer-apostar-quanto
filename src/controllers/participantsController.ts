import { Participant } from "@/protocols";
import { participantsService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function getParticipants(req: Request, res: Response) {
    const participants = await participantsService.getParticipants();
    return res.status(httpStatus.OK).send(participants);
}

async function createParticipant(req: Request, res: Response) {
    const { name, balance } = req.body as Participant;

    const participant = await participantsService.createParticipant({ name, balance });
    return res.status(httpStatus.CREATED).send(participant);
}

export const participantsController = {
    getParticipants,
    createParticipant,
}