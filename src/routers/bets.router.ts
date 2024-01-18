import express, { Request, Response } from 'express';

const betsRouter = express.Router();

betsRouter
    .post('/', (req: Request, res: Response) => res.send('Ok!'))
    .get('/', (req: Request, res: Response) => res.send('Ok!'));

export { betsRouter };