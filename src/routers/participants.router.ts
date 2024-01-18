import express from 'express';
import { participantsController } from '@/controllers';

const participantsRouter = express.Router();

participantsRouter.post('/', participantsController.createParticipant).get('/', participantsController.getParticipants);

export { participantsRouter };
