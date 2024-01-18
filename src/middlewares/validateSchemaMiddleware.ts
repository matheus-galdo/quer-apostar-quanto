import { invalidDataError } from "@/errors";
import { invalidRouteParamError } from "@/errors/invalidRouteParamError";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

type RequestContentType = "body" | "params" | "query" | "headers";

export function validateBody(schema: ObjectSchema) {
    return validationMiddleware(schema, 'body');
}

export function validateRouteParams(schema: ObjectSchema) {
    return validationMiddleware(schema, 'params');
}

function validationMiddleware(schema: ObjectSchema, type: RequestContentType) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req[type]);

        if (validation.error) {
            let errorMessage = '';
            validation.error.details.forEach((d) => (errorMessage += d.message + ' '));
            
            if (type === "params") {
                throw invalidRouteParamError(errorMessage)
            }
            
            throw invalidDataError(errorMessage);
        }

        next();
    }
}