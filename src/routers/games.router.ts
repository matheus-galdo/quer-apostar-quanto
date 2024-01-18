import { gamesController } from '@/controllers';
import express, { Request, Response } from 'express';

const gamesRouter = express.Router();

gamesRouter
    .get('/', gamesController.getGames)
    .post('/', (req: Request, res: Response) => res.send('Ok!'));

export { gamesRouter };