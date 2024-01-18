import { ApplicationError } from "@/protocols";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function errorHandlerMiddleware(
    error: Error | ApplicationError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if ('statusCode' in error) {
        return res.status(error.statusCode).send(error.message);
    }

    console.log(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}