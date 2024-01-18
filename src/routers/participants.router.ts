import { participantsController } from '@/controllers';
import express, { Request, Response } from 'express';

const participantsRouter = express.Router();

participantsRouter
    .post('/', participantsController.createParticipant)
    .get('/', (req: Request, res: Response) => res.send('Ok!'));

export { participantsRouter };