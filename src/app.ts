import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errorHandlerMiddleware } from '@/middlewares';
import {
    healthRouter,
    participantsRouter,
    gamesRouter,
    betsRouter
} from '@/routers';

const app = express();

app
    .use(express.json())
    .use(cors())
    .use('/health', healthRouter)
    .use('/participants', participantsRouter)
    .use('/games', gamesRouter)
    .use('/bets', betsRouter)
    .use(errorHandlerMiddleware);

export default app;
