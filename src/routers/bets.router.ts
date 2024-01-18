import { betsController } from '@/controllers';
import express, { Request, Response } from 'express';

const betsRouter = express.Router();

betsRouter
    .post('/', betsController.createBet)

export { betsRouter };