import { ApplicationError } from "@/protocols";
import httpStatus from "http-status";

export function invalidParticipantBalanceAmount(): ApplicationError {
    return {
        name: 'invalidParticipantBalanceAmount',
        message: 'Invalid participant balance amount',
        statusCode: httpStatus.UNPROCESSABLE_ENTITY,
    }   
}