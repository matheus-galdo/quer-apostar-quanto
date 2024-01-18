import { ApplicationError } from "@/protocols";
import httpStatus from "http-status";

export function invalidDataError(message: string): ApplicationError {
    return {
        name: 'invalidDataError',
        message: `Invalid data: ${message}`,
        statusCode: httpStatus.UNPROCESSABLE_ENTITY,
    }   
}