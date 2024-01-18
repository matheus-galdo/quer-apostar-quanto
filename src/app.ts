import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errorHandlerMiddleware } from '@/middlewares';
import { healthRouter, participantsRouter } from '@/routers';

const app = express();

app
    .use(express.json())
    .use(cors())
    .use('/health', healthRouter)
    .use('/participants', participantsRouter)
    .use('/games', participantsRouter)
    .use('/bets', participantsRouter)
    .use(errorHandlerMiddleware);

export default app;
