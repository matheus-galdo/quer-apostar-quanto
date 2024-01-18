import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ApplicationError } from '@/protocols';

export function errorHandlerMiddleware(error: Error | ApplicationError, req: Request, res: Response) {
    if ('statusCode' in error) {
        return res.status(error.statusCode).send({ message: error.message });
    }

    console.log(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}
