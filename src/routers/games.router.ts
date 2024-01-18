import express, { Request, Response } from 'express';

const gamesRouter = express.Router();

gamesRouter
    .post('/', (req: Request, res: Response) => res.send('Ok!'))
    .get('/', (req: Request, res: Response) => res.send('Ok!'));

export { gamesRouter };