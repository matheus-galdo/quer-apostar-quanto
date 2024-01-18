import { ApplicationError } from "@/protocols";
import httpStatus from "http-status";

export function notFoundError(message?: string): ApplicationError {
    return {
        name: 'notFoundError',
        message: message || 'not found error',
        statusCode: httpStatus.NOT_FOUND,
    }   
}