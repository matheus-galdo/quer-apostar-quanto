import express from 'express';
import { gamesController } from '@/controllers';
import { validateBody, validateRouteParams } from '@/middlewares';
import { gameSchema } from '@/schemas/gameSchema';
import { routeParamSchema } from '@/schemas/routeParamSchema';

const gamesRouter = express.Router();

gamesRouter
    .get('/', gamesController.getGames)
    .post('/', validateBody(gameSchema), gamesController.createGame)
    .get('/:id', validateRouteParams(routeParamSchema), gamesController.getGameById);

export { gamesRouter };
