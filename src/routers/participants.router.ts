import { participantsController } from '@/controllers';
import express, { Request, Response } from 'express';

const participantsRouter = express.Router();

participantsRouter
    .post('/', participantsController.createParticipant)
    .get('/', participantsController.getParticipants);

export { participantsRouter };