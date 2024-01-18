import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import httpStatus from 'http-status';
import { errorHandlerMiddleware } from './middlewares';

const app = express();

app
    .use(express.json())
    .use(cors())
    // .use(cors())
    .use(errorHandlerMiddleware);

export default app;
