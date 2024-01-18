import { Request, Response } from "express";
import httpStatus from "http-status";

export function getParticipants(req: Request, res: Response) {
    return res.send('ok');
}

export function createParticipant(req: Request, res: Response) {
    return res.status(httpStatus.CREATED).send('ok');
}