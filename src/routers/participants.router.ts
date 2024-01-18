import express, { Request, Response } from 'express';

const participantsRouter = express.Router();

participantsRouter
    .post('/', (req: Request, res: Response) => res.send('Ok!'))
    .get('/', (req: Request, res: Response) => res.send('Ok!'));

export { participantsRouter };