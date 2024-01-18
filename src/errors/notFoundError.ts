import { ApplicationError } from "@/protocols";
import httpStatus from "http-status";

export function notFoundError(message?: string): ApplicationError {
    return {
        name: 'notFoundError',
        message: `The requested ${message} was not found` || 'not found error',
        statusCode: httpStatus.NOT_FOUND,
    }   
}