import { Participant } from './../contracts/EntityContracts';
import { participantsService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export function getParticipants(req: Request, res: Response) {
    return res.send('ok');
}

export async function createParticipant(req: Request, res: Response) {
    const { name, balance } = req.body as Participant;

    const participant = await participantsService.createParticipant({ name, balance });
    return res.status(httpStatus.CREATED).send(participant);
}