import express from 'express';
import { betsController } from '@/controllers';

const betsRouter = express.Router();

betsRouter.post('/', betsController.createBet);

export { betsRouter };
