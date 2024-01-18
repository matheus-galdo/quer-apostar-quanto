import { gamesController } from '@/controllers';
import { validateSchemaMiddleware } from '@/middlewares';
import { gameSchema } from '@/schemas/gameSchema';
import express, { Request, Response } from 'express';

const gamesRouter = express.Router();

gamesRouter
    .get('/', gamesController.getGames)
    .post('/', validateSchemaMiddleware(gameSchema), gamesController.createGame);

export { gamesRouter };