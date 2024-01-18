import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

type RequestContentType = "body" | "params" | "query" | "headers";

export function validateSchemaMiddleware(schema: ObjectSchema) {
    return baseValidationMiddleware(schema, 'params');
}

export function validateRouteParamsMiddleware(schema: ObjectSchema) {
    return baseValidationMiddleware(schema, 'params');
}

function baseValidationMiddleware(schema: ObjectSchema, type: RequestContentType) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req[type]);
        if (validation.error) {
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(validation.error.message);
        }

        next();
    }
}