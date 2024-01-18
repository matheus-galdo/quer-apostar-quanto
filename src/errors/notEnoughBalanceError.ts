import { ApplicationError } from "@/protocols";
import httpStatus from "http-status";

export function notEnoughBalanceError(): ApplicationError {
    return {
        name: 'notEnoughBalanceError',
        message: 'Participant balance is not enough to make this bet',
        statusCode: httpStatus.UNPROCESSABLE_ENTITY,
    }   
}