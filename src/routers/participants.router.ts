import express from 'express';
import { participantsController } from '@/controllers';
import { participantSchema } from '@/schemas';
import { validateBody } from '@/middlewares';

const participantsRouter = express.Router();

participantsRouter
    .post('/', validateBody(participantSchema), participantsController.createParticipant)
    .get('/', participantsController.getParticipants);

export { participantsRouter };
