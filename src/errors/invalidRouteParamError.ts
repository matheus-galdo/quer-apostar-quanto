import { ApplicationError } from "@/protocols";
import httpStatus from "http-status";

export function invalidRouteParamError(message: string): ApplicationError {
    return {
        name: 'invalidRouteParamError',
        message: `Invalid route param: ${message}`,
        statusCode: httpStatus.UNPROCESSABLE_ENTITY,
    }   
}